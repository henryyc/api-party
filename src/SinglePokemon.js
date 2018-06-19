import React, { Component } from 'react';

class SinglePokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {},
    };

    this.fetchPokeData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
      this.fetchPokeData();
    }
  }

  fetchPokeData = () => {
    const { params } = this.props.match;

    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.pokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  render() {
    const { pokemon } = this.state;
    console.log(pokemon)

    return (
      <div className="SinglePokemon">
        {/* <img src={user.avatar_url} alt="" /> */}
        <h2>
          {/* <a href={user.html_url} target="_blank"> */}
            {pokemon.name}
          {/* </a> */}
        </h2>
        <h3>
          {/* {user.location} */}
        </h3>
      </div>
    );
  }
}

export default SinglePokemon;
