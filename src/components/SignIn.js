import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React from "react";
import { auth } from "../Firebase/firebase";
import "../styles/signIn.css";

const SignIn = ({ setUser, setIsUserSignedIn }) => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.photoURL);
        setIsUserSignedIn(true);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="signIn"
        style={{
          backgroundImage: `url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
      <div className="nav__signIn">
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix logo"
      />
      <button onClick={handleSignIn}>Sign In</button>
      </div>
      <div className="info__signup">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className="gradient"></div>
      </div>
    </>
  );
};

export default SignIn;
