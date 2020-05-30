import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Bookmark from "./Bookmark/Bookmark";
import {toJS} from "mobx";
import Spinner from "../UI/Spinner/Spinner";
import classes from './Bookmarks.css';

@inject('BookmarkStore')
@observer
class Bookmarks extends Component {

    componentDidMount() {
        this.props.BookmarkStore.GetBookmarks();
    }

    render() {

        let tile = null;

        if (this.props.BookmarkStore.isloading === false) {
            tile = <Spinner />;
        } else if (this.props.BookmarkStore.isloading === true) {
            tile = (
                <div className={classes.TotalLists}>
                    {
                        toJS(this.props.BookmarkStore.bookmark).data.map((item,i) => {
                            return <Bookmark item={item} key={i}/>
                        })
                    }
                </div>
            );
        } else {
            tile = <Spinner />;
        }

        return tile;
    }
}

export default Bookmarks;
