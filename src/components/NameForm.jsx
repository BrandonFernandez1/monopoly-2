import { useState } from 'react'

const NameForm = ( { playerCount, playerNames, setPlayerNames }) => {
  const [inputValues, setInputValues] = useState(Array(playerCount).fill(""))
  
  const handleInputChange = (index, event) => {
    const newNames = [...playerNames]
    newNames[index] = event.target.value
    setInputValues(newNames)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlayerNames(inputValues)
  }
  
  return(
    <div>
      <h2>Enter player names</h2>
      <form onSubmit={handleSubmit}>
        {playerNames.map((name, index) => (
          <div key={index}>
            <label>
              Player {index + 1}
              <input 
                type="text"
                value={name}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NameForm