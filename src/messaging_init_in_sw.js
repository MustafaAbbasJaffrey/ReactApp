
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {

  apiKey: "AIzaSyCnaIy5mByGFgY8sUZ2EbD3PQE1-tIYlCo",
  authDomain: "final-project-d0302.firebaseapp.com",
  projectId: "final-project-d0302",
  storageBucket: "final-project-d0302.appspot.com",
  messagingSenderId: "729632530132",
  appId: "1:729632530132:web:30c5ae45eb12f0015b2541"

};


const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, {
  vapidKey:
    "BDQZj2pOwleQjhNXC0s--7fx1olbIVsi-X6UDMPsww3fdsS36zctuydSduOGHn7pbamUsFKGQbAIQFbgYDQNmdQ",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Firebase Token", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});
