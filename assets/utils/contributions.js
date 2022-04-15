function contributionsOrNah (answers){
    if (answers.contributions === 'Y'){
        return `Contact me if you'd like to contribute something to the repo of this project. Otherwise if you'd like to use the content herewithin check the licensure attached.`
    } else if (answers.contributions === 'N') {
        return 'Contributions are not currently accepted as production of application is on hiatus. Production and contributions to application may continue at a later date. Alternatively if you would like to use the content herewithin check the licensure attached.'
    } else {
        return ``
    }
};