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
    setMessageValue({ to: toDog.name, text: e.target.value });
  }
  return (
    <div className="popUp">
      <form>
        <textarea
          value={messageValue.text}
          onChange={typeMessage}
          rows={4}
          placeholder="Type your message"
        ></textarea>
        <button onClick={send}>Send</button>
      </form>
    </div>
  );
}
