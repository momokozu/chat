import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css" //　追加

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPXxEXvq5uMSzexUTfzK4fWDyyDPf58w",
  authDomain: "vite-project-91a32.firebaseapp.com",
  projectId: "vite-project-91a32",
  storageBucket: "vite-project-91a32.appspot.com",
  messagingSenderId: "132024639714",
  appId: "1:132024639714:web:54aa0576f206d05bea3ebb"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更
