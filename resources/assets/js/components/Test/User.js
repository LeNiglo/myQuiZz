import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Example extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            user: props.user,
        });
    }

    render() {
        return (
            <div className="user">
                { this.state.user.gender === 'male' ? 'Mr.' : 'Mrs.' }
                &nbsp;
                { this.state.user.name.first.replace(/\b[a-z]/g, (letter) => letter.toUpperCase()) }
                &nbsp;
                { this.state.user.name.last.replace(/\b[a-z]/g, (letter) => letter.toUpperCase()) }
            </div>
        );
    }
}
