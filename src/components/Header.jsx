import { HiChatBubbleOvalLeft } from "react-icons/hi2";

export default function Header({ showMyDogs, startOver }) {
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

        <img src="/images/paw.png" onClick={startOver} />

        <HiChatBubbleOvalLeft className="icon chat" />
      </header>
    </>
  );
}
