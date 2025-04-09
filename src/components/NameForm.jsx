import { useState, useEffect } from 'react'

const NameForm = ({ players, setPlayers, setGameState }) => {
  const [inputs, setInputs] = useState(Array.from({ length: players.length }, () => ""))

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const updatedPlayers = players.map((player, index) => ({
      ...player,
      name: inputs[index]
    }))

    const freeParking = {
      id: players.length,
      name: 'Free Parking',
      balance: 0,
      bankrupt: false
    }

    setPlayers([...updatedPlayers, freeParking]) //Add names + free parking to player state
    setGameState('monopoly')
  }

  const handleChange = (event, index) => {
    const newInputs = [...inputs]
    newInputs[index] = event.target.value
    setInputs(newInputs)
  }

  return (
    <div>
      <form id='name-form' onSubmit={handleSubmit}>
        <div id='name-inputs'>
          {inputs.map((input, index) => (
            <input 
              key={index}
              value={inputs[index]}
              placeholder={`Player ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => console.log(players)}>players</button>
      <button onClick={() => console.log(inputs)}>inputs</button>
    </div>
  )
}

export default NameForm