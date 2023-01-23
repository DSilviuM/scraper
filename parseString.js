// Ar trebui sa parcurgi stringul, găsește < și știi că ești în tag, iei substr până la primul > 
// și ai atributele, tii minte unde e > și apoi iei conținutul ( mai apoi faci excepția in caz că e />

// Daca vine tot < tagname creiezi un nou tag și îl reții la părinte
// Daca e string atunci e doar string
// [{tag:”div", content: { tag:"p" content: ""}}]

//let myString='<div class="btn-header"><este_1 <este_2 href="tel:0232969">><span>Call center: 0232 969</span></a></div>'

//  [{ tag: ”tag”, text: ”text"}, { tag: ”tag”, text: ”text2"}]

myString='<tag>text</tag><tag2>text2</tag2>'
let myArray=[]
let j=0
let k=0
let textToAdd=""
let tagToAdd =""
for (let i = 0; i <= myString.length; i++) {
    if (myString[i] == "<"){
        j=i
        if (j>k){
            let text = myString.substring(k+1, j)
            if (text != ""){                
                textToAdd = text
            }            
        }
        
    }else if(myString[i] == ">"){
        k=i
        if (k>j){
            let tag = myString.substring(j+1, k)
            if (!tag.includes("/")){
                tagToAdd = tag                
            }            
        }
    }

    if(textToAdd !="" && tagToAdd !=""){
        var addToArry={
            [tagToAdd]:tagToAdd,
            [textToAdd]:textToAdd
        }
        myArray.push(addToArry)        
        textToAdd=""
        tagToAdd =""
        }    
    }
    console.log(myArray)
    
    //  [{ tag: ”tag”, text: ”text"}, { tag: ”tag”, text: ”text2"}]


// ========= functioneaza cu myString='<div class="btn-header"><este_2 href="tel:0232969"><span>Call center: 0232 969</span></a></div>'========
// for (let i = 0; i <= myString.length; i++) {
//     if (myString[i] == "<"){
//         j=i
        
//     }else if(myString[i] == ">"){
//         k=i+1
//         if (k>j){
//             let result = myString.substring(j, k)
//             console.log(result)
//         }
//     }




    //console.log(myString[i])
