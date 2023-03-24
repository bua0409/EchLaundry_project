import InputComponent from "../../components/input.js";
import {ButtonComponent,WelcomeButtonComponent,
    ServicesButtonComponent,ProductsButtonComponent,AboutUsButtonComponent} from "../../components/button.js";
import RegisterScreen from "../Register/index.js";
import WelcomePageScreen from "../WelcomePage/index.js";
import { checkEmail, checkPassword } from "../../common/validation.js";
import app from "../../index.js";
class AboutUsScreen {
    $order;

    $container;
    $navbar;
    $logo;
  
    $buttonNav;
    $titleScreen
  
    $dropdown;
    $home;
    $services;
    $products;
    $AboutUs;
  
    $signNav;
    $singIn;
    $singUp;
  
    constructor() {
      this.$container = document.createElement("div");
      this.$container.classList.add("d-flex");
  
      this.$navbar = document.createElement("div");
      this.$navbar.classList.add(
        "home-nav",
        "navbar-expand-lg",
        "bg-body-tertiary",
        "d-flex",
        "justify-content-evenly"
      );
  
      this.$buttonNav = document.createElement("div");
      this.$buttonNav.classList.add(
        "button-nav",
        "navbar-expand-lg",
        "bg-body-tertiary",
        "d-flex",
        "justify-content-end"
      );
  
      this.$signNav = document.createElement("div");
      this.$signNav.classList.add(
        "sign-nav",
        "navbar-expand-lg",
        "bg-body-tertiary",
        "d-flex",
        "justify-content-end"
      );
      this.$dropdown = document.createElement("div");
  
      this.$titleScreen = document.createElement("div");
      this.$titleScreen.classList.add("big-title");
      this.$titleScreen.innerText = "About Us";
  
      this.$logo = document.createElement("div");
      this.$logo.classList.add("logo-image", "d-flex");
      this.$logo.addEventListener("click",()=>{
          console.log("hunghung")
      })
      this.$home = new WelcomeButtonComponent();
      this.$services = new ServicesButtonComponent();
      this.$products = new ProductsButtonComponent();
      this.$AboutUs = new AboutUsButtonComponent();
      this.$singIn = new ButtonComponent(
        "Sign In ",
        ["btn"],
        "button",
        this.handleChangeLoginScreen
      );
      this.$singUp = new ButtonComponent(
        "Sign Up",
        ["btn"],
        "button",
        this.handleChangeRegisterScreen
      );
    }
    consoleSubmit = (e) => {
      e.preventDefault();
      console.log("clicked to login")
    }
    handleChangeLoginScreen = (e) => {
      e.preventDefault();
      const login = new LoginScreen();
      app.changeActiveScreen(login);
    };
    handleChangeRegisterScreen = (e) => {
      e.preventDefault();
      const register = new RegisterScreen();
      app.changeActiveScreen(register);
    };
    handleChangeWelcomePageScreen = (e) => {
      e.preventDefault();
      const welcomepage = new WelcomePageScreen();
      app.changeActiveScreen(welcomepage);
    };
    render() {
      this.$signNav.append(this.$singIn.render(), this.$singUp.render());
      this.$navbar.append(
        this.$logo,
        this.$home.render(),
        this.$services.render(),
        this.$products.render(),
        this.$AboutUs.render(),
        this.$signNav
      );
      this.$container.append(this.$navbar,this.$titleScreen);
      return this.$container;
    }
}
export default AboutUsScreen;
