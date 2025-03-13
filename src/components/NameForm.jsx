import { useState } from 'react'

const NameForm = ({ players, setPlayers, setGameState }) => {
  const [names, setNames] = useState([])

  const handleSubmit = (event, index, value) => {
    event.preventDefault()
    setPlayers((prevPlayers) => 
      prevPlayers.map((player, index) => ({
        ...player,
        name: names[index]
      })))
    setGameState('monopoly')
  }

  const handleChange = (index, value) => {
    setNames((prevNames) => prevNames.map((item, i) => (i === index ? value : item)))
  }

  return (
    <div>
      <form id='name-form' onSubmit={handleSubmit}>
        <div id='name-inputs'>
          {names.map((item, index) => (
            <input 
              key={index}
              value={item.name || ''}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Player ${index + 1}`}
              className='name-input' 
            />
          ))}
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => console.log(names)}>names</button>
    </div>
  )
}

export default NameForm