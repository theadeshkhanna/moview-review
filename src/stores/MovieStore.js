import { observable, action } from "mobx";
import axios from '../axios-instance';

class MovieStore {

    @observable movie = {};
    @observable isloading = null;

    @action fetchMovie = (e) => {
        this.isloading = false;
        e.preventDefault();

        const payload = {
            "name" : e.target.movie.value
        };

        axios.post('/fetchMovie', payload)
            .then(res => {

                this.isloading= true;
                this.movie = res.data;
            }).catch(res => {
                console.log(res.data);
        });
    }
}

const store = new MovieStore();
export default store;
