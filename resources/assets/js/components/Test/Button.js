import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn btn-primary btn-block" onClick={this.props.cb}>{this.props.name}</button>
        );
    }
}
