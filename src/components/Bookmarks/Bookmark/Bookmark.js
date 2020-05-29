import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './Bookmark.css';

@inject('BookmarkStore')
@observer
class Bookmark extends Component {

    handleBookmarkDelete = (id) => {
        this.props.BookmarkStore.DeleteBookmark(id);
    };

    render () {
        return (
            <div className={classes.TotalList}>
                <div className={classes.First}>
                    <img src={this.props.item.poster} alt="movie poster" className={classes.Photo}/>
                </div>
                <div className={classes.Last}>
                    <p>{this.props.item.title}</p>
                    <p>Runtime: {this.props.item.runtime}</p>
                    <p>ImdbRating: {this.props.item.rating}/10</p>
                    <button onClick={() => this.handleBookmarkDelete(this.props.item.imdb_id)} className={classes.Del}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Bookmark;
