import React, { Component } from 'react'
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'trails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' },
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };

    this.handlClick = this.handlClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);

    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }

  handlClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip A Coin!</h2>
        <button onClick={this.handlClick}>Flip Me!</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer;
