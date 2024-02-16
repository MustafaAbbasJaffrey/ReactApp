// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCnaIy5mByGFgY8sUZ2EbD3PQE1-tIYlCo",
  authDomain: "final-project-d0302.firebaseapp.com",
  projectId: "final-project-d0302",
  storageBucket: "final-project-d0302.appspot.com",
  messagingSenderId: "729632530132",
  appId: "1:729632530132:web:30c5ae45eb12f0015b2541"

};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});