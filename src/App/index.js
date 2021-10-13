import { useEffect } from "react";
import SignIn from "../SignIn";
import ChatRoom from "../ChatRoom";
import "./App.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../SignOut";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
      <section>
        <SignOut />
      </section>
    </div>
  );
}

export default App;
