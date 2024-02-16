import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnaIy5mByGFgY8sUZ2EbD3PQE1-tIYlCo",
  authDomain: "final-project-d0302.firebaseapp.com",
  projectId: "final-project-d0302",
  storageBucket: "final-project-d0302.appspot.com",
  messagingSenderId: "729632530132",
  appId: "1:729632530132:web:30c5ae45eb12f0015b2541"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase Messaging instance
const messaging = getMessaging(app);

// Request notification permission from the user if not already granted
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    console.error('Notifications permission denied.');
  }
}

// Handle successful token retrieval
function handleToken(token) {
  if (token) {
    console.log('Firebase Token: updated', token);
    // Send token to your server for further processing (e.g., saving to user profile)
  } else {
    console.log('No registration token available. Request permission to generate one.');
    requestNotificationPermission();
  }
}

// Handle incoming messages
function onMessageReceived(payload) {
  console.log('Message received:', payload);
  // Extract relevant data from the message payload (e.g., title, body, data)
  const title = payload.notification?.title;
  const body = payload.notification?.body;
  const data = payload.data;
  // Display a notification to the user (using a notification library or custom logic)
  if (Notification.permission === 'granted') {
    const options =  {
      body: body,
      data: data,
      // Add other notification options as needed
    };
    new Notification(title || 'FCM Message', options).onclick = () => {
      // Handle notification click
    };
  }
}

// Get registration token and handle messages
getToken(messaging, { vapidKey: "BDQZj2pOwleQjhNXC0s--7fx1olbIVsi-X6UDMPsww3fdsS36zctuydSduOGHn7pbamUsFKGQbAIQFbgYDQNmdQ" })
  .then(handleToken)
  .catch((error) => {
    console.error('An error occurred while retrieving token:', error);
  });

onMessage(messaging, onMessageReceived);
