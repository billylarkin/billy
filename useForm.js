import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  //this is the values for Username,email, PW, PW2 in an array with setvalues adding to it.
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  //This is the errors from validateInfo
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    // This is updating the values, name is targeting which one from SignUpPage then
    //value is changing it based on the inputs
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (localStorage.getItem("account") === null) {
      console.log("hello");
    } else {
      var account = localStorage.getItem("account");
      console.log(account);
    }
    const storage = [values];
    account = account ? account.split(",") : [];
    storage.push(account);

    // account.push(storage);
    localStorage.setItem("account", JSON.stringify(storage));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
