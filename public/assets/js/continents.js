let submitBtn = document.getElementById("form");
// console.log("submitBtn page");
// console.log(submitBtn);
// console.log(document.getElementById("emailInput").value);

const submitEmail = function (event) {
  //   console.log("hi it works");
  event.preventDefault();
  $.ajax({
    url: "/api/continents/emails",
    data: document.getElementById("emailInput").value,
    method: "POST",
  });
};

submitBtn.addEventListener("submitBtn", submitEmail);
