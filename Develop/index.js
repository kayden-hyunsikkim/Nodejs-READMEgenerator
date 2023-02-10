// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"];



const [question1, question2, question3, question4, question5, question6, question7, question8, question9] = questions;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: question1,
        },
        {
            type: 'input',
            name: 'email',
            message: question2,
        },
        {
            type: 'input',
            name: 'projectname',
            message: question3,
        },

        {
            type: 'input',
            message: question4,
            name: 'description',
        },
        {
            type: 'checkbox',
            message: question5,
            name: 'userlicense',
            choices: ['MIT ', 'APACHE 2.0 ', 'GPL 3.0 ', 'Eclipse Public License 1.0 ','GNU GPL v3 ','None'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: question6,
            default() {
                return 'npm i';
            },
        },
        {
            type: 'input',
            name: 'tests',
            message: question7,
            default() {
                return 'npm test';
            },

        },
        {
            type: 'input',
            name: 'know',
            message: question8,
        },
        {
            type: 'input',
            name: 'contributing',
            message: question9,
        },
    ]
    )
    .then(function (data) {
        writeToFile(data);
    })




// TODO: Create a function to write README file
async function writeToFile(data) {
    try {
        const { username, email, projectname, description, userlicense, dependencies, tests, know, contributing } = data;
        console.log(userlicense);
        userlicense.forEach(licenses => {
            let license = userlicense;
            console.log(license);
        });
     
        //console.log(Markdown.generateMarkdown(data));
        const filename = `README.md`;
        fs.writeFileSync(filename, `# 09 Node.js Challenge: Professional README Generator\n`, (err) => err ? console.log(err) : console.log('1Success!')
        );
        fs.appendFileSync(filename, `## Git hub user name\n\n\n [${username}](https://github.com/${username})\n\n`, (err) => err ? console.log(err) : console.log('1Success!')
        );
        fs.appendFileSync(filename, `## E-mail address\n\n\n ${email}\n\n`, (err) => err ? console.log(err) : console.log('3Success!')
        );
        fs.appendFileSync(filename, `## Project name\n\n\n ${projectname}\n\n`, (err) => err ? console.log(err) : console.log('5Success!')
        );
        fs.appendFileSync(filename, `## Description\n\n\n ${description}\n\n`, (err) => err ? console.log(err) : console.log('7Success!')
        );
        fs.appendFileSync(filename, `## License\n\n\n ${userlicense}\n\n ![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)\n\n`, (err) => err ? console.log(err) : console.log('9Success!')
        );
        fs.appendFileSync(filename, `## dependencies\n\n\n ${dependencies}\n\n`, (err) => err ? console.log(err) : console.log('11Success!')
        );
        fs.appendFileSync(filename, `## tests\n\n\n ${tests}\n\n`, (err) => err ? console.log(err) : console.log('13Success!')
        );
        fs.appendFileSync(filename, `## Usage\n\n\n ${know}\n\n`, (err) => err ? console.log(err) : console.log('15Success!')
        );
        fs.appendFileSync(filename, `## Contributing\n\n\n ${contributing}\n\n`, (err) => err ? console.log(err) : console.log('17Success!')
        );
    } catch (err) {
        console.log('Error appending data to file', err);
    }
}
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
