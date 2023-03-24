import RegisterScreen from "./containers/Register/index.js";
import LoginScreen from "../js/containers/Login/index.js"
import HomePageScreen from "./containers/WelcomePage/index.js";
const appHome = document.getElementById("app")
const Screen = new HomePageScreen();
appHome.append(Screen.render())
class App {
    constructor(){
    };
    changeActiveScreen(screen){
        const app = document.getElementById("app")
        app.innerHTML="";
        app.appendChild(screen.render());
}
}
const app = new App
export default app;