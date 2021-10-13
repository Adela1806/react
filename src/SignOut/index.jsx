import React from "react";
import { auth } from "../firebase";

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.SignOut()}>SignOut</button>
  );
}

export default SignOut;
