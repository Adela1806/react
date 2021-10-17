import React from "react";
import { auth } from "../firebase";

function SignOut({ setShowListMenu }) {
  return (
    auth.currentUser && (
      <button
        className="logout"
        onClick={() => {
          auth.signOut();
          setShowListMenu(false);
        }}
      >
        SignOut
      </button>
    )
  );
}

export default SignOut;
