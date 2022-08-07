import "./SoundCard.css";
import useSound from 'use-sound';

const capitalize = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};

export default function SoundCard({ animal }) {
  const [PlaySound] = useSound("../audio/bear/bear_1.mp3");

  return (
    <div
      className="sound-card"
      onMouseEnter={() => {
        console.log(animal);
      }}
      onClick={PlaySound}
    >
      <div className="sound-images">
        <img src={require(`../images/${animal}.png`)} />
      </div>
      <p className="sound-card-subtitle">{capitalize(animal)}</p>
    </div>
  );
}
