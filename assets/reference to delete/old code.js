// WHAT I NEED
// Title, 
//technologies? dropdown, HTML, CSS, JAVASCRIPT, NODEJS,
// description ABOUT -- IMAGES
// table of contents (Autofill with top, installation, usage, contributing, tests, licensing, questions)
// installation,
// usage,
// contributing,
// tests,
// license (&badge) - list of options,
// questions -- email section w/ instructions how to reach me, 
// links take user to corresponding section of readme

const generateMarkdown = ({ title, html, css, javascript, about, screenCap, screenCapTwo, screenCapThree, productionVideo, functionality, installation, contributions, liveLink, repoLink, authorName, email, authorGitHub  }) =>
<h1 align="center"> ${title} </h1>
<h1 align="center"></h1>

---

<h1 align="center">About This Application</h1>

${about}

---

<h1 align="center">Table of Contents</h1>
<h2 alight="center">About</h2>
<h2 alight="center">Technologies Used</h2>
<h2 alight="center">Images and Videos</h2>
<h2 alight="center">Installation</h2>
<h2 alight="center">Usage</h2>
<h2 alight="center">Contributing</h2>
<h2 alight="center">Tests</h2>
<h2 alight="center">License</h2>
<h2 alight="center">Questions?</h2>

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

<h1 alight="center">Installation</h1>

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
<p alight="center">${email}</p>
<p align="center"><a href="https://github.com/" + ${authorGitHub} >GitHub Link</a></p>




