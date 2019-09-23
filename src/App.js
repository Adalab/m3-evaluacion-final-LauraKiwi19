import React from 'react';
import './App.css';
import getData from "./services/getData"
import CharacterList from "./components/CharacterList"
import Filter from "./components/Filter"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      inputValue: ""
    }
    this.handleInputFilter = this.handleInputFilter.bind(this);
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        characters: data
      });
    });
  }

  handleInputFilter(event) {
    const filterInputValue = event.target.value;
    this.setState({
      inputValue: filterInputValue
    })

  }

  render() {
    return (
      <div className="container">
        <Filter handleInputFilter={this.handleInputFilter} />
        <CharacterList inputValue={this.state.inputValue} characters={this.state.characters} />
      </div>
    )
  }
}


export default App;
