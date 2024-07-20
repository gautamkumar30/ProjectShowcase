import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import "./authPage.scss";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import React, { useContext, useState } from "react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Google Login

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      console.log("Loggid IN");
      await setDoc(doc(db, "projects", result.user.uid), {});
      navigate("/home");
    } catch {
      setErr(true);
    }
  };

  return (
    <main className="AuthPage">
      <div>
        <div className="logo">
          <h1>Project Showcase</h1>
          <h2>Host your projects live now</h2>
        </div>
        <button onClick={handleGoogleLogin}>
          <img src="google.webp" alt="Google" />
          <p>Continue with Google</p>
        </button>
      </div>
    </main>
  );
};

export default AuthPage;
