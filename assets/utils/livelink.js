function renderLiveLink(answers){
if (answers.liveLink == "true") {
    return `<a href="PUT YOUR URL HERE">and your link text here</a>`
  } else if (answers.liveLink == "false") { 
    return ``
  } else {
    return ``
  }
}

module.exports = renderLiveLink;