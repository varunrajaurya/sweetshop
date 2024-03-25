import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

const App = () => {
    return (
        <Router>
            <div className="App">
              <h1>HEllo </h1>
                <Switch>
                    <Route exact path="/register" component={RegisterPage} />
                    {/* Other routes can be added here */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
