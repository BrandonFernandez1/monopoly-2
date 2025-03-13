const Monopoly = ({ players }) => {
  return (
    <div className='player-cards'>
      {players.map((player, index) => (
        <PlayerCard key={index} name={player} />
      ))}
    </div>
  )
}

const PlayerCard = ({ name }) => {
  return (
    <>
      <div className='player-name'>
        {name}
      </div>
      <div className='player-balance'>
        $1000
      </div>
    </>
  )
}

export default Monopoly