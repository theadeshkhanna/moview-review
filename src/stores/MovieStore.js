import { observable, action } from "mobx";
import axios from '../axios-instance';

class MovieStore {

    @observable movie = null;
    @observable isloading = null;
    @observable error = null;

    @action fetchMovie = (payload) => {
        this.isloading = false;

        axios.post('/fetchMovie', payload, {
            'headers' : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
                this.movie = res.data;
                this.isloading = true;
            }).catch(res => {
                this.isloading = true;
                this.error = res.response.data.message;
        });
    }
}

const store = new MovieStore();
export default store;
