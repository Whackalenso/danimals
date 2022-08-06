import "./SoundCard.css";

const capitalize = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};

export default function SoundCard({ animal }) {
  return (
    <div
      className="sound-card"
      onMouseEnter={() => {
        console.log(animal);
      }}
    >
      <div className="sound-images">
        <img src={require(`../images/${animal}.png`)} />
      </div>
      <p className="sound-card-subtitle">{capitalize(animal)}</p>
    </div>
  );
}
