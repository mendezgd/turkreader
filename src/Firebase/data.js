// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.VITE_APP_APP_ID
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Storage
const storage = getStorage(app);

export { storage };