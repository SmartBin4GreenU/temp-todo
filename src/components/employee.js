import React, {Component} from 'react';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', job: ''}
    }

    handleValue = (e) => {
        this.setState({[e.target.name]: e.target.value},
            () => {
                console.log(this.state)
            });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title App-header">
                    <h2>{this.props.head}</h2>
                </div>
                <div>
                    Name: <input type="text" name="name"
                                 onChange={this.handleValue}
                                 value={this.state.name}/> <br/>
                    Surname: <input type="text" name="surname"
                                    onChange={this.handleValue}
                                    value={this.state.surname}/>
                    <br/>
                    Job: <input type="text" name="job" ref="job"
                                onChange={this.handleValue}
                                value={this.state.job}/>

                    <br/>
                    <div>
                        <Person name={this.state.name}
                                surname={this.state.surname}/>
                        Job: {this.state.job} <br/>
                    </div>
                </div>
            </div>
        )
    }
}

class Person extends Component {
    render() {
        return (
            <div>
                Name: {this.props.name.toUpperCase()}
                    {this.props.surname.toUpperCase()}
            </div>
        );
    }
}

export default Employee;