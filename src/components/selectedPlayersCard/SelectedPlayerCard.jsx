import React from 'react'
import bin from '../../assets/Frame.png'
const SelectedPlayerCard = ({playCard, removePlayerCard}) => {
    const removeHandle = () => {
        removePlayerCard(playCard)
        return
    }
    return (
        <div className='max-w-[1200px] m-auto'>
            <div className="flex items-center justify-between mt-3 border-[#E7FE29] p-5 r border-4 rounded-2xl bg-black text-white">
                <div className="flex items-center">
                    <div className="">
                        <img className='w-[100px] h-[100px] bg-cover' src={playCard.player_image} alt="" />
                    </div>
                    <div className="ml-4">
                        <h3>{playCard.player_name}</h3>
                        <p>{playCard.batting_style}</p>
                    </div>
                </div>
                <div onClick={removeHandle} className="">
                    <img src={bin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SelectedPlayerCard
