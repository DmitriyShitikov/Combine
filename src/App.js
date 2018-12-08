import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {UserContext} from './UserContext';
import './App.css';
import Loginization from './Loginization/Loginization';
import Main from './Main/Main';


class App extends Component {
    static contextType = UserContext;

    componentDidMount () {
        localStorage.setItem('userObject', JSON.stringify({login: 'q', password: 'q'}))
    }

    render() {
        console.log(this.context.user.isLogged);
        return (
            <div className="App">
                <p className="wellcome">WELLCOME to Mr. Maximov - company !!!</p>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            localStorage.getItem('isLogged') ? ( <Redirect to='/mainpage'/>) : (
                                <Loginization {...props}/>))}/>
                        <Route path="/mainpage" render={(props) => (
                            localStorage.getItem('isLogged') ? (<Main/>) : (<Redirect to='/'/>))}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

