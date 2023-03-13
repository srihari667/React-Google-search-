// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionListItem, searchStringChange} = props
  const {suggestion} = suggestionListItem
  const changeInput = () => {
    searchStringChange(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="cross-button" onClick={changeInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="cross-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
