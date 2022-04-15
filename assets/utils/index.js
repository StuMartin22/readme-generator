// packages and files required
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


//array of objects holding questions for user.
const userInput = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'about',
      message: 'Give a small description of your application. What is it about?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licensure are you using?',
      choices: ['MIT License','Apache 2.0','Unilicense'],
    },
    {
      type: 'checkbox',
      name: 'technologies',
      message: 'Did you use any of the following technologies?',
      choices: ['HTML','CSS','JS','none']
    },
    {
      type: 'list',
      name: 'images',
      message: 'How many images are you wanting to include?',
      choices: ['one','two','three']
    },
    {
      type: 'confirm',
      name: 'productionVideo',
      message: 'Do you have a video to include?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please input how to install your application',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your app meant to be used? Describe its functionality.',
    },
    {
      type: 'confirm',
      name: 'contributions',
      message: 'Do you want to accept contributions?',
    },
    {
      type: 'confirm',
      name: 'liveLink',
      message: 'Does your application have a live link?',
    },
    {
      type: 'input',
      name: 'repoLink',
      message: 'Please enter the link to your repo for the project.',
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'year',
      message: 'Please enter the 4 digit year',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please insert your email address.',
    },
    {
      type: 'input',
      name: 'authorGitHub',
      message: 'Please enter your GitHub username.',
    },
  ]);
};
// uses init to initiate the questions. answers from userInput are written to a md file called README which is created through generateMarkdown which passes the userInput Answers
const init = () => {
    userInput()
      .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README'))
      .catch((err) => console.error(err));
  };
  //calls initiation
  init();

