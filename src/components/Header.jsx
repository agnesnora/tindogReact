import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import "../styles/HeaderStyles/Header.css";
export default function Header({ showMyDogs, startOver, checkMessages }) {
  return (
    <>
      <header>
        <div className="profile">
          <button onClick={showMyDogs}>
            <div className="profile-picture"></div>
          </button>
          <div className="profile-hero">
            <h4>Cili, 26</h4>
            <p>Miskolc</p>
          </div>
        </div>

        <img className="paw" src="/images/paw.png" onClick={startOver} />

        <HiChatBubbleOvalLeft className="icon chat" onClick={checkMessages} />
      </header>
    </>
  );
}
