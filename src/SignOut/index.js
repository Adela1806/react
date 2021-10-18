import React from "react";
import { auth } from "../firebase";

import "./style.css";

function SignOut({ setShowListMenu }) {
  return (
    auth.currentUser && (
      <button
        className="signout"
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
