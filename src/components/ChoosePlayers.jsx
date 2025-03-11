const ChoosePlayers = ({ setActiveButton }) => {
  const buttons = [1, 2, 3, 4]

  const handleClick = (event) => {
    setActiveButton(event.target.value)
  }
  
  return (
    <div>
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
    </div>
  )
}

export default ChoosePlayers