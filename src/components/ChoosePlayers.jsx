const ChoosePlayers = ({ setActiveButton, setPlayers, setGameState }) => {
  const buttons = [1, 2, 3, 4]

  const handleClick = (event) => {
    const playerCount = Number(event.target.textContent)
    setActiveButton(event.target.textContent)
    setPlayers(Array(playerCount).fill().map(() => ({
      name: '',
      balance: 1000,
      bankrupt: false,
    })))
    setGameState('playerNames')
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