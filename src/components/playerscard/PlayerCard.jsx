import React, { useState } from 'react'
import user from '../../assets/user1.png'
import report from '../../assets/report1.png'
import { toast } from 'react-toastify';
const PlayerCard = ({ player, availableBalance, setAvailableBalance, purchesedPlayer, setPurchedPlayer }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handlePlayerCoin = (playerData) => {
        if (availableBalance < 1000000) {
            toast('You have no balance')
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerData.price);
        setPurchedPlayer([...purchesedPlayer, player]);
    }

    return (
        <div key={player.id} className="card bg-base-100  shadow-sm p-5">
            <figure>
                <img className='w-full h-[500px] object-cover'
                    src={player.player_image}
                    alt="Shoes" />
            </figure>
            <div className="mt-5">
                <div className="flex items-center">
                    <img className='w-[20px] h-[20px]' src={user} alt="user" />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className="flex items-center justify-between border-b-1 border-b-gray-300 pb-3.5">
                    <div className="flex items-center gap-x-2">
                        <img src={report} alt="report" />
                        <h3 className='text-base'>{player.player_country}</h3>
                    </div>
                    <div className="">
                        <button className='btn'>{player.player_role}</button>
                    </div>
                </div>
                <div className="">
                    <span className='op07ds'>Rating : {player.rating}</span>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h4 className='font-bold'>{player.batting_style}</h4>
                        </div>
                        <div className="">
                            <h4>{player.bowling_style}</h4>
                        </div>
                    </div>
                </div>
                <div className="card-actions items-center justify-between pt-5">
                    <div className="">
                        <h4>Price: ${player.price}</h4>
                    </div>
                    <div className="">
                        <button disabled={isSelected} onClick={() => { handlePlayerCoin(player) }} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard
