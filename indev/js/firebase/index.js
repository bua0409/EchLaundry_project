const firebaseConfig = {
    apiKey: "AIzaSyD1N9h-DjD2FLtNaWjeBdO87kV2XCOHdaM",
    authDomain: "ech-laundry.firebaseapp.com",
    projectId: "ech-laundry",
    storageBucket: "ech-laundry.appspot.com",
    messagingSenderId: "334479704843",
    appId: "1:334479704843:web:13156094d85db8c483980e",
    measurementId: "G-3T9Z91PPN0"
  };

const appFb = firebase.initializeApp(firebaseConfig);
export default appFb;