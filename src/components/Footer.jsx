import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Footer({
  handleLike,
  handleDismiss,
  currentDog,
  refresh,
}) {
  return (
    <>
      <footer>
        {" "}
        {currentDog ? (
          <>
            <button data-dismiss={currentDog.name} onClick={handleDismiss}>
              <MdClose
                data-dismiss={currentDog.name}
                className="icon dismiss"
              />
            </button>
            <button data-like={currentDog.name}>
              <FaHeart
                data-like={currentDog.name}
                onClick={handleLike}
                className=" icon heart"
              />
            </button>
          </>
        ) : (
          <button onClick={refresh}> Not sure? Start again!</button>
        )}
      </footer>
    </>
  );
}
