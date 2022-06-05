import React, { Component } from "react";

class UserTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="content">
                <div className="messages">
                    <div className="user-message">
                        <div className="user-one-message">
                            text
                        </div>
                    </div>
                    <div className="user-message">
                        <div className="user-two-message">
                            text
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="input-message">
                            <input type="text" className="form-control input-control" id="exampleInputPassword1" placeholder="text"
                                value={this.state.value} onChange={this.handleChange} />
                            <button type="submit" className="btn btn-primary submit-btn" value="Submit">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default UserTwo;