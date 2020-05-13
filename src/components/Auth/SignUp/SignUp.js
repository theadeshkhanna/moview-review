import React, { Component } from 'react';
import classes from './SignUp.css';
import { observer, inject } from 'mobx-react';

@inject('AuthStore')
@observer
class SignUp extends Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.AuthStore.signUp(e, this.props)} className={classes.SignUp}>
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
