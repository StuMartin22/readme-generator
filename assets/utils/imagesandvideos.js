const imageLink = '`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`'
const imageLinkTwo = '`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")` `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`'
const imageLinkThree = '`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")` `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")``![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`'

function renderImages (answers) {
    if (answers.images === 'one') {
        return imageLink
    } else if (answers.images === 'two') {
        return imageLinkTwo
    } else if (answers.images === 'three') {
        return imageLinkThree
    } else
        return ``
    };

function renderVideo (answers) {
    if (answers.productionVideo === 'true' || 'yes') {
        return `<a href="VIDEOURLGOESHERE">TEXTFORVIDEOLINKGOESHERE</a>`
    } else {
        return ``
    }
};

module.exports = {renderImages, renderVideo}