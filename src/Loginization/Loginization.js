import React, { Component } from 'react';
import { UserContext } from '../UserContext';
import {NavLink} from 'react-router-dom';
import './Loginization.css';

class Loginization extends Component {
    static contextType = UserContext;

    render(){
        return(
            <form className = 'loginization' onSubmit={this.context.handleSubmit}>
                <input className = 'login' name='login' type="text" onChange={this.context.handleChange} placeholder='Enter your login ...'/>
                <input className = 'password' name='password' type="text" onChange={this.context.handleChange} placeholder='Enter your password ...'/>
                <button className = 'btn'>Вход в систему</button>
            </form>
        )
    }
}

export default Loginization;