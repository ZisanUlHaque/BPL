import React, { useState } from "react";
import useImg from "../../assets/user1.png";
import flagImg from "../../assets/Vector.png";

const PlayerCard = ({ player, setAvailableBalance, AvailableBalance,setparchasedPlayer,parchasedPlayer }) => {
  const [isSelected, setSelected] = useState(false);

  const handleSelected = (playerData) => {
    setSelected(true);
    setAvailableBalance(
      AvailableBalance - playerData.price.split("$").join("").split(",").join("")
    );
    setparchasedPlayer([...parchasedPlayer,playerData])
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          src={player.image}
          alt="Shoes"
          className="w-full h-[300px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-3">
          <img src={useImg} alt="" />
          <h1 className="card-title font-bold text-xl">{player.name}</h1>
        </div>
        <div className="card-actions flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img src={flagImg} alt="" />
            <h2>{player.country}</h2>
          </div>
          <button className="btn rounded-2xl ">{player.playing_role}</button>
        </div>
        <div className="grid gap-y-3 mt-7 border-t-3">
          <div className="mt-2">
            <h2 className="font-semibold text-xl">Rating: {player.rating}</h2>
          </div>
          <div className="card-actions flex items-center justify-between">
            <h2 className="font-bold text-xl">Batting Style</h2>
            <h2>{player.bat_style}</h2>
          </div>
          <div className="card-actions flex items-center justify-between">
            <h2 className="font-semibold text-xl">Price: {player.price}</h2>
            <button
              disabled={isSelected}
              onClick={() => {handleSelected(player)}}
              className="btn rounded-2xl "
            >
              {isSelected === true ? "Selected" : "Choose Player"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
