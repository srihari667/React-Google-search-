// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchString: ''}

  changeSearchString = event => {
    const newString = event.target.value
    this.setState({searchString: newString})
  }

  onDelete = () => {
    document.getElementById('inputElement').value = ''
    this.setState({searchString: ''})
  }

  searchStringChange = suggestion => {
    document.getElementById('inputElement').value = suggestion
    this.setState({searchString: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchString} = this.state
    const searchList = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchString.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="logo"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.changeSearchString}
              id="inputElement"
            />
            {searchString !== '' && (
              <button
                type="button"
                className="delete-button"
                onClick={this.onDelete}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
                  alt="cross"
                  className="delete-img"
                />
              </button>
            )}
          </div>
          <ul>
            {searchList.map(eachSuggestion => (
              <SuggestionItem
                suggestionListItem={eachSuggestion}
                key={eachSuggestion.id}
                searchStringChange={this.searchStringChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
