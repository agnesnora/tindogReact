import { useState } from "react";

export default function PopUp({
  setPopUpOn,
  toDog,
  sendMessage,
  setMessageValue,
  messageValue,
}) {
  function send(e) {
    e.preventDefault();
    sendMessage(messageValue);
    setPopUpOn(false);
  }

  function typeMessage(e) {
    setMessageValue({
      to: toDog.name,
      text: e.target.value,
      img: toDog.avatar,
    });
  }

  function closePopUp() {
    setPopUpOn(false);
  }
  return (
    <div className="popUp">
      <div className="message-toDog">
        <h3>Message to {toDog.name}</h3>
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${toDog.avatar})`, marginLeft: "1em" }}
        ></div>
        <button onClick={closePopUp}>Close</button>
      </div>
      <form onSubmit={send}>
        <textarea
          value={messageValue.text}
          onChange={typeMessage}
          rows={10}
          placeholder="Type your message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
