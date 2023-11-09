import { useState } from "react";
import { inbox } from "../data";
export default function Messages({ messages }) {
  console.log(inbox);

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
      </div>
    </>
  ));
  return (
    <div className="mail-container">
      <h3>Inbox</h3>
      <div className="message-element">{inboxMessageEl}</div>
      <h3>Sent</h3>
      <div className="message-element">{sentMessageEl}</div>
    </div>
  );
}
