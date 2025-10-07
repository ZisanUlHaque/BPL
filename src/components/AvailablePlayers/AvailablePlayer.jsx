import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayer = ({ playerPromise , setAvailableBalance,AvailableBalance,parchasedPlayer,setparchasedPlayer}) => {
  const playerData = use(playerPromise);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-15">
      {
        playerData.map((player) => <PlayerCard parchasedPlayer={parchasedPlayer} setparchasedPlayer={setparchasedPlayer} AvailableBalance={AvailableBalance} setAvailableBalance ={setAvailableBalance} player = {player}></PlayerCard>)
      }
    </div>
  );
};

export default AvailablePlayer;
