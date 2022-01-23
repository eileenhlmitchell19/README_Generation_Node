// constructor is required from file
const Intern = require('../lib/intern');

// creates the intern object  
test('creates an Intern object', () => {
    const intern = new Intern('carl', 3456, 'carlbarl@rocketmail.com', 'UW');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets the university from getSchool()
test('gets employee school', () => {
    const intern = new Intern('carl', 3456, 'carlbarl@rocketmail.com', 'UW');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role of employee from getRole()
test('gets role of employee', () => {
    const intern = new Intern('carl', 3456, 'carlbarl@rocketmail.com', 'UW');

    expect(intern.getRole()).toEqual("Intern");
}); 

