import { observable,action } from "mobx";
import axios from '../axios-instance';
import body from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/body";

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
                console.log(res);
            }).catch(res => {
                console.log(payload);
                console.log(res);
        });
    }
}

const store = new AuthStore();
export default store;
