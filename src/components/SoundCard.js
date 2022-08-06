import "./SoundCard.css";

const capitalize = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};

export default function SoundCard({ animal }) {
  return (
    <div
      className="sound-card"
      onMouseEnter={() => {
        console.log(animal.name);
      }}
    >
      <div className="sound-images">
        <img src={require(`../images/${animal.name}.jpg`)} />
        <img src={require(`../images/${animal.person}.png`)} />
      </div>
      <p className="sound-card-subtitle">{capitalize(animal.name)}</p>
    </div>
  );
}
