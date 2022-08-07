import "./SoundCard.css";
import React, { useState } from "react";
import ReactHowler from "react-howler";

const capitalize = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};

export default function SoundCard({ animal }) {
  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState(null);

  return (
    <div>
      <ReactHowler
        src={`/audio/${animal}/${animal}_1.m4a`}
        playing={play}
        onEnd={() => {
          setPlay(false);
        }}
        ref={(ref) => setPlayer(ref)}
      />
      <div
        className="sound-card"
        onClick={() => {
          player.seek(0);
          if (!play) {
            setPlay(true);
          }
        }}
      >
        <div className="sound-images">
          <img src={require(`../images/${animal}.png`)} />
        </div>
        <p className="sound-card-subtitle">{capitalize(animal)}</p>
      </div>
    </div>
  );
}
