const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./template');
let teams = []
const Manager = require('./Lib-JS/Manager')
const Engineer = require('./Lib-JS/Engineer')
const Intern = require('./Lib-JS/Intern')
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
    inquirer.prompt([  {type: 'list',
    name: 'addMember',
    message: 'Do you want to add another employee?',
    choices: ["yes", "no"]
}
   ])
        .then(function(answer) {
            console.log(answer);
        if(answer.addMember === "yes"){addRole()} 
        else {
            writeToFile(generateTeam(teams))
        }
        
        });
}
function addRole() {
    inquirer.prompt([  {type: 'list',
    name: 'addRole',
    message: 'What kind of team member do you want to add?',
    choices: ["engineer", "intern"]
}
   ])
        .then(function(answer) {
            console.log(answer);
        if(answer.addRole === "engineer"){createEngineer()} 
        else {
            createIntern()
        }
        
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
            const engineer = new Engineer(answer.engineerName, answer.Id, answer.Email, answer.github)
            teams.push(engineer)
            addMember()
        });
}
function createIntern() {
    inquirer.prompt(internquestions)
        .then(function(answer) {
            console.log(answer);
            const intern = new Intern(answer.internName, answer.Id, answer.Email, answer.school)
            teams.push(intern)
            addMember()
        });
}
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// Function call to initialize app
createManager();
