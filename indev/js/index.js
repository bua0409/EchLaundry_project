import RegisterScreen from "./containers/Register/index.js";
import LoginScreen from "../js/containers/Login/index.js"
import HomePageScreen from "./containers/Home Page/index.js";
const app = document.getElementById("app")
const registerScreen = new HomePageScreen();
app.append(registerScreen.render())