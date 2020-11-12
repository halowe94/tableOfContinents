let submitBtn = document.getElementById("form");
// console.log("submitBtn page");
// console.log(submitBtn);
// console.log(document.getElementById("emailInput").value);

const submitEmail = function (event) {
  //   console.log("hi it works");
  let emailInput = document.getElementById("emailInput").value;
  event.preventDefault(emailInput);
  $.ajax({
    url: "/api/continents/emails",
    data: emailInput,
    method: "POST",
  });
};

submitBtn.addEventListener("submit", submitEmail);
