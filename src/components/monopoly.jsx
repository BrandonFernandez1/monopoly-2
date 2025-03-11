const Monopoly = ({ playerCount }) => {
  return (
    <div>
      {playerCount.map(player => (
        <PlayerCard />
      ))}
    </div>
  )
}

const PlayerCard = () => {

}