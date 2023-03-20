class ButtonComponent {
    $btn;
    constructor(text, classList, type,callBack) {
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
  
  export default ButtonComponent;
  