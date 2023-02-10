// TODO: Include packages needed for this application
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
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Eclipse Public License 1.0','GNU GPL v3','None'],
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
        Markdown.generateMarkdown(data);
    } catch (err) {
        console.log('Error appending data to file', err);
    }
}
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
