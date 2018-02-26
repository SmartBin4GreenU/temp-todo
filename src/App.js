import React, {Component} from 'react';
import './App.css';

import Temp from './components/temp';
import Todo from './components/todo';
import Employee from "./components/employee";

class App extends Component {

    render() {
        return (
            <div>
                <Temp head="Temperature conversion" />
                <Todo head="Todo" />
                <Employee head="Employee"/>
             </div>
        );
    }
}

export default App;
