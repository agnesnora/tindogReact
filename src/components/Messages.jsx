import { useEffect, useState } from "react";
import { inbox } from "../data";
export default function Messages({ setMessages, messages }) {
  const [messagesLoaded, setMessagesLoaded] = useState(false);
  useEffect(() => {
    setInboxData(inbox);
  }, []);

  useEffect(() => {
    const savedSentMessages = JSON.parse(localStorage.getItem("sentMessage"));
    if (savedSentMessages) {
      setMessages(savedSentMessages);
      console.log("useEffectben", messages);
      setMessagesLoaded(true);
    }
  }, []);
  const [inboxData, setInboxData] = useState();

  function handleClearSentFromLocal() {
    localStorage.removeItem("sentMessage");
    setMessages([]);
  }

  function handleClearInbox() {
    setInboxData([]);
  }

  function deleteMessage(array, id) {
    const updatedMessages = array.filter((message) => message.id !== id);
    localStorage.setItem("sentMessage", JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  }
  const inboxMessageEl = inboxData
    ? inboxData.map((mes) => (
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
      ))
    : null;

  const sentMessageEl = messages.map((mes) => (
    <>
      <div className="message-container sent">
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${mes.img})` }}
        ></div>
        <div className="message-content">
          <h4>To:{mes.to}</h4>
          <p>{mes.text}</p>
        </div>
        <button onClick={() => deleteMessage(messages, mes.id)}>x</button>
      </div>
    </>
  ));
  return (
    <div className="mail-container">
      <div className="messages-header">
        <h3>Inbox</h3>
        <button onClick={handleClearInbox} className="clear-btn">
          Clear inbox
        </button>
      </div>

      <div className="message-element">{inboxMessageEl}</div>

      <div className="messages-header">
        {" "}
        <h3>Sent</h3>
        <button onClick={handleClearSentFromLocal} className="clear-btn">
          Clear sent
        </button>
      </div>

      {messages.length == 0 ? (
        <p className="no-sent">No messages.</p>
      ) : messagesLoaded && messages.length > 0 ? (
        <div className="message-element">{sentMessageEl}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
