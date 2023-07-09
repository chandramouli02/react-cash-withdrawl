import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {item, onDenomination} = this.props
    const {value} = item

    const onDenominationClick = () => {
      onDenomination(value)
    }

    return (
      <li>
        <button
          className="value-container-button"
          type="button"
          onClick={onDenominationClick}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
