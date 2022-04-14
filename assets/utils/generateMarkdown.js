// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return  `<h1 align="center"> ${title} </h1>
  <h1 align="center"></h1>
  
  ---
  
  <h1 align="center">About This Application</h1>
  
  ${about}
  
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
  
  ${html} ${css} ${javascript}
  
  ---
  
  <h1 align="center">Images and Videos</h1>
  
  ${screenCap}
  
  ${screenCapTwo}
  
  ${screenCapThree}
  
  ${productionVideo}
  
  ---
  
  <h1 align="center">Installation</h1>
  
  ${installation}
  
  ---
  
  <h1 align="center">Functionality</h1>
  
  ${functionality}
  
  ---
  
  <h1 align="center">Contributions</h1>
  
  ${contributions}
  
  ---
  
  <h1 align="center">Current Production State</h1>
  
  <p align="center"><a href="${liveLink}">Live Link</a></p>
  
  <h1 align="center">Repository for Project</h1>
  
  <p align="center"><a href="${repoLink}">View Repo Here</a></p>
  
  ---
  
  <h1 align="center">Questions? Contact Me!</h1>
  
  <p align="center">${authorName}</p>
  <p align="center">${email}</p>
  <p align="center"><a href="https://github.com/${authorGitHub}" >GitHub Link</a></p>`
};

module.exports = generateMarkdown;




