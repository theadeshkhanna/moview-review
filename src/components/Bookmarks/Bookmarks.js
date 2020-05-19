import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { observer, inject } from 'mobx-react';
import Bookmark from "../Bookmark/Bookmark";
import {toJS} from "mobx";

@inject('BookmarkStore')
@observer
class Bookmarks extends Component {

    componentDidMount() {
        this.props.BookmarkStore.GetBookmarks();
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">Back to Dashboard</Link>
                <div>
                    {
                        console.log((toJS(this.props.BookmarkStore.bookmark)))
                    }
                </div>
            </div>
        );
    }
}

export default Bookmarks;
