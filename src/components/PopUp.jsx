import { useState } from "react";
import "../styles/PopUpStyles/PopUp.css";
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
      <div className="closePopUp-btn-container">
        <button className="closePopUp-btn" onClick={closePopUp}>
          Close
        </button>
      </div>

      <div className="message-toDog">
        <div
          className="message-avatar-small"
          style={{ backgroundImage: `url(${toDog.avatar})`, margin: "0 0.5em" }}
        ></div>
        <h5>Message to {toDog.name}</h5>
      </div>
      <form onSubmit={send}>
        <textarea
          value={messageValue.text}
          onChange={typeMessage}
          rows={10}
          placeholder="Type your message"
        ></textarea>
        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
