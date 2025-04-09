import { useState } from 'react'

const Monopoly = ({ players, setPlayers }) => {
  const [payer, setPayer] = useState(null)
  const [receiver, setReceiver] = useState(null)
  const [paymentAmount, setPaymentAmount] = useState(0)

  const selectPayer = (id) => {
    const selectedPlayer = players.find(player => player.id === id)
    setPayer(selectedPlayer)

    // setPlayers(prev => prev.map(player => (
    //   player.id == id
    //     ? { ...player, balance: player.balance - amount }
    //     : player
    // )))
  }

  const selectReceiver = (id) => {
    const selectedPlayer = players.find(player => player.id === id)
    setReceiver(selectedPlayer)
    
    // setPlayers(prev => prev.map(player => (
    //   player.id == id
    //     ? { ...player, balance: player.balance + amount }
    //     : player
    // )))
  }

  const passGo = (id) => {
    setPlayers(prev => prev.map(player => (
      player.id == id
        ? { ...player, balance: player.balance + 200 }
        : player
    )))
  }

  return (
    <>
      {/* <PaymentForm 
        payer={payer} 
        receiver={receiver} 
        setPayer={setPayer} 
        setReceiver={setReceiver} 
        paymentAmount={paymentAmount} 
        setPaymentAmount={setPaymentAmount} 
      /> */}
      <div className='card-container'>
        {players.map(player => (
          <PlayerCard 
            key={player.id}
            name={player.name}
            balance={player.balance} 
            selectPayer={() => selectPayer(player.id)}
            selectReceiver={() => selectReceiver(player.id)}
            passGo={() => passGo(player.id)}
          />
        ))}
        <BankCard />
      </div>
    </>
  )
}

const PlayerCard = ({ name, balance, selectPayer, selectReceiver, passGo }) => {
  return (
    <div className={`player-card ${name === "Free Parking" ? "free-parking" : ""}`}>
      {/* <div className='player-image'>

      </div> */}
      <div className='player-name'>{name}</div>
      <div className='player-balance'>{'$' + balance}</div>
      <div className='transaction-button-container'>
        <button onClick={selectPayer} className='pay-button'>Pay</button>
        <button onClick={selectReceiver} className='receiver-button'>Receive</button>

        {name !== 'Free Parking' && (
          <button onClick={passGo} className='pass-go-button'>Pass Go</button>
        )}
      </div>
    </div>
  )
}

const BankCard = () => {
  return (
    <div className="player-card" id="bank">
      <div className="player-name">Bank</div>
      <div className="player-balance">$∞</div>
    </div>
  )
}

const PaymentForm = ({ payer, receiver, setPayer, setReceiver, paymentAmount, setPaymentAmount }) => {
  const handleChange = (event) => {
    setPaymentAmount(event.target.value)
  }

  const handleSubmit = () => {}
  
  return (
    <div className='payment-module'>
      <div className='player'>
        <h2>{payer.name}</h2>
        <h2>${payer.balance}</h2>
      </div>
      <div className='controls'>
        <input
          value={paymentAmount}
          onChange={handleChange}
        />
        <button>Submit</button>
      </div>
      <div className='player'>
        <h2>{receiver.name}</h2>
        <h2>${receiver.balance}</h2>
      </div>
    </div>
  )
}

export default Monopoly