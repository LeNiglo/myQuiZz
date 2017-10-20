import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MyButton from './Button.js'

export default class Buttons extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6 text-right">
                    <MyButton cb={this.props.getPrevUser} name="Prev" />
                </div>
                <div className="col-xs-6 text-left">
                    <MyButton cb={this.props.getNextUser} name="Next" />
                </div>
            </div>
        );
    }
}
