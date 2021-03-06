import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  return {
    db: firebase.firestore(),
    auth: firebase.auth(),
    storageRef: firebase.storage().ref(),
  };
};
export const app = initFirebase();


export const uiConfig = () => ({
  signInFlow: "popup",

  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'NG'
    },
  ],
  tosUrl: "https://betterlifesavings.com/policy",
  privacyPolicyUrl: function () {
    window.location.assign(
      "https://betterlifesavings.com/policy"
    );
  },
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: function () {
      return false;
    },
  },
});

