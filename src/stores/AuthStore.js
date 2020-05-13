import { observable,action } from "mobx";
import axios from '../axios-instance';
import {isAuthenticated} from "../components/Auth/PrivateRoute/Authenticate";

class AuthStore {
    @observable name = '';
    @observable email = '';
    @observable password = '';
    @observable auth = false;
    @observable loading = true;

    @action signUp = (e, props) => {

        const payload = {
            "name" : e.target.name.value,
            "email" : e.target.email.value,
            "password" : e.target.password.value
        };

        axios.post('/register', payload)
            .then(res => {
                this.loading = true;
                props.history.push('/');
            }).catch(res => {
            console.log(res.data);
        });
    };

    @action signIn = (e, props) => {

        e.preventDefault();

        const payload = {
          "email" : e.target.email.value,
          "password" : e.target.password.value
        };

        axios.post('/login', payload)
            .then(res => {

                localStorage.setItem('token', res.data.token);

                this.auth = true;
                this.loading = false;

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
                this.loading = false;

                props.history.push('/');

            }).catch(res => {
                console.log(res.data);
        });

        localStorage.removeItem('token');
    };

}

const store = new AuthStore();
export default store;
