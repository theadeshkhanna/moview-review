import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './SignIn.css';
import Spinner from "../../UI/Spinner/Spinner";

@inject('AuthStore')
@observer
class SignIn extends Component {

    state = {
      exists: false,
      message: 'Please fill details then submit'
    };

    handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === '' || password === ''|| (email === '' && password === '')) {
            this.setState({
               exists: true
            });
        } else {
            const payload = {
                "email" : email,
                "password" : password
            };

            this.props.AuthStore.signIn(payload, this.props);
        }
    };

    render() {

        let signin = null;

        if (this.props.AuthStore.isloading === false) {
            signin = <div className={classes.Centre}><Spinner /></div>;
        } else {
            signin = (
                <div>
                    <form onSubmit={(e) => this.handleSignIn(e)} className={classes.SignIn}>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button>submit</button>
                    </form>
                    <p className={classes.Error}>{this.state.exists ? this.state.message : null}</p>
                    <p className={classes.Error}>{this.props.AuthStore.error ? this.props.AuthStore.error : null}</p>
                    <img  src={require("../../../assets/sign_in.png")} alt="sign in" className={classes.Back}/>
                </div>
            );
        }

        return signin;
    }
}

export default SignIn;
