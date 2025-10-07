import React from "react";

const SelectedCard = ({player,removePlayer}) => {

    const hendleRemove = () =>{
        removePlayer(player);
    }
  return (
    <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl">
      <div className="flex items-center gap-2">
        <img
          src={player.image}
          alt=""
          className="h-[50px] w-[50px] rounded-xl"
        />
        <div>
          <h1>{player.name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <div onClick={hendleRemove}>
        <img src="https://i.ibb.co.com/WNGNgbfR/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
