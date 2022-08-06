import "./SoundCard.css";

export default function SoundCard({ animal }) {
  return (
    <div
      className="sound-card"
      onMouseEnter={() => {
        console.log(animal.name);
      }}
    >
      <img src="" />
      <p className="sound-card-subtitle">{animal.name}</p>
    </div>
  );
}
