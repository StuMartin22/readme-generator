function renderImages (answers) {
    if (answers.images === 'one') {
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    } else if (answers.images === 'two') {
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,
        `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    } else if (answers.images === 'three') {
        return `<p>![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")</p>`,
        `<p>![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")</p>`,
        `<p>![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")</p>`
    } else {
        return ``
    }
};

function renderVideo (answers) {
    if (answers.productionVideo === 'true' || 'yes') {
        return `<a href="VIDEOURLGOESHERE">TEXTFORVIDEOLINKGOESHERE</a>`
    } else {
        return ``
    }
};

module.exports = {renderImages, renderVideo}