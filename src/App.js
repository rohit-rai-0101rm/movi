import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Home from "./components/Home/Home"
import Header from './components/Header/Header'
import MovieCard from './components/MovieCard/MovieCard'
import Movielisting from './components/Movielisting/Movielisting';
import Moviedetail from './components/MovieDetail/Moviedetail';
import Pagenotfound from './components/Pagenotfound/Pagenotfound';
import Footer from './components/Footer/Footer';
import "./App.scss";

function App() {
  return (
    <div className="App">
<Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={Moviedetail} />
            <Route component={Pagenotfound} />
          </Switch>
        </div>
        <Footer />
      </Router>  
    
    </div>
  );
}

export default App;
