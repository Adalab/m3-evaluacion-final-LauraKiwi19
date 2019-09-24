import React from 'react';
import { Route, Switch } from "react-router-dom"
import './styles/App.scss';
import getData from "./services/getData"
import CharacterList from "./components/CharacterList"
import Filter from "./components/Filter"
import CharacterDetail from "./components/CharacterDetail"
import Header from "./components/Header"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      inputValue: ""
    }
    this.handleInputFilter = this.handleInputFilter.bind(this);
    this.renderHomePage = this.renderHomePage.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
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

  renderHomePage() {
    return (
      <div className="container__list">
        <Header />
        <Filter
          handleInputFilter={this.handleInputFilter} />
        <CharacterList
          inputValue={this.state.inputValue}
          characters={this.state.characters} />
      </div>
    )
  }

  renderDetail(routerProps) {
    const selectedId = parseInt(routerProps.match.params.characterId)
    let chosenCharacter
    for (const character of this.state.characters) {
      if (character.id === selectedId) {
        chosenCharacter = character
      }
    }
    return (
      <CharacterDetail character={chosenCharacter} />
    )
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={this.renderHomePage} />
          <Route path="/character/:characterId" render={this.renderDetail} />
        </Switch>
      </div>
    )
  }
}

export default App;
