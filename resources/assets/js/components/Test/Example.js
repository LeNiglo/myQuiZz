import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Buttons from './Buttons.js';
import User from './User.js';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            users: [],
        };

        this.getPrevUser = this.getPrevUser.bind(this);
        this.getNextUser = this.getNextUser.bind(this);
    }

    componentDidMount() {
        this.getNextUser();
    }

    getPrevUser() {
        this.setState({ user: null });
        let users = this.state.users;
        users.pop();
        if (users.length === 0) {
            this.getNextUser();
        } else {
            this.setState({
                user: users[users.length - 1],
                users: users,
            });
        }
    }

    getNextUser() {
        this.setState({ user: null });
        axios.get(false ? 'https://randomuser.me/api/' : '/api/randomuser/', {
            params: {
                nat: 'gb'
            }
        })
        .then(({ data }) => {
            let users = this.state.users;
            users.push(data.results[0]);
            if (users.length > 10) {
                users.shift();
            }
            this.setState({
                user: users[users.length - 1],
                users: users,
            });
        })
        .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Here is a random user :
                    <small className="pull-right">
                        {this.state.users.length} loaded.
                    </small>
                </div>

                <div className="panel-body">
                    { this.state.user !== null ? (
                        <User user={this.state.user} />
                    ) : (
                        <span>Loading ...</span>
                    )}
                </div>

                <div className="panel-footer">
                    <Buttons getNextUser={this.getNextUser} getPrevUser={this.getPrevUser} />
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
