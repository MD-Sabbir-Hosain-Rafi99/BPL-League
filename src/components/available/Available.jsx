import React, { use } from 'react'

import PlayerCard from '../playerscard/PlayerCard'

const Available = ({ playerJsonPromiseData, availableBalance, setAvailableBalance, purchesedPlayer, setPurchedPlayer}) => {

    const availablePlayer = use(playerJsonPromiseData)
    // console.log(availablePlayer)
    return (
        <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                availablePlayer.map(player => <PlayerCard key={player.id} purchesedPlayer={purchesedPlayer} setPurchedPlayer={setPurchedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

        </div>
    )
}

export default Available
