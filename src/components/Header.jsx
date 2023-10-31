import { FaPaw } from "react-icons/fa";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { BsPersonFill } from "react-icons/bs";
export default function Header({ showMyDogs }) {
  return (
    <>
      <header>
        <button onClick={showMyDogs}>
          {" "}
          <BsPersonFill className="icon person" />
        </button>

        <img src="/images/paw.png" />
        {/* <FaPaw className="icon paw" /> */}
        <HiChatBubbleOvalLeft className="icon chat" />
      </header>
    </>
  );
}
