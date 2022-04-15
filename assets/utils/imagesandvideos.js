function renderImages (answers){
    if(answers.images === 'one'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else if (answers.images === 'two'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else if (answers.images === 'three'){
        return `![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`,`![Image of WHATEVER THE IMAGE IS GOES HERE. IMAGE ALT TEXT GOES HERE.]( ./LOCALFILEPATHHERE "NAMEOFIMAGEHERE")`
    }else{
        return ``
    }
};

function renderVideo (answers){
    if (answers.productionVideo === 'Yes'){
        return `<a href="VIDEOURLGOESHERE">TEXTFORVIDEOLINKGOESHERE</a>`
    }else if (answers.productionVideo === 'No'){
        return ``
    }else {
        return ``
    }
};

module.exports = renderImages, renderVideo;