import React, { useEffect } from "react";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router , Routes , Route , Link } from 
"react-router-dom";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "./features/mailSlice";
import Login from './Login';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectMail);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
      auth.onAuthStateChanged(user => {
        if (user) {
          dispatch(login({
              displayName : user.displayName,
              email : user.email,
              photoUrl : user.photoURL,
          }))
        } else {
          dispatch(logout())
        }
      })
  },[])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route 
                path='/mail'
                element={<Mail />}
            />
            <Route 
                path='/'
                element={<EmailList />}
            />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    
    </Router>
  );
}

export default App;
