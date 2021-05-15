(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function checkValidityLogin(em, pas) {
  let email = document.getElementById(em);
  let isEmailValid = false;
  let isPasswordValid = false;
  invalEm = document.getElementById("invalid-for-" + em);
  email.classList.remove("is-invalid");
  email.classList.remove("is-valid");
  if (email.value === "") {
    this.event.preventDefault();
    email.classList.add("is-invalid");
    invalEm.innerHTML = "Email cannot be empty";
  } else if (!email.value.includes("@")) {
    this.event.preventDefault();
    email.classList.add("is-invalid");
    invalEm.innerHTML = 'Email must contain "@"';
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    isEmailValid = true;
  }
  let pass = document.getElementById(pas);
  invalPas = document.getElementById("invalid-for-" + pas);
  pass.classList.remove("is-invalid");
  pass.classList.remove("is-valid");
  if (pass.value === "") {
    this.event.preventDefault();
    pass.classList.add("is-invalid");
    invalPas.innerHTML = "Password cannot be empty";
  } else if (pas === "passwd2" && pass.value.length < 8) {
    this.event.preventDefault();
    pass.classList.add("is-invalid");
    invalPas.innerHTML = "Password must be atleast 8 characters long";
  } else {
    pass.classList.remove("is-invalid");
    pass.classList.add("is-valid");
    isPasswordValid = true;
  }
  if (em === "Email2") {
    fn = document.getElementById("fname");
    if (fn.value === "") {
      this.event.preventDefault();
      document.getElementById("fname").classList.add("is-invalid");
      isPasswordValid = false;
    } else {
      fn.classList.add("is-valid");
      fn.classList.remove("is-invalid");
    }
    if (document.getElementById("lname").value === "") {
      this.event.preventDefault();
      document.getElementById("lname").classList.add("is-invalid");
      isPasswordValid = false;
    } else {
      document.getElementById("lname").classList.add("is-valid");
      document.getElementById("lname").classList.remove("is-invalid");
    }
    if (document.getElementById("dept").value === "") {
      this.event.preventDefault();
      document.getElementById("dept").classList.add("is-invalid");
      isPasswordValid = false;
    } else {
      document.getElementById("dept").classList.add("is-valid");
      document.getElementById("dept").classList.remove("is-invalid");
    }
    if (document.getElementById("title").value === "") {
      this.event.preventDefault();
      document.getElementById("title").classList.add("is-invalid");
      isPasswordValid = false;
    } else {
      document.getElementById("title").classList.add("is-valid");
      document.getElementById("title").classList.remove("is-invalid");
    }
  }
  return isEmailValid && isPasswordValid;
}

function CheckValidityRequestForm() {
  em = $("#Email1");
  em.removeClass("is-invalid");
  em.removeClass("is-valid");
  let isemvalid = true;
  if (em.val() === "") {
    isemvalid = false;
    em.addClass("is-invalid");
    $("#invalid-for-Email1").html("Email cannot be empty!");
  }
  return isemvalid;
}
