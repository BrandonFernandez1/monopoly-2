import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChoosePlayers from './components/ChoosePlayers'
import NameForm from './components/NameForm'
import './App.css'

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [playerNames, setPlayerNames] = useState([])

  if (!selectedButton) {
    return (
      <div>
        <ChoosePlayers setActiveButton={setSelectedButton} setPlayerNames={setPlayerNames} />
        <button onClick={() => console.log(selectedButton)}>Number</button>
      </div>
    )
  } else {
    return (
      <div>
        <NameForm playerCount={selectedButton} playerNames={playerNames} setPlayerNames={setPlayerNames} />
      </div>
    )
  }
}

export default App
