// Ar trebui sa parcurgi stringul, găsește < și știi că ești în tag, iei substr până la primul > 
// și ai atributele, tii minte unde e > și apoi iei conținutul ( mai apoi faci excepția in caz că e />

// Daca vine tot < tagname creiezi un nou tag și îl reții la părinte
// Daca e string atunci e doar string


let myString='<div class="btn-header"><este_2 href="tel:0232969"><span>Call center: 0232 969</span></a></div>'
//let myString='<div class="btn-header"><este_1 <este_2 href="tel:0232969">><span>Call center: 0232 969</span></a></div>'

let j=0
let k=0

for (let i = 0; i <= myString.length; i++) {
    if (myString[i] == "<"){
        j=i
        
    }else if(myString[i] == ">"){
        k=i+1
        if (k>j){
            let result = myString.substring(j, k)
            console.log(result)
        }
    }




    //console.log(myString[i])
  }