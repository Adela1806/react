import { signInWithGoogle } from "../firebase";

import "./style.css";

function SignIn() {
  return (
    <div className="login">
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default SignIn;
