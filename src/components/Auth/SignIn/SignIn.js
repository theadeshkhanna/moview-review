import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './SignIn.css';

@inject('AuthStore')
@observer
class SignIn extends Component {

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.props.AuthStore.signIn(e, this.props)} className={classes.SignIn}>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
