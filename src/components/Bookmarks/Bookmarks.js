import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Bookmarks extends Component {
    render() {
        return (
            <div>
                <Link to="/dashboard">Back to Dashboard</Link>
                At Bookmarks
            </div>
        );
    }
}

export default Bookmarks;
