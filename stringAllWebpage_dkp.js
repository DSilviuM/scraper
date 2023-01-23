import fetch from "node-fetch";

async function getText(file) {

    let myObject = await fetch(file)
    let myText = await myObject.text()
    let stringAllWebpage = myText.replace(/\r?\n/,'')
    return stringAllWebpage
}
//console.log(stringAllWebpage.length)

function test() {
    console.log("test")
}

export default { getText, test };

//console.log("done")
