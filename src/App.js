import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import Soincor from './Soincor'
import Parfun from './Parfun'
import Maquillage from './Maquillage'
import Usersprod from './Usersprod.js'
import Contact from './Contact'
function App() {
  
const handleMovieDetails=(title, trailer, description)=>{
var title = title
var trailer = trailer
var description = description
}
 
  return (
    <div>

<Router>
    <div style = {{backgroundColor: "white", overflow: "hidden", height : "300vh"}}>
    
    
     <Route exact path = "/" component = {MovieList}></Route>
     <Route  path = "/Soincor" component = {Soincor}></Route>
     <Route   path = "/Parfun" component = {Parfun}></Route>
     <Route   path = "/Maquillage" component = {Maquillage}></Route>
     <Route  exact path="/:Userprod"component ={Usersprod}></Route>
     <Route  exact path="/Contact"component ={Contact}></Route>
    
    </div>
    </Router>
     </div>
  );
}

export default App;
