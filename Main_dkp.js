import webpageParser from './stringAllWebpage_dkp.js';

// webSite='https://www.apavital.ro/intreruperi-de-apa'
// //webSite='https://the-internet.herokuapp.com/'


// setTimeout(() => {
//     console.log("Inside setTimeout")
//     let theString=getText(webSite)
//     console.log(theString)
// },
// 2000
// )

async function getText(){

    const text = await webpageParser.getText('https://www.apavital.ro/intreruperi-de-apa');
    console.log(text);
}

webpageParser.test();

getText();
