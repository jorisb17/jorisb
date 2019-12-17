import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./pages/homepage/homepage.component";
import NotFoundComponent from "./pages/not-found/not.found.component";

class App extends React.Component {

    About = () => (
        <h1>About this example....</h1>
    );
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} component={HomepageComponent}/>
                    <Route path="/about" component={this.About}/>
                    <Route component={NotFoundComponent}/>
                </Switch>
            </div>
        );
    }


}

export default App;

