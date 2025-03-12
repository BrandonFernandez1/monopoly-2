import { useState } from 'react'

const NameForm = ({ playerNames, setPlayerNames }) => {

  const handleSubmit = (event, index, value) => {
    event.preventDefault()

    const newNames = [...playerNames]
    newNames[index] = value
    setPlayerNames(newNames)
  }

  return (
    <div>
      <form id="name-form" onSubmit={handleSubmit}>
        <div id="name-inputs">
          {playerNames.map((name, index) => (
            <input key={index} placeholder={`Player ${index + 1}`} className="name-input" />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NameForm