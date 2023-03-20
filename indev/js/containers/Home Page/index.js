import ButtonComponent from "../../components/button.js"
class HomePageScreen {

    $order 

    $container
    $navbar
    $logo
    $dropdown
    $home
    $services
    $products
    $AboutUs


    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("d-flex");

        this.$navbar = document.createElement("nav");
        this.$navbar.classList.add("navbar-expand-lg","bg-body-tertiary");

        this.$dropdown = document.createElement("div")
        this.$logo = new ButtonComponent (
            "Ech Laundry",
            ["navbar-brand"],
            "submit"
            // HandleChangeHomePageScreen
        );
        this.$home = new ButtonComponent (
            "Home Page",
            [],
            "submit"
            // HandleChangeHomePageScreen
        );
        this.$services = new ButtonComponent (
            "Services",
            [],
            "submit"
            // HandleChangeServicesScreen
        )
        
    }
    handleChangeHomePageScreen = (e) => {
        e.preventDefault();
        const signUp = new RegisterScreen();
        app.changeActiveScreen(signUp);
      };
    render(){
        this.$navbar.append(this.$logo.render(),this.$home.render());
        this.$container.append(this.$navbar)
        return this.$container
    }
}

export default HomePageScreen