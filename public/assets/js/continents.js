let submitBtn = document.getElementById("submitBtn");
// console.log("submitBtn page");
// console.log(submitBtn);
// console.log(document.getElementById("emailInput").value);

const submitEmail = function (event) {
  //   console.log("hi it works");
  event.preventDefault();
  let emailInput = document.getElementById("emailInput").value;
 
  $.ajax({
    url: "/api/continents/emails",
    data: {email_address: emailInput},
    method: "POST",
  });

  document.getElementById("emailInput").value = "";
};

submitBtn.addEventListener("click", submitEmail);
