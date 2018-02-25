import React, {Component} from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {list: ['item1', 'item2']};
    }


    add = (e) => {
        let item = this.refs.todo.value;
        console.log('todo',item);
        this.setState( {list: [...this.state.list, item] });

    }

    reset = (e) => {
        this.setState( {list: []});
    }

    renderList = () => {
        return (
            this.state.list.map((item,index) => {
                return ( <li key={index}> {index+1} : {item} </li>)
            })
        )
    }

    render() {
        return (
            <div className="App">
                    <div className="App-title App-header">
                        <h2> {this.props.head} </h2>
                    </div>

                <div className="App-content">

                    <div className="row">
                        <div className="col75">
                            <input type="text" ref="todo"  />
                            <button onClick={this.add}>Add</button>
                            <button onClick={this.reset}>Reset</button>
                        </div>

                    </div>

                    <div>
                        <ul>{this.renderList()}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;