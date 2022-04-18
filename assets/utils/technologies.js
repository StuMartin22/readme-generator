const htmlBadge = '`<img src="https://img.shields.io/badge/HTML-orange"/>`'
const cssBadge = '`<img src="https://img.shields.io/badge/CSS-blue"/>`'
const jsBadge = '`<img src="https://img.shields.io/badge/JavaScript-red"/>`'

function HTMLanswers (answers) {
  if (answers.htmlYN === 'true') {
    return htmlBadge
  } else {
    return ``
  }
}

function CSSanswers (answers) {
  if (answers.cssYN === 'true') {
    return cssBadge
  } else {
    return ``
  }
}

function JSanswers (answers) {
  if (answers.jsYN === 'true') {
    return jsBadge
  } else {
    return ``
  }
}

  module.exports = {HTMLanswers, CSSanswers, JSanswers};
  // module.exports = technologyAnswers;