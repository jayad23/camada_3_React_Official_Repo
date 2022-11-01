import React, { Component } from 'react';
import style from "./styles/style.module.css";

class CounterClass extends Component {
    state = {
        count: 13
    }

    incrementCount = () => {
        this.setState(retro => ({ count: retro.count + 1 }))
    }

    render() {
        return (
            <div className={style.counterContainer}>
                <button onClick={this.props.handleIncrementClass}>Incrementar Class</button>
                <h1>{this.props.title} es: {this.props.counterClass}</h1>
            </div>
        );
    }
}

export default CounterClass;
