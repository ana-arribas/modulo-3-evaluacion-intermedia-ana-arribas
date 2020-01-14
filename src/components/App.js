import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfPokemons: pokemons,
    }
  }
  render() {
    return (
      <div className="main-container" >
        <PokeList items={this.state.arrayOfPokemons} />
      </div>
    );
  }
}
export default App;
