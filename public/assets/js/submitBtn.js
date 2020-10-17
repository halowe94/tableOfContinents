let submitBtn = document.getElementById("submitBtn");
let emailInput = document.getElementById("emailInput");

var submitEmail = function (emailInput) {
    return $.ajax({
      url: "/api/emails",
      data: emails,
      method: "POST",
    });
  };

submitFunc(){
    console.log(emailInput);
    submitBtn.addEventListener("click", submitEmail);
};

submitFunc();

