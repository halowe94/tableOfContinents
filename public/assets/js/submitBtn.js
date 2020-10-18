let $ = require("jquery");
// let submitBtn = document.getElementById("submitBtn");
// let emailInput = document.getElementById("emailInput").value;

// var submitEmail = function (emailInput) {
//     return $.ajax({
//       url: "/api/emails",
//       data: emails,
//       method: "POST",
//     });
//   };

// submitFunc(){
//     console.log(emailInput);
//     submitBtn.addEventListener("click", submitEmail);
// };

// submitFunc();

let submitBtn = document.getElementById("submitBtn");

const submitEmail =  function(event){
    console.log("hi it works")
    event.preventDefault()
    return $.ajax({
        url: "/api/continents/emails",
        data: document.getElementById("emailInput").value,
        method: "POST",
    });
 };

submitBtn.addEventListener("submit", submitEmail);
