import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage";

import { auth, db, getFirebaseServerTimestamp } from "../firebase";

import "./style.css";
function ChatRoom({ currentRoom }) {
  const dummy = useRef();

  const messagesRef = db.collection("messages");

  const query = messagesRef
    .where("room", "==", currentRoom)
    .orderBy("createdAt")
    .limit(25);

  const [messages, loading, error] = useCollectionData(query, {
    idField: "id",
  });

  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: message,
      uid: uid,
      createdAt: getFirebaseServerTimestamp(),
      photoURL,
      room: currentRoom,
      userName: displayName,
    });

    setMessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (createdAt, id) => {
    db.collection("messages").doc(id).delete();
  };

  return (
    <>
      <main className="messages">
        {messages &&
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              handleDelete={handleDelete}
            />
          ))}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="say something here"
        />

        <button type="submit" disabled={!message} className="">
          Send
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
