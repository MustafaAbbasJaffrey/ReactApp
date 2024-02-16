
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCP5RSVk-y17ESxoKJuSlAV3rQ61ZmJeyk",
  authDomain: "some-firebase-97dfc.firebaseapp.com",
  projectId: "some-firebase-97dfc",
  storageBucket: "some-firebase-97dfc.appspot.com",
  messagingSenderId: "440905053097",
  appId: "1:440905053097:web:b1dd7466968bac72470ab8",
  measurementId: "G-27PVPDKWY8",
};

const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

getToken(messaging, {
  vapidKey:
    "BCKNSY0FAgDlbgevvqBGsXdadLiRCrFR1wbWXqFYgQJOV3jX8nTSHAQzXcB91c6GGlmFwCfCcxCUK-UxDL7nTLA",
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
