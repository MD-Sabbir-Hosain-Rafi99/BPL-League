import React from 'react'

import SelectedPlayerCard from '../selectedPlayersCard/SelectedPlayerCard'
const SelectedPlayer = ({ purchesedPlayer, removePlayerCard }) => {
    console.log(purchesedPlayer)
    return (
        <div className='max-w-[1200px] m-auto'>
            {
                purchesedPlayer.map(playCard => <SelectedPlayerCard removePlayerCard={removePlayerCard} key={playCard.id} playCard={playCard}></SelectedPlayerCard>)
            }
        </div>
    )
}

export default SelectedPlayer
