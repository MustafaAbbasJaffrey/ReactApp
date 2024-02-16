// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCP5RSVk-y17ESxoKJuSlAV3rQ61ZmJeyk",
  authDomain: "some-firebase-97dfc.firebaseapp.com",
  projectId: "some-firebase-97dfc",
  storageBucket: "some-firebase-97dfc.appspot.com",
  messagingSenderId: "440905053097",
  appId: "1:440905053097:web:b1dd7466968bac72470ab8",
  measurementId: "G-27PVPDKWY8",
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