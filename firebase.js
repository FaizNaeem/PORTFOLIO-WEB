  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
  import { collection, addDoc,getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAPKvOeoRBJJV6yXbZwbjwSRcFOz5uYpEc",
    authDomain: "faiz-naeem.firebaseapp.com",
    databaseURL: "https://faiz-naeem-default-rtdb.firebaseio.com",
    projectId: "faiz-naeem",
    storageBucket: "faiz-naeem.appspot.com",
    messagingSenderId: "1048494592514",
    appId: "1:1048494592514:web:a5c8221754bb778d57cd1b",
    measurementId: "G-JXL2C4095Y"
  };
  document.getElementById("btn").addEventListener(async()=>{
let name =document.getElementById("name").value
let email =document.getElementById("email").value
      try {
          const docRef = await addDoc(collection(db, "users"), {
           
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);