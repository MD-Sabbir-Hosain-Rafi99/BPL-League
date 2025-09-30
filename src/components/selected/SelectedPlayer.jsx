import React from 'react'

import SelectedPlayerCard from '../selectedPlayersCard/SelectedPlayerCard'
const SelectedPlayer = ({ purchesedPlayer, removePlayerCard, addMorePlayers }) => {
    // console.log(purchesedPlayer)

    const handleAddMorePlayers = () => {
        addMorePlayers()
        return
    }

    return (
        <div className='max-w-[1200px] m-auto'>
            {
                purchesedPlayer.map(playCard => <SelectedPlayerCard removePlayerCard={removePlayerCard} key={playCard.id} playCard={playCard}></SelectedPlayerCard>)
            }
            <button onClick={handleAddMorePlayers} className='py-3 px-6 bg-[#E7FE29] rounded-2xl border-2 font-bold mt-9'>Add More Player</button>
        </div>
    )
}

export default SelectedPlayer
