import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './SignIn.css';

@inject('AuthStore')
@observer
class SignIn extends Component {

    handleSubmit(e) {
        e.preventDefault();

        this.props.AuthStore.email = e.target.email.value;
        this.props.AuthStore.password = e.target.password.value;
        this.props.AuthStore.signIn(this.props);
        e.target.email.value = '';
        e.target.password.value = '';
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
