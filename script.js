//submit handler 

let form = document.getElementById("form1");
form.addEventListener("submit", (e) => {
  e.preventDefault();


//getting required values from the form
let fname = document.getElementById("firstName").value;
let lname = document.getElementById("lastName").value; 
let email = document.getElementById("email").value;

//full name 
let fullName = fname + " " + lname; 
console.log(fullName);
console.log(email);

//display the values 
let successMessage = document.getElementById("successMessage")
successMessage.style.display = "block";
successMessage.querySelector("#submittedName").textContent = fullName;
successMessage.querySelector("#submittedEmail").textContent = email; 

//Timeout for alert to disappear
setTimeout(function (){
    successMessage.style.display="none";}, 4000);
});