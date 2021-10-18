import { useState } from "react";
import { auth } from "../firebase";

import "./style.css";

function ChatMessage({ message, handleDelete }) {
  const { id, text, uid, photoURL, createdAt, userName } = message;
  const messageClass =
    uid === auth.currentUser.uid ? "message--sent" : "message--received";

  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const toggleCard = () => {
    setShowActionsButtons(!showActionsButtons);
  };

  return (
    <div className={`message ${messageClass}`}>
      <div className="contents" onClick={toggleCard}>
        <div className="user-name">
          <p>{userName}</p>
        </div>

        <div className="photo">
          <img src={photoURL} alt="" />
        </div>

        <div className="text">
          <p>{text}</p>
        </div>

        <div
          style={{
            display:
              showActionsButtons && uid === auth.currentUser.uid
                ? "block"
                : "none",
          }}
          className="actions"
        >
          <button onClick={() => handleDelete(createdAt, id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
