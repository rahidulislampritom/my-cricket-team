import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Buttons from './component/Buttons/Buttons';


function App() {
  // claim free credit start here
  const [freeCredit, setFreeCredit] = useState(500000);

  const handleFreeCredit = () => {
    const newFreeCredit = freeCredit + 100000;
    setFreeCredit(newFreeCredit);
  }
  // claim free credit ends here


  //  available and selected  buttons start here
  const [activeBtn, setActiveBtn] = useState({
    status: true,
    component: "available"
  });

  const handleAvailableBtn = (status) => {
    if (status == "available") {
      setActiveBtn({
        status: true,
        component: "available"
      })
    } else {
      setActiveBtn({
        status: false,
        component: "selected"
      })

    }
  }
  //  available and selected  buttons ends here


  // data load and store from bestCricketPlayer.JSON start here 
  const [availablePlayers, setAvailablePlayers] = useState([]);


  useEffect(() => {
    fetch('bestCricketPlayer.JSON')
      .then(res => res.json())
      .then(data => setAvailablePlayers(data))
  }, [])
  // data load and store from bestCricketPlayer.JSON end here 


  // handle ChoosePlayer  button start here 
  const [choosePlayer, setChoosePlayer] = useState([])

  const handleChoosePlayer = (idx) => {
    const selectedPlayer = availablePlayers.find(aPlayer => aPlayer.id == idx)
    if (choosePlayer.length > 5) {
      alert("STOP SELECTING");
      return
    }
    if(choosePlayer.find(player=>player.id==idx)){
      alert('Player Already Selected')
      return;
    }
    setChoosePlayer([...choosePlayer, selectedPlayer])

  }
  // handle ChoosePlayer  button end here 

  // handleChoosePlayer start
  const handleRemovePlayer = (id) => {
    setChoosePlayer(choosePlayer.filter(player => player.id !== id))
  }
  // handleChoosePlayer end



  return (
    <div>
      {/* claim free credit start here */}

      <div className='md:max-w-7xl mx-auto px-3'>
        <Header handleFreeCredit={handleFreeCredit} freeCredit={freeCredit}></Header>
      </div>

      {/* claim free credit ends here */}



      {/* available and selected  buttons start here */}

      <div className='md:max-w-7xl mx-auto px-3'>
        <div>
          <Buttons handleAvailableBtn={handleAvailableBtn} activeBtn={activeBtn} availablePlayers={availablePlayers} handleChoosePlayer={handleChoosePlayer} choosePlayer={choosePlayer} handleRemovePlayer={handleRemovePlayer} ></Buttons>
        </div>
      </div>

      {/* available and selected  buttons ends here */}

    </div>
  )
}

export default App
