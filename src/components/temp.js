import React, {Component} from 'react';
import '../App.css';


class Temp extends Component {

    constructor(props) {
        super(props);
        this.state = {celsius: 0, farenheit: 32}
    }

    convertFarenheit = (e) => {
        let c = e.target.value;
        console.log(c);
        this.setState({celsius: c,
            farenheit: ((c * 9 / 5) + 32).toFixed(2)});
    }


    updateFarenheit = (e) => {
        let f = e.target.value;
        console.log(f);
        this.setState({celsius: ((f - 32) * 5 / 9).toFixed(2),
            farenheit: f})
    }


    render() {
        return (
            <div className="App">
                <div className="App-title App-header">
                    <h2>{this.props.head}</h2>
                </div>

                <div className="App-content">
                    <div className="row">
                        <div className="col25">
                            <label htmlFor="temp">Celsius: </label>
                        </div>
                        <div className="col75">
                            <input type="text" name="celsius"
                                   value={this.state.celsius}
                                   onChange={this.convertFarenheit}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col25">
                            <label htmlFor="temp">Farenheit: </label>
                        </div>
                        <div className="col75">
                            <input type="text" name="farenheit"
                                   value={this.state.farenheit}
                                   onChange={this.updateFarenheit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temp;
