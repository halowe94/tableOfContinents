//let $ = require("jquery");
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

let submitBtn = document.getElementById("form");
console.log('submitBtn page');
console.log(submitBtn);

const submitEmail =  function(event){
    event.preventDefault()
    return $.ajax({
        url: '/api/continents/emails/',
        data: {email: document.getElementById("emailInput").value},
        method: "POST",
    });
 };

submitBtn.addEventListener("click", submitEmail);
