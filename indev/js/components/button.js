import LoginScreen from "../containers/Login/index.js";
import RegisterScreen from "../containers/Register/index.js";
import WelcomePageScreen from "../containers/WelcomePage/index.js";
import ProductsScreen from "../containers/Products/index.js";
import ServicesScreen from "../containers/Services/index.js";
import AboutUsScreen from "../containers/AboutUs/index.js";
import app from "../index.js";

export class ButtonComponent {
  $btn;
  constructor(text, classList, type, callBack) {
    this.$btn = document.createElement("button");
    this.$btn.innerText = text;
    this.$btn.classList.add(...classList);
    this.$btn.type = type;
    if (callBack) {
      this.$btn.addEventListener("click", callBack);
    }
  }

  render() {
    return this.$btn;
  }
}
export class WelcomeButtonComponent {
  $btn;
  constructor() {
    this.$btn = document.createElement("button");
    this.$btn.innerText = "Home Page";
    this.$btn.classList.add("btn");
    this.$btn.type = "button";
    this.$btn.addEventListener("click",this.handleChangeWelcomePageScreen)
  }
  handleChangeWelcomePageScreen = (e) => {
    e.preventDefault();
    const welcomepage = new WelcomePageScreen();
    app.changeActiveScreen(welcomepage);
  };
  render() {
    return this.$btn;
  }
}
export class ServicesButtonComponent {
  $btn;
  constructor() {
    this.$btn = document.createElement("button");
    this.$btn.innerText = "Services";
    this.$btn.classList.add("btn");
    this.$btn.type = "button";
    this.$btn.addEventListener("click",this.handleChangeServicesScreen)
  }
  handleChangeServicesScreen = (e) => {
    e.preventDefault();
    const services = new ServicesScreen();
    app.changeActiveScreen(services);
  };
  render() {
    return this.$btn;
  }
}
export class ProductsButtonComponent {
  $btn;
  constructor() {
    this.$btn = document.createElement("button");
    this.$btn.innerText = "Products";
    this.$btn.classList.add("btn");
    this.$btn.type = "button";
    this.$btn.addEventListener("click",this.handleChangeProductsScreen)
  }
  handleChangeProductsScreen = (e) => {
    e.preventDefault();
    const products = new ProductsScreen();
    app.changeActiveScreen(products);
  };
  render() {
    return this.$btn;
  }
}
export class AboutUsButtonComponent {
  $btn;
  constructor() {
    this.$btn = document.createElement("button");
    this.$btn.innerText = "About Us";
    this.$btn.classList.add("btn");
    this.$btn.type = "button";
    this.$btn.addEventListener("click",this.handleChangeAboutUsScreen)
  }
  handleChangeAboutUsScreen = (e) => {
    e.preventDefault();
    const about = new AboutUsScreen();
    app.changeActiveScreen(about);
  };
  render() {
    return this.$btn;
  }
}
