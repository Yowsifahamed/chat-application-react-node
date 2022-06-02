import React, { Component } from "react";
import '../../components/users.css';

class UserOne extends Component {
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
                <div className="form-group">
                    <div className="input-message">
                        <input type="text" class="form-control input-control" id="exampleInputPassword1" placeholder="text" />
                        <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserOne;