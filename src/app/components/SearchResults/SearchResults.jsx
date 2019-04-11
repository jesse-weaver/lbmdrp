import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchResultsCss from './SearchResults.css';

export default class SearchResults extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    return (
      <ul className="search-results">
        {this.props.results.map(item => (
          <li className="search-result-item">
            <span className="artist-thumbnail">
              {item.image ? (
                <img src={item.image} />
              ) : (
                <span className="placeholder-thumbnail"></span>
              )}
            </span>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }

  static defaultProps = {
    results: [
      {
      "mkid": "0q32a3GRCjDxS4EIrC7YVY",
      "name": "The Sword",
      "image": "https://i.scdn.co/image/138c970f18d99515225c9f8b00890710cbd20011"
      },
      {
      "mkid": "6PzFRXjgGHQw6K4WeERMK1",
      "name": "Magic Sword",
      "image": "https://i.scdn.co/image/927da1dbfcb9c26b53c7fa90fc518600a42a9ae5"
      },
      {
      "mkid": "3mfcOiifsL3kniPhsKoXpl",
      "name": "Sword Beach",
      "image": "https://i.scdn.co/image/ac4459727e5b015b9a2f68ab76af58b47d3fa2b7"
      },
      {
      "mkid": "4Hb807JbzsN3QgRBCoqke4",
      "name": "Fall on Your Sword",
      "image": "https://i.scdn.co/image/4524964cc0066d01e5d2b6c6616328503854918a"
      },
      {
      "mkid": "6RNuNpxyKhqaGRQTboO3Kf",
      "name": "Sword",
      "image": "https://i.scdn.co/image/29044ec4af8f83aaf251b7dc080e2e2935f48f85"
      },
      {
      "mkid": "6rFsq5pCovMlntERP8IoQO",
      "name": "Porn Sword Tobacco",
      "image": "https://i.scdn.co/image/2e0d39cca2a6929a02273cd6b29905da161a904f"
      },
      {
      "mkid": "1CDW0r69t5jWOb4pRHVkrL",
      "name": "Lazer Sword",
      "image": "https://i.scdn.co/image/9397ae6d59cd20e733413568307d8a883dcba681"
      },
      {
      "mkid": "4eSAUUvvyHHskutYf14J19",
      "name": "Master Sword",
      "image": "https://i.scdn.co/image/90728dbe733d6fb3404fe5791aa6a46a812b07e0"
      },
      {
      "mkid": "690s9BVEMfFLGp8NtK67E2",
      "name": "Lazer Sword",
      "image": ""
      },
      {
      "mkid": "7maiDsuFqdMW1OVQxxQsA6",
      "name": "Angel Sword",
      "image": "https://i.scdn.co/image/cb8bbffe4982456c1870dcbc07dd8b2542989b46"
      },
      {
      "mkid": "7aVAHmMUBvA8a8yKFv8NkC",
      "name": "sword",
      "image": ""
      },
      {
      "mkid": "02TreJmJ72sQYGfS5DwtOP",
      "name": "Sea Sword",
      "image": "https://i.scdn.co/image/502fc69855156e5ac1a67adb5e2708011157d566"
      },
      {
      "mkid": "0YhuzSavqee8E70Za4PBqs",
      "name": "Polo Sword",
      "image": ""
      },
      {
      "mkid": "0eHvauQVKYuLD4YKYud637",
      "name": "Blue Sword",
      "image": "https://i.scdn.co/image/a95e6d831927a34facd1f15e1719b7c265f278d5"
      },
      {
      "mkid": "0iEVN1LMvyJBV91eL6vYeB",
      "name": "Sword Singh",
      "image": "https://i.scdn.co/image/f668b724867488a0a3a25a0e276a324639026938"
      },
      {
      "mkid": "0iFA75aRZkMFtVcWMJMIVP",
      "name": "Jack Sword",
      "image": "https://i.scdn.co/image/0e2ebd933acd876b6fc844e5af42fce063b88de4"
      },
      {
      "mkid": "0kn2ZxQKMjDX5pFPO2N9Hc",
      "name": "Sword (Cro)",
      "image": ""
      },
      {
      "mkid": "0sstpUkDynCvdAvP5Pyt5Y",
      "name": "Evilchris Sword",
      "image": "https://i.scdn.co/image/1e898060d1e383f0075123802790d6e671ecafa8"
      },
      {
      "mkid": "11yaVjvazcHA7K5BNPCajm",
      "name": "Secret Sword",
      "image": ""
      },
      {
      "mkid": "1d3Ssdano3hPiksGwm9D1r",
      "name": "Oli Sword",
      "image": "https://i.scdn.co/image/1f8f7f97043000a7f7a1373972cf4f4139c12385"
      },
      {
      "mkid": "1yOM5OQFmnuAnNz2MaOuiG",
      "name": "Donovan Sword",
      "image": ""
      },
      {
      "mkid": "2J81rOv2SAIvMhz6YpW0ys",
      "name": "VJ-Sword",
      "image": "https://i.scdn.co/image/350c2c8b5401fb8fef42ff840f6d1d836924fb7a"
      },
      {
      "mkid": "2dXWRmQg6mLBSU8l0CaIKi",
      "name": "Evil Sword",
      "image": "https://i.scdn.co/image/aa5036dce7b76c52e70bc277ff4fb3370e35e3f4"
      },
      {
      "mkid": "2keQe7NQuLp8OKA40pmxO9",
      "name": "Lazor Sword",
      "image": ""
      },
      {
      "mkid": "2y5KP3ds1Xv6HlHDveiIjh",
      "name": "Sword (Cro)",
      "image": "https://i.scdn.co/image/946f95c218f818ede24c3f4793ee3a0495c79d96"
      }
      ]
  };
  
}
