import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('BookmarkStore')
@observer
class Bookmark extends Component {

    handleBookmarkDelete = (id) => {
        this.props.BookmarkStore.DeleteBookmark(id);
    };

    render () {
        return (
            <div>
                <p>{this.props.item.title}</p>
                <img src={this.props.item.poster} alt="movie poster" />
                <p>{this.props.item.runtime}</p>
                <p>{this.props.item.rating}</p>
                <button onClick={() => this.handleBookmarkDelete(this.props.item.imdb_id)}>Delete</button>
            </div>
        );
    }
}

export default Bookmark;
