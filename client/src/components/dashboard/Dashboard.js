import React, { Component } from "react";
import UserOne from '../user-one/UserOne';
import UserTwo from '../user-two/UserTwo';
import "../dashboard/Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="heading"> Chat Application </h1>
                <div className="dashboard-content">
                    <div className="users">
                        <h4 className="user-el"> User one </h4>
                        <UserOne></UserOne>
                    </div>
                    <div className="users">
                        <h4 className="user-el"> User two </h4>
                        <UserTwo></UserTwo>
                    </div>
                </div>
            </div>
        )
    };
}

export default Dashboard;