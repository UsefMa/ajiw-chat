import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ChatStyle.css";
import { db } from "../../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMassages] = useState([]);
  
  const scroll = useRef();

  // graping data from firestore
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chat">
      {/* Message Component */}
      {messages &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      {/* Send Message Component */}
      <SendMessage scroll = {scroll} />
      <span ref={scroll}></span> 
    </div>
  );
};

export default Chat;
