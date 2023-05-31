import { useState } from "react";
import { Button, Grid, Paper, TextField, Typography, Link } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "..";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 15 },
  signUpText: { marginTop: 32 },
};

export default function SignUp({ handleChange }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  async function handleSignUp(email, password, username) {
    const dbRef = collection(db, "Users");

    const data = {
      Email: email,
      Username: username,
    };

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(dbRef, email), data);
      navigate("/");
    } catch (error) {
      const emailInUseErrorCode = "auth/email-already-in-use";
      const invalidEmailErrorCode = "auth/invalid-email";

      if (error.code === emailInUseErrorCode) {
        alert("That email address already exists. Try logging in.");
        return 1;
      } else if (error.code === invalidEmailErrorCode) {
        alert("That email address is invalid.");
        return 1;
      }

      console.log("There was an error signing up the user.");
      console.error(error);
      return 1;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(email, password, username);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    if (e.length === 0) {
      setEmailError(false);
      return true;
    }
    if (!isValidEmail(e)) {
      setEmailError(true);
      return false;
    }
    const dom = e.substring(e.indexOf("@") + 1)