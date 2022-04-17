function renderImages (answers){
    if(answers.images === 'one'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else if (answers.images === 'two'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,
        `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else if (answers.images === 'three'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,
        `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,
        `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else{
        return ``
    }
};

function renderVideo (answers){
    if (answers.productionVideo == 'true'){
        return `<p><a href="VIDEOURLGOESHERE">TEXTFORVIDEOLINKGOESHERE</a></p>`
    }else {
        return ``
    }
};

module.exports = {renderImages, renderVideo}