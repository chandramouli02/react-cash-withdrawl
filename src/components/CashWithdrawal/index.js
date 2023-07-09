import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceAmount: 20000}

  onDenomination = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state
    return (
      <div className="main-container">
        <div className="user-profile-container">
          <div className="user-profile">
            <h1>S</h1>
          </div>
          <h1 className="user-name">Sarah Williams</h1>
        </div>
        <div className="balance-main-container">
          <p className="your-balance">Your Balance</p>
          <div className="balance-container">
            <h1 className="balance">{balanceAmount}</h1>
            <p className="balance-type">In Rupees</p>
          </div>
        </div>
        <div className="withdraw-container">
          <h1 className="withdraw-heading">Withdraw</h1>
          <p className="choose-denomination">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(item => (
              <DenominationItem
                key={item.id}
                item={item}
                onDenomination={this.onDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
