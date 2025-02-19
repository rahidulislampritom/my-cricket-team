import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'

function App() {
  const [freeCredit, setFreeCredit] = useState(500000);

  const handleFreeCredit = () => {
    // console.log('hi');
    const newFreeCredit = freeCredit + 100000;
    setFreeCredit(newFreeCredit);
    console.log(freeCredit);
  }

  return (
    <div className='md:max-w-7xl mx-auto px-3 '>
     
      <Header handleFreeCredit={handleFreeCredit} freeCredit={freeCredit}></Header>
      
    </div>
  )
}

export default App
