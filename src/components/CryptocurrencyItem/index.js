import './index.css'

const CryptocurrencyItem = props => {
  const {CurrencyList} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = CurrencyList

  return (
    <li className="list-type">
      <div className="tracker-container">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="coin-text">{currencyName}</p>
        <div className="usd-euro-container">
          <p className="coin-text">{usdValue}</p>
          <p className="coin-text">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
