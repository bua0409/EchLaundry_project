import InputComponent from "../../components/input.js";
import ButtonComponent from "../../components/button.js";
import { checkUsername,checkEmail, checkPassword,checkPhonenumber } from "../../common/validation.js";
class RegisterScreen {
  $username;
  $email;
  $password;
  $confirmPassword;
  $phoneNumber;

  $submit;

  $container;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("login-form", "d-flex");

    this.$imageCover = document.createElement("div");
    this.$imageCover.classList.add("img-cover");

    this.$formRegister = document.createElement("form");
    this.$formRegister.classList.add("form-container");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$titleScreen = document.createElement("div");
    this.$titleScreen.classList.add("big-title");
    this.$titleScreen.innerText = "Login";

    this.$username = new InputComponent(
      "Username",
      "username",
      "user-name",
      "text",
      "User name..."
    );

    this.$email = new InputComponent(
      "Email address",
      "email",
      "login-email",
      "email",
      "Your email address..."
    );
    this.$password = new InputComponent(
      "Password",
      "password",
      "login-password",
      "password",
      "Your password..."
    );
    this.$confirmPassword = new InputComponent(
      "Confirm Password",
      "confirmPassword",
      "confirm-password",
      "password",
      "Confirm your password..."
    );
    this.$phoneNumber = new InputComponent(
      "Phone Number",
      "phoneNumber",
      "phone-number",
      "number",
      "Your phone number..."
    );
    this.$btnSubmit = new ButtonComponent(
      "Login",
      ["btn", "btn-primary", "d-block", "mt-3"],
      "submit"
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword ,phoneNumber} = e.target;
    console.log(email.value, password.value);
    let isError = false;
    if(checkUsername(username.value)!==null){
        isError = true;
        this.$username.setError(checkUsername(username.value))
    } else{
      this.$username.setError("")
    }
    if (checkEmail(email.value) !== null) {
      isError = true;
      this.$email.setError(checkEmail(email.value));
    } else{
      this.$email.setError("")
    }
    if (checkPassword(password.value) !== null) {
      isError = true;
      this.$password.setError(checkPassword(password.value));
    } else{
      this.$password.setError("")
    }
    if (checkPassword(confirmPassword.value)!==null) {
        isError = true;
      this.$confirmPassword.setError(checkPassword(confirmPassword.value));
    } else{
      this.$confirmPassword.setError("")
    }
    if (confirmPassword.value !== password){
        this.$confirmPassword.setError("Confirm password is not the same")
    } else{
      this.$confirmPassword.setError("")
    }
    if(checkPhonenumber(phoneNumber.value)!== null){
        isError = true;
        this.$phoneNumber.setError(checkPhonenumber(phoneNumber.value));
    } else{
      this.$phoneNumber.setError("")
    }
    if (!isError) {
      console.log("thanh cong");
    }
  };
  render() {
    this.$formRegister.append(
      this.$titleScreen,
      this.$username.render(),
      this.$email.render(),
      this.$password.render(),
      this.$confirmPassword.render(),
      this.$phoneNumber.render(),
      this.$btnSubmit.render()
    );
    this.$container.append(this.$imageCover, this.$formRegister);
    return this.$container;
  }
}
export default RegisterScreen;
