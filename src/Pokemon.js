import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Pokemon.css';
import SinglePokemon from './SinglePokemon';

class Homework extends Component {
  state = {
    pokemon: '',
  };

  handleChange = (ev) => {
    this.setState({ pokemon: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.history.push(`/pokemon/${this.state.pokemon}`);
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
          alt="Pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a pokemon id"
              value={this.state.pokemon}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">
                Look up Pokemon
              </button>
            </div>
          </div>
        </form>

        <Route path="/pokemon/:pokemon" component={SinglePokemon} />
      </div>
    );
  }
}

export default Homework;
