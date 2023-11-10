import { useState } from "react";
import { inbox } from "../data";
export default function Messages({ setMessages, messages, deleteMessage }) {
  console.log(messages);
  function handleClearSentFromLocal() {
    localStorage.removeItem("sentMessage");
    setMessages([]);
  }
  const inboxMessageEl = inbox.map((mes) => (
    <>
      <div className="message-container">
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${mes.img})` }}
        ></div>
        <div className="message-content">
          <h4>From: {mes.from}</h4>
          <p>{mes.text}</p>
        </div>
      </div>
    </>
  ));

  const sentMessageEl = messages.map((mes) => (
    <>
      <div className="message-container">
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${mes.img})` }}
        ></div>
        <div className="message-content">
          <h4>To:{mes.to}</h4>
          <p>{mes.text}</p>
        </div>
        <button onClick={() => deleteMessage(messages, mes)}>x</button>
      </div>
    </>
  ));
  return (
    <div className="mail-container">
      <h3>Inbox</h3>
      <div className="message-element">{inboxMessageEl}</div>
      <button className="clear-btn">Clear inbox</button>
      <h3>Sent</h3>
      {messages.length == 0 ? (
        <p className="no-sent">No messages.</p>
      ) : (
        <div className="message-element">{sentMessageEl}</div>
      )}
      <button onClick={handleClearSentFromLocal} className="clear-btn">
        Clear sent messages
      </button>
    </div>
  );
}
