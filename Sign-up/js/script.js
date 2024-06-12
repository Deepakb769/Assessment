// let form = document.getElementById("form");

let user = document.getElementById("user").value;
let first = document.getElementById("first").value;
let last = document.getElementById("last").value;



function submitAction(){

    if(user || first || last === ''){
        alert("Please fill in the form")
    }
}