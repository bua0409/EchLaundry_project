import * as _noti from "../common/notify.js";
const config = {
  url: "http://127.0.0.1:5500/EchLaundry_project/indev/index.html",
  handleCodeInApp: true,
};

const createNewAccount = (email, password,phone) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      user.sendEmailVerification(config);
      user.updateProfile({
        phoneNumber: phone,
      }).then(() => {
        console.log("hể",user.phoneNumber)
        // Update successful
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });  
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
      _noti.error(errorCode, errorMessage);
      // ..
    });
};
const loginWithEmailPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
export { createNewAccount, loginWithEmailPassword };
