import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))
  }

  emojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    console.log(emojis)

    return (
      <ul className="sub-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="all-emoji-container">
          {emojis.map(eachEmoji => {
            const {name, imageUrl} = eachEmoji
            return (
              <li className="emoji-name-container" key={eachEmoji.id}>
                <img
                  src={imageUrl}
                  className="emoji-symbol"
                  alt={name}
                  onClick={this.onClickEmoji}
                />
                <p className="emoji-label">{name}</p>
              </li>
            )
          })}
        </div>
      </ul>
    )
  }

  thankyouMsg = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    console.log(loveEmojiUrl)
    return (
      <ul className="sub-container">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-paragraph">
          We will use your feedback to improve our customer support performance
        </p>
      </ul>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="bg-container">
        {isFeedbackGiven ? this.thankyouMsg() : this.emojiContainer()}
      </div>
    )
  }
}
export default Feedback
