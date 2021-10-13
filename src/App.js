import { react, useRef, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./ChatRoom";
import ChatMessage from "./ChatMessage";
import logo from "./logo.svg";
import "./App.css";
import {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
} from "./firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <header></header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
      <section>
        <button onClick={logout}>Logout</button>
      </section>
    </div>
  );
}

export default App;
