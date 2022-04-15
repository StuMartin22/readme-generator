const {renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require('./licensure');
const renderLiveLink = require(`./liveLink`)
const renderTechnology = require(`./technologies`)
const {renderImages, renderVideo} = require(`./imagesandvideos`)
const contributionsOrNah = require(`./contributions`)

//a function to generate markdown for README
function generateMarkdown(answers) {
  return  `<h1 align="center" id="top"> ${answers.title} </h1>
  <h1 align="center"></h1>
  
  ---
  
  <h1 align="center" id="about">About This Application</h1>
  
  ${answers.about}

  <h1 align="center" id="license">License Type</h1>


  ${renderLicenseBadge(answers)}
  <br>
  ${renderLicenseLink(answers)}
  <br>
  ${renderLicenseSection(answers)}
  
  ---
  
  <h1 align="center"><a href="#top">Table of Contents</a></h1>
  <h2 align="center"><a href="#about>About</a></h2>
  <h2 align="center"><a href="#technologies">Technologies Used</a></h2>
  <h2 align="center"><a href="#images">Images and Videos</a></h2>
  <h2 align="center"><a href="#installation">Installation</a></h2>
  <h2 align="center"><a href="#usage">Usage</a></h2>
  <h2 align="center"><a href="#contributing">Contributing</a></h2>
  <h2 align="center"><a href="#tests">Tests</a></h2>
  <h2 align="center"><a href="#license">License</a></h2>
  <h2 align="center"><a href="#current">Links</a></h2>
  <h2 align="center"><a href="#questions">Questions?</a></h2>
  
  ---
  
  <h1 align="center" id="technologies">Technologies Used</h1>
  
  ${renderTechnology(answers)}
  
  ---
  
  <h1 align="center" id="images">Images and Videos</h1>
  
  ${renderImages(answers)}
  
  ${renderVideo(answers)}
  
  ---
  
  <h1 align="center" id="installation">Installation</h1>
  
  ${answers.installation}
  
  ---
  
  <h1 align="center" id="usage">Usage</h1>
  
  ${answers.usage}
  
  ---
  
  <h1 align="center" id="contributions">Contributions</h1>
  
  ${contributionsOrNah(answers)}
  
  ---
  
  <h1 align="center"id="current">Current Production State</h1>
  
  ${renderLiveLink(answers)}
  
  <h1 align="center">Repository for Project</h1>
  
  <p align="center"><a href="${answers.repoLink}">View Repo Here</a></p>
  
  ---
  
  <h1 align="center" id="questions">Questions? Contact Me!</h1>
  
  <p align="center">${answers.authorName}</p>
  <p align="center">${answers.email}</p>
  <p align="center"><a href="https://github.com/${answers.authorGitHub}" >GitHub Link</a></p>`
};

module.exports = generateMarkdown;