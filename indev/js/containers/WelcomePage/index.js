import {
  ButtonComponent,
  WelcomeButtonComponent,
  ServicesButtonComponent,
  ProductsButtonComponent,
  AboutUsButtonComponent,
} from "../../components/button.js";
import app from "../../index.js";
import LoginScreen from "../Login/index.js";
import RegisterScreen from "../Register/index.js";
import ProductsScreen from "../Products/index.js";
import ServicesScreen from "../Services/index.js";
class WelcomePageScreen {
  $infor;
  $container;
  $img_homepage;
  $navbar;
  $logo;
  $firstButton;

  $buttonNav;
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
    this.$container.innerHTML =`
    <div class="icon-machine"></div>
    <div class="icon-machine1"></div>`

    this.$contact = document.createElement("div");
    this.$contact.classList.add("contact", "d-flex");
    this.$contact.innerHTML = `
    <div class="me-auto p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
        Phone: 0984100102
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg>
        Phone: 0984100102
    </div>
    <div class="p-2">
      <a href="https://www.instagram.com/">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg></a>
      <a href="https://www.instagram.com/">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg></a>
      <a href="https://www.instagram.com/">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg></a>
      <a href="https://www.instagram.com/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg></a>
    </div>
`;

    this.$img_homepage = document.createElement("div");
    this.$img_homepage.classList.add("img-homepage", "align-bottom");

    this.$img_homepage.innerHTML = `
      <div class="intro">ECH LAUNDRY</div>
      <div class="intro">WE ARE THE BEST LAUNDRY SHOP IN HA HOI, VIET NAM</div>
      <div class="intro position-absolute" style="font-size:150%;font-weight:300;">Located in Cau Giay, we probiding all laundry servise: </div>
      `;
    this.$boxInfor = document.createElement("div");
    this.$boxInfor.classList.add("d-flex", "box");
    this.$boxInfor.innerHTML = `
    <div class="box-infor1">
      <div class="infor-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg></div>
      <div class="infor-body">You need help? Call us now:</div>
      <div style="font-size: 18px;">0984100102</div>
    </div>
    <div class="box-infor2">
      <div class="infor-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg></div>
      <div class="infor-body">You need help? Call us now:</div>
      <div>
      <a href ="https://www.facebook.com/"style="font-size: 18px;">Our fanpage</a></div>
    </div>
    <div class="box-infor3">
      <div class="infor-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg></div>
      <div class="infor-body">You need help? Call us now:</div>
      <div style="font-size: 18px;">0984100102</div>
    </div>
    <div class="box-infor4">
      <div class="infor-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg></div>
      <div class="infor-body">You need help? Call us now:</div>
      <div style="font-size: 18px;">0984100102</div>
    </div>
    `;

    this.$firstButton = document.createElement("div");
    this.$firstButton.append(
      new ButtonComponent(
        "Our services",
        ["btn", "btn-success"],
        "button",
        () => {
          app.changeActiveScreen(new ServicesScreen());
        }
      ).render()
    );
    this.$firstButton.classList.add("d-flex", "justify-content-center");

    this.$navbar = document.createElement("div");
    this.$navbar.classList.add(
      "home-nav",
      "navbar-expand-lg",
      "bg-body-tertiary",
      "d-flex",
      "justify-content-between"
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

    this.$logo = document.createElement("div");
    this.$logo.classList.add("logo-image", "d-flex");
    this.$logo.addEventListener("click", () => {
      console.log("hunghung");
    });
    this.$name = document.createElement("div");
    this.$name = new ButtonComponent("", ["store-name"], "button");

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
  handleChangeLoginScreen = (e) => {
    e.preventDefault;
    const login = new LoginScreen();
    app.changeActiveScreen(login);
  };
  handleChangeRegisterScreen = (e) => {
    e.preventDefault;
    const register = new RegisterScreen();
    app.changeActiveScreen(register);
  };
  render() {
    this.$signNav.append(this.$singIn.render(), this.$singUp.render());
    this.$navbar.append(
      this.$logo,
      this.$name.render(),
      this.$home.render(),
      this.$services.render(),
      this.$products.render(),
      this.$AboutUs.render(),
      this.$signNav
    );
    this.$img_homepage.append(this.$boxInfor);
    this.$container.append(this.$contact, this.$navbar, this.$img_homepage);

    return this.$container;
  }
}

export default WelcomePageScreen;
