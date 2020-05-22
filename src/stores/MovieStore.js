import { observable, action } from "mobx";
import axios from '../axios-instance';

class MovieStore {

    @observable movie = {};
    @observable isloading = null;

    @action fetchMovie = (e) => {
        this.isloading = false;

        e.preventDefault();

        let movieName = e.target.movie.value;

        if (movieName.indexOf(' ') >= 0) {
            movieName = movieName.split(' ').join('+');
        }

        console.log(movieName);

        const payload = {
            "name" : movieName
        };

        axios.post('/fetchMovie', payload, {
            'headers' : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => {
                this.movie = res.data;
                this.isloading = true;
            }).catch(res => {
                console.log(res.data);
        });
    }
}

const store = new MovieStore();
export default store;
