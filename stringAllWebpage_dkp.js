

export async function getText(file) {    
    let myObject = await fetch(file)
    let myText = await myObject.text()
    stringAllWebpage = myText.replace(/\r?\n/)
    return stringAllWebpage
}
console.log(stringAllWebpage.length)

export function test(){
    console.log("test")
}

console.log("done")
