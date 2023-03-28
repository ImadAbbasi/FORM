function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
// sets error inside tag of id
function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  let returnVal = true;
  clearErrors();

  // perform validation and if validation fails, set the value of returnVal to false
  let name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short!");
    returnVal = false;
  }

  let email = document.forms["myForm"]["femail"].value;
  if (email === "") {
    seterror("email", "Email is required!");
  } else if (email.length > 30) {
    seterror("email", "*Email length is too long!");
    returnVal = false;
  }

  let phone = document.forms["myForm"]["fphone"].value;
  if (phone.length != 11) {
    seterror("phone", "*Phone number should be of 11 digits!");
    returnVal = false;
  }

  let password = document.forms["myForm"]["fpass"].value;
  if (password.length < 6) {
    seterror("pass", "*Password should be 6 characters long!");
    returnVal = false;
  }
  let cpassword = document.forms["myForm"]["fcpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*Password doesn't match!");
    returnVal = false;
  }

  return returnVal;
}
