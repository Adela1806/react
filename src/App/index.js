import { useState, useEffect } from "react";

import SignIn from "../SignIn";
import ChatRoom from "../ChatRoom";
import SignOut from "../SignOut";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("General");
  console.log(user);
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header></header>

      <section>
        {user ? <ChatRoom currentRoom={currentRoom} /> : <SignIn />}
      </section>

      <section>
        <SignOut />
      </section>
    </div>
  );
}

export default App;
