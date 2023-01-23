webSite='https://www.apavital.ro/intreruperi-de-apa'
//webSite='https://the-internet.herokuapp.com/'

async function getText(file) {    
    let myObject = await fetch(file)
    let myText = await myObject.text()
    stringAllWebpage = myText.replace(/\r?\n/)  
    console.log(stringAllWebpage)
    return stringAllWebpage
    
}
//let theString=getText(webSite)

async function secondFunction(){
    await getText(webSite)
    
  }

secondFunction()
console.log("done")

// azi vreo jumatate de zi m-am chinuit sa pot folosi "stringAllWebpage" dupa ce este executata functia
// dar problema este ca fiind o functie asyncron ea se executa intr-un thread separat iar codul meu nu asteapta ca ea sa fie gata
// in seara asta mai stau un pic sa vad daca gasesc si o alta varianta ... :(, deci nu prea ai ce vedea ca am ramas cam blocat pana rezolv asta

