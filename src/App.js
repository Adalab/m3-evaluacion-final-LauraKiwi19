import React from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import getData from "./services/getData"
import CharacterList from "./components/CharacterList"
import Filter from "./components/Filter"
import CharacterDetail from "./components/CharacterDetail"


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
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Filter
                handleInputFilter={this.handleInputFilter} /> ,
              <CharacterList
                inputValue={this.state.inputValue}
                characters={this.state.characters} />
            );
          }} />
          <Route path="/character/:characterId" render={routerProps => {
            return (
              <CharacterDetail routerProps={routerProps} characters={this.state.characters} />
            )
          }} />
        </Switch>


      </div>
    )
  }
}

export default App;
