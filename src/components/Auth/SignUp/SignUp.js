import React, { Component } from 'react';
import classes from './SignUp.css';
import { observer, inject } from 'mobx-react';
import Spinner from "../../UI/Spinner/Spinner";

@inject('AuthStore')
@observer
class SignUp extends Component {

    state = {
        exists: false,
        message: 'Please fill details then submit'
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (name === '' //need to change (just added so that it can work for now)
            || email === ''
            || password === ''
            || confirmPassword === ''
            || (name === '' && email === '')
            || (name === '' && password === '')
            || (name === '' && confirmPassword === '')
            || (email === '' && password === '')
            || (email === '' && confirmPassword === '')
            || (password === '' && confirmPassword === '')
            || (name === '' && email === '' && password === '')
            || (name === '' && email === '' && confirmPassword === '')
            || (name === '' && password === '' && confirmPassword === '')
            || (email === '' && password === '' && confirmPassword === '')
            || (password !== confirmPassword)
        ) {
            this.setState({
                exists: true
            });
        } else {

            const payload = {
                "name" : name,
                "email" : email,
                "password" : password
            };

            this.props.AuthStore.signUp(payload, this.props);
        }

    };

    render() {

        let signup = null;

        if (this.props.AuthStore.isloading === false) {
            signup = <Spinner />;
        } else {
            signup = (
                <div>
                    <form onSubmit={(e) => this.handleSubmit(e)} className={classes.SignUp}>
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <input type="password" placeholder=" Confirm Password" name="confirmPassword"/>
                        <button>submit</button>
                    </form>
                    <p className={classes.Error}>{this.state.exists ? this.state.message : null}</p>
                    <p className={classes.Error}>{this.props.AuthStore.error ? this.props.AuthStore.error : null}</p>
                    <img  src={require("../../../assets/sign_up.png")} alt="sign in" className={classes.Back}/>
                </div>
            );
        }

        return signup;
    }
}

export default SignUp;
