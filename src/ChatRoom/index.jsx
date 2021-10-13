import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db, getFirebaseServerTimestamp } from "../firebase";
import ChatMessage from "../ChatMessage";
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { isField: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      uid: uid,
      createdAt: getFirebaseServerTimestamp(),
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something here"
        />
        <button type="submit" className="">
          Send
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
