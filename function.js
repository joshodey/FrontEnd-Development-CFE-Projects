let age = document.querySelector('#age');
let face = document.querySelector("#qtag");

if (face==2) {
    faceMask = true;
}
else faceMask = false;
console.log(faceMask);

if (age > 11) {
    ageRange = true;
}
else ageRange= false;
console.log(ageRange);

console.log(age);
console.log(face);

function agfaSubmit() {
var category = ageRange? (faceMask? alert ('You are welcome to Ghoham Boutique'): alert("Sorry, You don't have a Face Mask! Come back Later with a Face Mask")) :
(faceMask? alert ("Sorry, you are below the age of 12, you cannot have access into the mall. Please step aside!"): swal("You have Made an invalid entry, Please try again"));
console.log(category);
document.getElementById("demo").innerHTML = category;
}


// totalVisitors += 1;
// if(typeof name.value !== "string"){
//     alert("please enter a name. numbers or symbols are not allowed")   
// } else if(age.value < 12){ 
//     alert(${name.value} , 'you have to be older than 12 years old to enter`)
//         deniedVisitors += 1;
// } else if (select.value !== "yes"){
//     alert("Sorry, you need to have your facemask on to enter")
//         deniedVisitors += 1;
// } else{
//     alert('welcome to Eminence Mall, ' + name.value)
//     allowedVisitors += 1;
// }






















// let age = "";
// let face = "";
// //Pick value from Are you wearing a facemask
// var faceMask = 
// document.getElementsByClassName("age").value;
// //pick value from ageRange
// var ageRange = 
// document.getElementsByName("qtag").value; 
// // if (ageRange > 11) {
// //     age == true;
// // }
// // if (faceMask ==2) {
// //     face == true;
// // }

// function myFunction() {

//     var category = faceMask? (ageRange>11 ? "Welcome to Ghoham Shopping Mall" : "You must be 12 years or older to enter") : (ageRange> 11 ? "You've been denied entry into Ghoham Shopping Complex" : "You have provided false information! Step Aside");
// console.log(category);
// document.getElementById("demo").innerHTML = category;
// }

//code that gets the value from an input
/* its script html codes as follows below
--- <input type="number"
            id="myNumber"
            value="10">  
--- button codes below
    <button onclick="myFunction()">  
            Click Here!  
        </button>  
         <p id="demo"></p>  
*/