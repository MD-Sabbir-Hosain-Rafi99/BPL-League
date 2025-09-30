
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Available from './components/available/Available'
import SelectedPlayer from './components/selected/SelectedPlayer'
import { ToastContainer} from 'react-toastify';

const fetchPlayersData = async () => {
  const res = await fetch('players.json')
  return res.json()
}
const playerJsonPromiseData = fetchPlayersData();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000000);
  const [purchesedPlayer, setPurchedPlayer] = useState([]);


  const handleAvailable = () => {
    setToggle(true)
  }

  const handleSelected = () => {
    setToggle(false)
  }

  const removePlayerCard = (p) => {
    // console.log(p)
    const filterPlayerData = purchesedPlayer.filter(ply => ply.id !== p.id)
    setPurchedPlayer(filterPlayerData)
    setAvailableBalance(availableBalance + p.price)
  }
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <h1 className='font-bold text-2xl'>{toggle === true ? "Available" : `Selected Player (${purchesedPlayer.length}/6)`}</h1>
        <div className="">
          <button onClick={handleAvailable} className={`p-3 border-1 border-gray-300 rounded-l-2xl border-r-0 font-bold ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={handleSelected} className={`p-3 border-1 border-gray-300 rounded-r-2xl border-l-0 font-bold ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({purchesedPlayer.length})</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Available purchesedPlayer={purchesedPlayer} setPurchedPlayer={setPurchedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerJsonPromiseData={playerJsonPromiseData}></Available>
        </Suspense> : <SelectedPlayer removePlayerCard={removePlayerCard} purchesedPlayer={purchesedPlayer}></SelectedPlayer>
      }
      <ToastContainer />
    </>
    
  )
}

export default App
