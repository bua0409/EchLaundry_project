import InputComponent from "../../components/input.js";
import {ButtonComponent,WelcomeButtonComponent,
  ServicesButtonComponent,ProductsButtonComponent,AboutUsButtonComponent} from "../../components/button.js";
import RegisterScreen from "../Register/index.js";
import WelcomePageScreen from "../WelcomePage/index.js";
import { checkEmail, checkPassword } from "../../common/validation.js";
import {loginWithEmailPassword} from "../../firebase/auth.js"
import app from "../../index.js";
class LoginScreen {
  $email;
  $password;


  $submit;
  $link;

  $container;
  $imageCover;
  $formLogin;
  $titleScreen;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("login-form", "d-flex");

    this.$imageCover = document.createElement("div");
    this.$imageCover.classList.add("img-cover");

    this.$formLogin = document.createElement("form");
    this.$formLogin.classList.add("form-container");
    this.$formLogin.addEventListener("submit", this.handleSubmit);

    this.$titleScreen = document.createElement("div");
    this.$titleScreen.classList.add("big-title");
    this.$titleScreen.innerText = "Login";
    
    this.$link = document.createElement("a");
    this.$link.innerText = "I don't have an account"
    this.$link.classList.add("link");
    this.$link.addEventListener("click",this.handleChangeRegisterScreen)

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
    this.$btnSubmit = new ButtonComponent(
      "Login",
      ["btn", "btn-primary", "d-block", "mt-3"],
      "submit"
    );
    this.$imageCover.addEventListener("click",()=>{
      const home = new WelcomePageScreen;
      app.changeActiveScreen(home)
    })
  }
  setLoading =()=> {
    this.$btnSubmit.render().innerText="";
    this.$btnSubmit.render().innerHTML=`<div class="loader"></div>`
  }
  handleChangeRegisterScreen = (e) => {
    e.preventDefault();
    const register = new RegisterScreen()
    app.changeActiveScreen(register);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
    let isError = false;
    if (checkEmail(email.value) !== null) {
      isError = true;
      this.$email.setError(checkEmail(email.value));
    } else {
      this.$email.setError ("")
    }
    if (checkPassword(password.value) !== null) {
      isError = true;
      this.$password.setError(checkPassword(password.value));
    } else {
      this.$password.setError ("")
    }
    console.log("check", isError);
    if (!isError) {
      this.setLoading()
      // loginWithEmailPassword(email.value,password.value)
    }
  };
  render() {
    this.$formLogin.append(
      this.$titleScreen,
      this.$email.render(),
      this.$password.render(),
      this.$btnSubmit.render(),
      this.$link
    );
    this.$container.append(this.$imageCover, this.$formLogin);
    return this.$container;
  }
}
export default LoginScreen;
