import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage";

import { auth, db, getFirebaseServerTimestamp } from "../firebase";

function ChatRoom({ currentRoom }) {
  const dummy = useRef();

  const messagesRef = db.collection("messages");

  const query = messagesRef
    //.where("room", "==", currentRoom)
    .orderBy("createdAt")
    .limit(25);

  const [messages] = useCollectionData(query, { isField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      uid: uid,
      createdAt: getFirebaseServerTimestamp(),
      photoURL,
      room: currentRoom,
      userName: displayName,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (id) => {
    db.collection("messages").doc(id).delete();
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              handleDelete={handleDelete}
            />
          ))}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something here"
        />

        <button type="submit" disabled={!formValue} className="">
          Send
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
