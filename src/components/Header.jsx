import { FaPaw } from "react-icons/fa";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { BsPersonFill } from "react-icons/bs";
export default function Header() {
  return (
    <>
      <header>
        <BsPersonFill className="icon person" />
        <img src="/images/paw.png" />
        {/* <FaPaw className="icon paw" /> */}
        <HiChatBubbleOvalLeft className="icon chat" />
      </header>
    </>
  );
}
