import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./pages/homepage/homepage.component";

function App() {
    const About = () => (
        <h1>About this example....</h1>
    );
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomepageComponent}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;

