import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAS0l7GSr_yH-UtLzG3PVJaENMrvItkV8U",
    authDomain: "lws-qiuzz.firebaseapp.com",
    projectId: "lws-qiuzz",
    storageBucket: "lws-qiuzz.appspot.com",
    messagingSenderId: "1064030172212",
    appId: "1:1064030172212:web:7b0dbcdaea90b2a26c0661"
};

const app = initializeApp(firebaseConfig);
export default app