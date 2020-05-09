import { observable,action } from "mobx";
import axios from '../axios-instance';

class AuthStore {
    @observable email = '';
    @observable password = '';
    @observable auth = false;

    @action signIn = () => {

        const payload = {
          "email" : this.email,
          "password" : this.password
        };

        axios.post('/login', payload)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.auth = true;
            }).catch(res => {
                console.log(res.data);
        });
    };

    @action signOut = () => {

        localStorage.removeItem('token');

        axios.post('/logout')
            .then(res => {
                console.log('logout success');
            }).catch(res => {
                console.log(res.data);
        });
    };

    @action isAuthenticated = () => {

        if (localStorage.getItem('token')) {
            return JSON.parse(localStorage.getItem('token'));
        } else {
            return false;
        }
    };
}

const store = new AuthStore();
export default store;
