const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_2 = document.getElementById("password_2");
const modal = document.getElementById("modal");
const modal_text = document.getElementById("modal__text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password_2Value = password_2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccesFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccesFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length <= 5) {
    setErrorFor(password, "Password need atleast 6 characters");
  } else {
    setSuccesFor(password);
  }
  if (password_2Value === "") {
    setErrorFor(password_2, "Password cannot be blank");
  } else if (password_2Value.length <= 5) {
    setErrorFor(password_2, "Password need atleast 6 characters");
  } else if (passwordValue !== password_2Value) {
    setErrorFor(password_2, "Passwords does not match");
  } else {
    setSuccesFor(password_2);
  }
  if (
    username == "" ||
    emailValue == "" ||
    passwordValue == "" ||
    password_2Value == ""
  ) {
    modal.style.display = "flex";
    modal_text.innerText = "All fields are required!";
  } else {
    modal.style.display = "flex";
    modal_text.innerText = "Succesfull register account!";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form__control error";
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control sucess";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

window.onclick = function (event) {
  if (event.target !== modal) {
    modal.style.display = "none";
  }
};
