const ChoosePlayers = ({ setActiveButton, setPlayerNames }) => {
  const buttons = [1, 2, 3, 4]

  const handleClick = (event) => {
    const playerCount = Number(event.target.textContent)
    setActiveButton(event.target.textContent)
    setPlayerNames(Array(playerCount).fill(""))
  }
  
  return (
    <>
      <h2>Choose number of players</h2>
      <div>
        {buttons.map((id) => (
          <button 
            key={id}
            onClick={handleClick}
          >
          {id}
          </button>
        ))}
      </div>
    </>
  )
}

export default ChoosePlayers