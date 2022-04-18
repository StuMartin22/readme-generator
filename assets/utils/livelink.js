function renderLiveLink(answers){
if (answers.liveLink == 'yes'||'true') {
    return `<a href="PUT YOUR URL HERE">and your link text here</a>`
  } else {
    return ``
  }
}

module.exports = renderLiveLink;