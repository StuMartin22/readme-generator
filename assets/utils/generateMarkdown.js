// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

function renderLicenseBadge(answers) { 

  if (answers.license === "MIT License") {
  return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (answers.license === "Apache 2.0") { 
  return `![License:Apache2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
} else if (answers.license === "Unilicense") {
  return `![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)`
} else {
  return ``}
};
// ^ can use this for html, CSS, JS badges -- 
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { ^ same thing as above but link to the license instead of img

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {} ^this is copy right section but put actual text in here /block of text

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return  `<h1 align="center"> ${answers.title} </h1>
  <h1 align="center"></h1>
  
  ---
  
  <h1 align="center">About This Application</h1>
  
  ${answers.about}

  <h1 align="center">License Type</h1>

  ${answers.license}
  ${renderLicenseBadge(answers)}
  
  ---
  
  <h1 align="center">Table of Contents</h1>
  <h2 align="center">About</h2>
  <h2 align="center">Technologies Used</h2>
  <h2 align="center">Images and Videos</h2>
  <h2 align="center">Installation</h2>
  <h2 align="center">Usage</h2>
  <h2 align="center">Contributing</h2>
  <h2 align="center">Tests</h2>
  <h2 align="center">License</h2>
  <h2 align="center">Questions?</h2>
  
  ---
  
  <h1 align="center">Technologies Used</h1>
  
  ${answers.html} ${answers.css} ${answers.javascript}
  
  ---
  
  <h1 align="center">Images and Videos</h1>
  
  ${answers.screenCap}
  
  ${answers.screenCapTwo}
  
  ${answers.screenCapThree}
  
  ${answers.productionVideo}
  
  ---
  
  <h1 align="center">Installation</h1>
  
  ${answers.installation}
  
  ---
  
  <h1 align="center">Usage</h1>
  
  ${answers.usage}
  
  ---
  
  <h1 align="center">Contributions</h1>
  
  ${answers.contributions}
  
  ---
  
  <h1 align="center">Current Production State</h1>
  
  <p align="center"><a href="${answers.liveLink}">Live Link</a></p>
  
  <h1 align="center">Repository for Project</h1>
  
  <p align="center"><a href="${answers.repoLink}">View Repo Here</a></p>
  
  ---
  
  <h1 align="center">Questions? Contact Me!</h1>
  
  <p align="center">${answers.authorName}</p>
  <p align="center">${answers.email}</p>
  <p align="center"><a href="https://github.com/${answers.authorGitHub}" >GitHub Link</a></p>`
};

module.exports = generateMarkdown;




// https://opensource.org/licenses/Apache-2.0 - link


// https://opensource.org/licenses/MIT -- link


// http://unlicense.org/-- link