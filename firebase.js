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
  document.getElementById("btn").addEventListener("click",async()=>{
let name =document.getElementById("name").value
let email =document.getElementById("email").value
if(name==""|| email==""){
  Swal.fire({
    icon: 'error',
    title: 'Please Fill This Form',
    // text: 'Please Fill This Form',
   
  })
}
else{

  try {
    const docRef = await addDoc(collection(db, "Faiz-Portfolio"), {
      name:name,
      Email:email
    });
    Swal.fire({
      title: 'Thanks For Contacting❤',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
          })
          
          
          // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);