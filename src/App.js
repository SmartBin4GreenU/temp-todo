import React, {Component} from 'react';
import './App.css';

import Temp from './temp';
import Todo from './todo';

class App extends Component {

    render() {
        return (
            <div>
                <Temp head="Temperature conversion" />
                <Todo head="Todo" />
             </div>
        );
    }
}

export default App;
