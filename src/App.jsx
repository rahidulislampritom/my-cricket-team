import { useState } from 'react'
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
  })

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



  return (
    <div>
      {/* claim free credit start here */}

      <div className='md:max-w-7xl mx-auto px-3'>
        <Header handleFreeCredit={handleFreeCredit} freeCredit={freeCredit}></Header>
      </div>

      {/* claim free credit ends here */}



      {/* available and selected  buttons start here */}

      <div className='md:max-w-7xl mx-auto px-3'>
        <div className='text-right'>
          <Buttons handleAvailableBtn={handleAvailableBtn} activeBtn={activeBtn} ></Buttons>
        </div>
      </div>

      {/* available and selected  buttons ends here */}

    </div>
  )
}

export default App
