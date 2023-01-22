webSite='https://www.apavital.ro/intreruperi-de-apa'
//webSite='https://the-internet.herokuapp.com/'

var stringAllWebpage=""
async function getText(file) {    
    let myObject = await fetch(file)
    let myText = await myObject.text()
    stringAllWebpage = stringAllWebpage + myText.replace(/\r?\n/)  
    console.log(stringAllWebpage) 
    return stringAllWebpage
    
}
console.log(stringAllWebpage.length)

let theString=getText(webSite)

console.log("theString ",theString)

// test de update
console.log("done")
