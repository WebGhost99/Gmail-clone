import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                email : user.email,
                photoUrl : user.photoURL,
            })
            
        );
    }).catch(error => alert(error));
}

  return (
    <div className="login">
      <div className="login__container">
        <img src="gmail-logo.png" />

        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
