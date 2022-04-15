//puts badge icons in readme of options user selects in the technologies section.
function renderTechnology(answers) { 
    if (answers.technologies === "HTML") {
    return `<img src="https://img.shields.io/badge/HTML-orange" />`
  } else if (answers.license === "CSS") { 
    return `<img src="https://img.shields.io/badge/CSS-blue" />`
  } else if (answers.license === "Javascript") {
    return `<img src="https://img.shields.io/badge/JavaScript-red" />`
  } else if (answers.technologies === 'none'){
    return ``
  } else {
    return ``}
  };

  module.exports = renderTechnology;