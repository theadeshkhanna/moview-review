import { observable,action } from "mobx";
import axios from '../axios-instance';

class AuthStore {
    @observable email = '';
    @observable password = '';

    @action signIn = () => {

        const payload = {
          "email" : this.email,
          "password" : this.password
        };

        axios.post('/login', payload)
            .then(res => {
                localStorage.setItem('token', res.data.token);
            }).catch(res => {
                console.log(res.data);
        });
    }
}

const store = new AuthStore();
export default store;
