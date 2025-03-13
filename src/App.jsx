import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChoosePlayers from './components/ChoosePlayers'
import NameForm from './components/NameForm'
import Monopoly from './components/Monopoly'
import './App.css'

const App = () => {
  const [playerCount, setPlayerCount] = useState(null)
  const [players, setPlayers] = useState([])
  const [gameState, setGameState] = useState('playerCount')

  let content;

  if (gameState == 'playerCount') {
    content = 
      <div className='initializer'>
        <ChoosePlayers 
          setActiveButton={setPlayerCount} 
          setPlayers={setPlayers} 
          setGameState={setGameState} 
        />
      </div>
  } else if (gameState == 'playerNames') {
    content = 
      <div className='initializer'>
        <NameForm 
          players={players} 
          setPlayers={setPlayers} 
          setGameState={setGameState}
        />
      </div>
  } 
  else if (gameState == 'monopoly') {
    content = 
      <div className='tracker'>
        <Monopoly players={players} />
      </div>
  }

  return (
    <div>
      <div id='debugging-corner'>
        <h3>Debugging corner</h3>
        <button onClick={() => console.log(playerCount)}>Player count</button>
        <button onClick={() => console.log(players)}>Player names</button>
      </div>
      {content}
    </div>
  )
}

export default App
