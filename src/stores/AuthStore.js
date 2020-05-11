import { observable,action } from "mobx";
import axios from '../axios-instance';

class AuthStore {
    @observable name = '';
    @observable email = '';
    @observable password = '';
    @observable auth = false;
    @observable loading = true;

    @action signUp = (props) => {

        const payload = {
            "name" : this.name,
            "email" : this.email,
            "password" : this.password
        };

        axios.post('/register', payload)
            .then(res => {
                this.loading = true;
                props.history.push('/');
            }).catch(res => {
            console.log(res.data);
        });
    };

    @action signIn = (props) => {

        const payload = {
          "email" : this.email,
          "password" : this.password
        };

        axios.post('/login', payload)
            .then(res => {

                localStorage.setItem('token', res.data.token);

                this.auth = true;
                this.loading = true;

                props.history.push('/dashboard');
            }).catch(res => {
                console.log(res.data);
        });
    };

    @action signOut = (props) => {

        axios.post('/logout', {}, {
            'headers' : {
                'Authorization' : 'Bearer' + localStorage.getItem('token')
            }
        })
            .then(res => {

                this.auth = false;
                this.loading = true;

                props.history.push('/');

            }).catch(res => {
                console.log(res.data);
        });

        localStorage.removeItem('token');
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
