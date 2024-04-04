// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZJHyUQGr9p_bFd3wSLV3PUBg3hd3_GiM",
    authDomain: "poxreader.firebaseapp.com",
    projectId: "poxreader",
    storageBucket: "poxreader.appspot.com",
    messagingSenderId: "407884474986",
    appId: "1:407884474986:web:832d2ac00757e08bbff813"
};
let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const storage = getStorage(app);

export { storage };