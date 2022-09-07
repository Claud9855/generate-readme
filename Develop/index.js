// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const {writeFile} = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the project's description?", "What is your project installation instructions?", "What is your project's usage information?", "What is your project's contributions?", "What is the project's test instruction?", "What are the project's licenses?", "What is your Github's username?", "What is your email?",];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success! ReadMe file created.'));
}

// TODO: Create a function to initialize app
function init() {
    prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installationInstructions'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usageInformation'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testInstructions'
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['None', 'Apache', 'GNU', 'Academic', 'MIT', 'Mozilla', 'Eclipse', 'Open']
        },
        {
            type: 'input',
            message: questions[7],
            name: 'githubUserName'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }
    ])
    .then(({title, description, installationInstructions, usageInformation, contribution, testInstructions, license, githubUserName, email}) => {
        writeToFile('./dist/README.md', generateMarkdown({title, description, installationInstructions, usageInformation, contribution, testInstructions, license, githubUserName, email}) );
        
    });
}

// Function call to initialize app
init();