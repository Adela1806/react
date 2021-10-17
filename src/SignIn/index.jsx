import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../firebase";

function SignIn() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      console.log("Yes");
    }
  }, [user, loading]);
  return (
    <div className="login">
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default SignIn;
