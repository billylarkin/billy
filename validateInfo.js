export default function validateInfo(values) {
  let errors = {};
  //UserName
  if (!values.username) {
    errors.username = "Username required";
  }
  //Email
  //checks if its empty
  if (!values.email) {
    errors.email = "Email required";
    //Validate email gotten from the internet >.>
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //Password
  //checks if its empty
  if (!values.password) {
    errors.password = "Password is required";
    //checks if its at least 6 chars long
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be six characters or more";
  }
  //Confirm Password
  //checks if its empty
  if (!values.password2) {
    errors.password2 = "Password is required";
    //checks if its the same as Password
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
