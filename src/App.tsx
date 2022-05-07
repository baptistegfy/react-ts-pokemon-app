// import React from 'react';
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PokemonList from './pages/PokemonList';
import PokemonsDetail from './pages/PokemonDetail';
import PageNotFound from './pages/PageNotFound';
  
// const App: React.FC = () => {
const App: FunctionComponent = () => {

  return (

    <Router>
      {/* l'ordre des route est importante !!! */}
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to='/' className='brand-logo center'>Pokédex</Link>
          </div>
        </nav>
        
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/pokemons' component={PokemonList} />
          <Route path='/pokemons/:id' component={PokemonsDetail} />
          {/* toujours a la fin */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}
  
export default App;


// import React from 'react'

// export default class App extends React.Component {
//   const name: string = "React"

//   render() {
//     return <h1>hello, {name}</h1>
//   }
// }