function Submit(){
    var name = document.getElementById("Name").value
    var surname = document.getElementById("Surname").value
    var contacts = document.getElementById("contacts").value
    var email = document.getElementById("email").value
    var Universities = document.getElementById("Universities").value

var record = {
    name : name,
    surname : surname,
    contact : contacts,
    email :email,
    Currently : radio1,
    Highest : radio2,
    Age : radio3,
    Gender : radio4,
    Universities : Universities,
} 
const url = "https://formspree.io/xpzvqwrq"
let send = JSON.stringify(record)

fetch(url, {method:"POST", body:send, headers:{"Content-Type" : "application/json"}}).catch(function(error){console.log(error)})



    console.log(record)
}

var radio1, radio2, radio3, radio4

function clicked(value){
 radio1 = value
}
function Click(value){
    radio2 = value
    console.log(radio2)
}
function choose(value){
    radio3 = value
}
function touch(value){
    radio4 = value
}
