import React, { Component } from 'react';
import classes from './SignUp.css';
import { observer, inject } from 'mobx-react';

@inject('AuthStore')
@observer
class SignUp extends Component {

    handleSubmit(e) {
        e.preventDefault();

        this.props.AuthStore.name = e.target.name.value;
        this.props.AuthStore.email = e.target.email.value;
        this.props.AuthStore.password = e.target.password.value;
        this.props.AuthStore.signUp(this.props);
        e.target.email.value = '';
        e.target.password.value = '';
        e.target.name.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className={classes.SignUp}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
