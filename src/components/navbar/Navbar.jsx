import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import dollar from '../../assets/dollar1.png'
const Navbar = ({ availableBalance }) => {

    const [isalert, setIsAlert] = useState(true)
    return (
        <>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="">
                        <img className='h-[50px] w-[50px]' src={logo} alt="logo" />
                    </a>
                </div>
                <div className="flex mr-2 gap-x-2 items-center">
                    <div hidden={isalert} onClick={() => {
                        if(availableBalance < 1000000){
                            setIsAlert(false)
                        }
                    }} role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Coin Not Available!</span>
                    </div>
                    <span>{availableBalance}</span>
                    <span>Coin</span>
                    <img className='w-5 h-5' src={dollar} alt="dollar" />
                </div>
            </div>
            
        </>
    )
}

export default Navbar
