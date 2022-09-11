import React from "react";
import { auth } from "../../firebase";
import "./ChatStyle.css";

const Message = ({ message }) => {
  const isUser = message.uid === auth.currentUser.uid;

  return (
    <div className={`message-card ${isUser && "message-user"}`}>
      {/* <p className="message_name">{message.name}</p> */}
        <div>
          <p className="message_name" style={{color:"gray"}}>{message.name}</p>
        </div>
      <div className={isUser ? "message-userCard" : "message-guestCard"}>
        <h4 className="message_text">{message.text}</h4>
      </div>
    </div>
  );
};

export default Message;
