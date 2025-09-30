import React from 'react'
import bannerBG from "../../assets/bannerBG.png";
import bannerLogo from "../../assets/bannerLogo.png"
const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>

            <div className="h-[400px] w-full bg-cover bg-center flex items-center justify-center rounded-2xl mt-5 mb-5"
                style={{ backgroundImage: `url(${bannerBG})` }}
            >
               <img src={bannerLogo} alt="" />
            </div>

        </div>
    )
}

export default Banner
