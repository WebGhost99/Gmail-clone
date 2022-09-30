import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import firebase from 'firebase/compat/app'
import { db } from "./firebase";

function SendMail() {
  const { register, handleSubmit, watch, formState : {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add(
      {
      to : data.to,
      subject : data.subject,
      message : data.message,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      }
    );
    dispatch(closeSendMessage());
  }


  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" onClick={()=> dispatch(closeSendMessage())}/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          name ="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <span className="sendMail__error">To is required</span>}

        <input
          placeholder="Subject"
          type="text"
          {...register("subject" , { required: true })}
        />
          {errors.subject && <p className="sendMail__error">Subject is required</p>}

        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message" , { required: true })}
        />
          {errors.message && <p className="sendMail__error">Message is required</p>}

        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">Send</Button>
        </div>

      </form>

    </div>
  );
}

export default SendMail;
