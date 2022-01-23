// constructor is required from file
const Engineer = require('../lib/engineer');

// creating the engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Joe', 5677, 'joe@gmail', 'joeschmoe09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets the github account from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Joe', 5677, 'joe@gmail', 'joeschmoe09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets the role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Joe', 5677, 'joe@gmail', 'joeschmoe09');

    expect(engineer.getRole()).toEqual("Engineer");
});


