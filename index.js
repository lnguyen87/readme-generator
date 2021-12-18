// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(readmeText) {
    fs.writeFileSync('./output/README.md', readmeText)
}


// TODO: Create a function to initialize app
function init(userInput) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name:'license',
            message: 'Which license would you like?',
            choices: ['MIT', 'GNU', 'Apache', 'Rust']
        }
    ]).then(userInput => {
        generateMarkdown(userInput);
        const readmeText = generateMarkdown(userInput);
        writeToFile(readmeText);
        console.log(readmeText);
        console.log(data.license);
    })
}

// Function call to initialize app
init();


