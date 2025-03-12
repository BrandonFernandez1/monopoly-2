import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChoosePlayers from './components/ChoosePlayers'
import NameForm from './components/NameForm'
import './App.css'

const App = () => {
  const [playerCount, setPlayerCount] = useState(null)
  const [playerNames, setPlayerNames] = useState([])

  let content;

  if (!playerCount) {
    content = <ChoosePlayers setActiveButton={setPlayerCount} setPlayerNames={setPlayerNames} />
  } else {
    content = <NameForm playerNames={playerNames} setPlayerNames={setPlayerNames} />
  }

  return (
    <div>
      <div id="debugging-corner">
        <h3>Debugging corner</h3>
        <button onClick={() => console.log(playerCount)}>Player count</button>
        <button onClick={() => console.log(playerNames)}>Player names</button>
      </div>
      
      <div className="initializer">
        {content}
      </div>
    </div>
  )
}

export default App
