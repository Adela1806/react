import { useState, useEffect } from "react";

import SignIn from "../SignIn";
import ChatRoom from "../ChatRoom";
import SignOut from "../SignOut";
import Spinner from "../Spinner";
import NavBar from "../NavBar";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  const [currentRoom, setCurrentRoom] = useState("General");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {loading && <Spinner />}

      <NavBar
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />

      <section className="content">
        {user ? <ChatRoom currentRoom={currentRoom} /> : <SignIn />}
      </section>

      <section>
        <SignOut />
      </section>
    </div>
  );
}

export default App;
