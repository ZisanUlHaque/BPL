import React, { use } from "react";
import useImg from "../../assets/user1.png";
import flagImg from "../../assets/Vector.png";

const AvailablePlayer = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-4">
          <figure>
            <img
              src= {player.image}
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
                <h2 className="font-bold text-xl">Price: $1500000</h2>
                <button className="btn rounded-2xl ">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayer;
