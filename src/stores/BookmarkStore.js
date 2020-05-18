import { observable,action } from 'mobx';
import axios from '../axios-instance';

class BookmarkStore {

    @observable isloading = null;
    @observable bookmark = [];

    @action AddBookmark = (props) => {
        const payload = {};
        this.isloading = false;
        axios.post('/bookmark', payload)
            .then(res => {
                this.isloading = true;
                this.bookmark = res.data;

                props.history.push('/my-bookmarks');
            }).catch(res => {
                console.log(res.data);
        });
    }
}

const store = new BookmarkStore();
export default store;
