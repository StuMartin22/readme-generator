//puts badge icons in readme of options user selects in the technologies section.
// function renderTechnology(answers) { 
//     if (answers.technologies === "HTML") {
//     return '![<img src="https://img.shields.io/badge/HTML-orange"/>';
//   } else if (answers.technologies === "CSS") { 
//     return '<img src="https://img.shields.io/badge/CSS-blue"/>';
//   } else if (answers.technologies === "JS") {
//     return '<img src="https://img.shields.io/badge/JavaScript-red"/>';
//   } else {
//     return ``}
//   };

//   function HTMLanswers(answers){
//     if (answers.technologies === "HTML") {
//       return '<img src="https://img.shields.io/badge/HTML-orange"/>'
//     } else { return ''
//   }
// };

//   function CSSanswers(answers){
//     if (answers.technologies === "CSS") {
//       return '<img src="https://img.shields.io/badge/CSS-blue"/>'
//     } else { return ''
//   }
//   };

//   function JSanswers(answers){
//     if (answers.technologies === "JS") {
//       return '<img src="https://img.shields.io/badge/JavaScript-red"/>'
//     } else { return ''
//   }
// };

// function technologyAnswers(answers){
//   if (answers.technologies === "HTML") {
//     return '<img src="https://img.shields.io/badge/HTML-orange"/>'
//   if (answers.technologies === "CSS") {
//     return '<img src="https://img.shields.io/badge/CSS-blue"/>'
//   if (answers.technologies === "JS") {
//     return '<img src="https://img.shields.io/badge/JavaScript-red"/>'
//   } else { return ''
//   }
//   }
//   }
// }

function HTMLanswers (answers) {
  if (answers.htmlYN === 'yes' || 'true') {
    return '<img src="https://img.shields.io/badge/HTML-orange"/>'
  } else {
    return ''
  }
}

function CSSanswers (answers) {
  if (answers.cssYN === 'yes' || 'true') {
    return '<img src="https://img.shields.io/badge/CSS-blue"/>'
  } else {
    return ''
  }
}

function JSanswers (answers) {
  if (answers.jsYN === 'yes' || 'true') {
    return '<img src="https://img.shields.io/badge/JavaScript-red"/>'
  } else {
    return ''
  }
}

  module.exports = {HTMLanswers, CSSanswers, JSanswers};
  // module.exports = technologyAnswers;