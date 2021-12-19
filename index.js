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
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username. (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your repository!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Which sections would you like to include in your table of contents? (Check all that apply)',
            choices: [' * [Installation](#installation)',
            ' * [Usage](#usage)',
            ' * [Credits](#credits)',
            ' * [License](#license)',
            ' * [Contributing](#contributing)',
            ' * [Tests](#tests)',
            ' * [Questions](#questions)']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
        },
        {
            type: 'checkbox',
            name:'license',
            message: 'Which license would you like? (Check all that apply)',
            choices: ['MIT', 'GNU', 'Apache', 'Rust']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
        }        
    ]).then(userInput => {
        generateMarkdown(userInput);
        const readmeText = generateMarkdown(userInput);
        writeToFile(readmeText);
        console.log(readmeText);
    })
}

// Function call to initialize app
init();


