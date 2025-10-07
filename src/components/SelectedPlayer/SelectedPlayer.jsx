import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayer = ({parchasedPlayer,removePlayer}) => {
    return (
        <div className='max-w-[1200px] mx-auto mb-30'>
            {
                parchasedPlayer.map(player => <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayer;