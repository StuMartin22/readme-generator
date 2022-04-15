function renderLiveLink(answers){
if (answers.liveLink === "Y") {
    return `<a href="PUT YOUR URL HERE">and your link text here</a>`
  } else if (answers.liveLink === "N") { 
    return ``
  } else {
    return ``
  }
}

module.exports = renderLiveLink;