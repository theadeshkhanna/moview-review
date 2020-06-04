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
            tile = <div className={classes.Centre}><Spinner /></div>;
        } else if (this.props.BookmarkStore.isloading === true) {

            if (toJS(this.props.BookmarkStore.bookmark).data.length === 0) {
                tile = (
                    <div>
                        <img className={classes.Empty} src={require("../../assets/bookmark.png")}/>
                        <p className={classes.Text}> you don't have any bookmarks</p>
                    </div>
                );
            } else {
                tile = (
                    <div className={classes.TotalLists}>
                        {
                            toJS(this.props.BookmarkStore.bookmark).data.map((item,i) => {
                                return <Bookmark item={item} key={i}/>
                            })
                        }
                    </div>
                );
            }
        } else {
            tile = <div className={classes.Centre}><Spinner /></div>;
        }

        return tile;
    }
}

export default Bookmarks;
