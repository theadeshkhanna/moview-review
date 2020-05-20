import {observable, action} from 'mobx';
import axios from '../axios-instance';

class BookmarkStore {

    @observable isloading = null;
    @observable bookmark = {};

    @action AddBookmark = (movieObject) => {

        const payload = {
            'rating'  : movieObject.imdbRating,
            'poster'  : movieObject.Poster,
            'title'   : movieObject.Title,
            'runtime' : movieObject.Runtime
        };

        this.isloading = false;

        axios.post('/bookmark', payload, {
            'headers' : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
                this.isloading = true;
                console.log(res.data);
            }).catch(res => {
                console.log(res.data);
        });
    };

    @action GetBookmarks = () => {

        this.isloading = false;

        axios.get('bookmarks', {
            'headers' : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            this.bookmark = res.data;
            this.isloading = true;
        }).catch(res => {
            console.log(res.data);
        });
    }
}

const store = new BookmarkStore();
export default store;
