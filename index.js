const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./template');
let teams = []
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is the manager email?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is the manager id?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the egineer?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github profile?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is the egineer email?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is the egineer id?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
]
const internquestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of school?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is the intern email?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is the intern id?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
]
function addMember() {
    inquirer.prompt()
        .then(function(answer) {
            console.log(answer);
            const manager = new Manager(answer.managerName, answer.Id, answer.Email, answer.officeNumber)
            teams.push(manager)
            addMember()
        });
}


function createManager() {
    inquirer.prompt(managerQuestions)
        .then(function(answer) {
            console.log(answer);
            const manager = new Manager(answer.managerName, answer.Id, answer.Email, answer.officeNumber)
            teams.push(manager)
            addMember()
        });
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(function(answer) {
            console.log(answer);
            const engineer = new Engineer(answer.egineerName, answer.Id, answer.Email, answer.github)
            teams.push(manager)
            addMember()
        });
}
function createIntern() {
    inquirer.prompt(internquestions)
        .then(function(answer) {
            console.log(answer);
            const intern = new intern(answer.internName, answer.Id, answer.Email, answer.school)
            teams.push(manager)
            addMember()
        });
}
// Function call to initialize app
init();
