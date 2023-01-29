import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {CurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({CurrencyList: formattedData, isLoading: false})
  }

  render() {
    const {CurrencyList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="main-text">Cryptocurrency Tracker</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>

            <div className="list-container">
              <div className="tracker-container">
                <p className="coin-text">Coin Type</p>
                <div className="usd-euro-container">
                  <p className="coin-text">USD</p>
                  <p className="coin-text">EURO</p>
                </div>

                <ul className="unOrderList">
                  {CurrencyList.map(each => (
                    <CryptocurrencyItem CurrencyList={each} key={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
