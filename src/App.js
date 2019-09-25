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
      inputValue: "",
      locationValue: "",
      genderValue: "",
      statusValue: "",
      episodesValue: ""
    }
    this.handleInputFilter = this.handleInputFilter.bind(this);
    this.renderHomePage = this.renderHomePage.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleEpisodes = this.handleEpisodes.bind(this);


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

  handleLocation(event) {
    const selectedLocationValue = event.target.value;
    this.setState({
      locationValue: selectedLocationValue
    })
  }

  handleGender(event) {
    console.log(event)
    const selectedGender = event.target.value;
    this.setState({
      genderValue: selectedGender
    })
  }

  handleStatus(event) {
    const selectedStatus = event.target.value;
    this.setState({
      statusValue: selectedStatus
    })
  }

  handleEpisodes(event) {
    const selectedEpisodes = event.target.value;
    this.setState({
      episodesValue: selectedEpisodes
    })
  }

  renderHomePage() {
    return (
      <div className="container__list">
        <Header />
        <Filter
          handleInputFilter={this.handleInputFilter}
          handleLocation={this.handleLocation}
          handleGender={this.handleGender}
          handleStatus={this.handleStatus}
          handleEpisodes={this.handleEpisodes} />
        <CharacterList
          inputValue={this.state.inputValue}
          genderValue={this.state.genderValue}
          locationValue={this.state.locationValue}
          statusValue={this.state.statusValue}
          episodesValue={this.state.episodesValue}
          characters={this.state.characters}
        />
      </div>
    )
  }

  renderDetail(routerProps) {
    console.log(routerProps)
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
