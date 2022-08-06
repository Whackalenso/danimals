import "./SoundCard.css";
import danimal from "../images/danimal.jpg";

export default function SoundCard(props) {
  return (
    <div className="sound-card">
      <img src={danimal} />
    </div>
  );
}
