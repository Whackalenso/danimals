import "./SoundCard.css";
import piffle from "../images/piffle.jpg";

export default function SoundCard(props) {
  return (
    <div
      className="sound-card"
      onMouseEnter={() => {
        console.log(props.animal);
      }}
    >
      <img src={piffle} />
      <p className="sound-card-subtitle">{props.animal}</p>
    </div>
  );
}
