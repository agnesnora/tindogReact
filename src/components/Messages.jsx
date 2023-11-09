import { useState } from "react";

export default function Messages({ messages }) {
  console.log(messages);

  const messageEl = messages.map((mes) => (
    <>
      <h1>{mes.to}</h1>
      <p>{mes.text}</p>
    </>
  ));
  return (
    <div>
      {/* <img /> */}
      <div className="message-content">{messageEl}</div>
    </div>
  );
}
