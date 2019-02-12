import React, { Component } from 'react';
import '../css/content.css';
// Component
import Header from './Header';
class Content extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%">
                  <thead>
                    <tr>
                      <th>Pokemon ID</th>
                      <th>Nombre del Pokemon</th>
                      <th>Imagen del Pokemon</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>Primer movimiento</th>
                      <th>Base_experience</th>
                    </tr>
                  </thead>
                    <PokemonList/>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class PokemonList extends Component{
  constructor(props){
    super(props);
    this.state = {
      species: [],
      fetched : false,
      loading : false,
    };
  }
  componentWillMount(){
    var pokemons = [];
    this.setState({
      loading : true
    });
    fetch('http://pokeapi.co/api/v2/type/10').then(res=>res.json())
    .then(response=>{  
      response.pokemon.map((pkm, index)=>{
        var url = pkm.pokemon.url
        var info = [];
        fetch(url).then(result=>result.json())
        .then(row=>{
          // console.log(row)
          var mo = row.moves[0].move.name
          info = {
            id: row.id,
            name: row.name,
            sprite: row.sprites.front_default,
            height: row.height,
            weight: row.weight,
            mo: mo,
            base_experience: row.base_experience,
          }
          pokemons.push(info)
        })
      })
      console.log(pokemons)
      this.setState({
        species : pokemons,
        loading : true,
        fetched : true
      });
    });
  }
  render(){
    const {fetched, loading, species} = this.state;
    let content ;
    if(fetched){
      content = species.map((pokemon,index)=><Pokemon key={index} pokemon={pokemon}/>);
      // console.log(species)
    // }else if(loading && !fetched){
    //     content = <tr> Loading ...</tr>;
    }
    return  <tbody>
      {content}
    </tbody>;
  }
}
class Pokemon extends Component{
  render(){
    const {pokemon,key} = this.props;
    return (
      <tr key={key}>
        <td>{pokemon.id}</td>
        <td>{pokemon.name}</td>
        <td><img src={pokemon.sprite} alt={key}/></td>
        <td>{pokemon.height}</td>
        <td>{pokemon.weight}</td>
        <td>{pokemon.mo}</td>
        <td>{pokemon.base_experience}</td>
      </tr>
    )
  }
}
export default Content;
