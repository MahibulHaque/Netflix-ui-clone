import { signOut } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { auth } from "../Firebase/firebase";

const Navbar = ({ user, setUser }) => {
  const profileImage = user?.photoURL;
  const [show, handleShow] = useState(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll",()=>{});
    };
  }, []);
  return (
    <div className={`nav__logo ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="profile__image"
        src={profileImage}
        alt="Profile"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Navbar;
