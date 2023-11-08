import { useState } from "react";

export default function PopUp({ setPopUpOn, toDog }) {
  console.log(toDog.name);
  const [messageValue, setMessageValue] = useState({});

  function send() {
    setPopUpOn(false);
  }

  function typeMessage(e) {
    setMessageValue(e.target.value);
  }
  return (
    <div className="popUp">
      <form>
        <textarea
          value={messageValue}
          onChange={typeMessage}
          rows={4}
          placeholder="Type your message"
        ></textarea>
        <button onClick={send}>Send</button>
      </form>
    </div>
  );
}
