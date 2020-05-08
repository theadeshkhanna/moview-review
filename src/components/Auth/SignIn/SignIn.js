import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './SignIn.css';

@observer
@inject('AuthStore')
class SignIn extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.AuthStore.email = e.target.email.value;
        this.props.AuthStore.password = e.target.password.value;
        this.props.AuthStore.signIn();
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className={classes.SignIn}>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
