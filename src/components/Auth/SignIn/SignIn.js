import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import classes from './SignIn.css';
import Spinner from "../../UI/Spinner/Spinner";

@inject('AuthStore')
@observer
class SignIn extends Component {
    render() {

        let signin = null;

        if (this.props.AuthStore.isloading === false) {
            signin = (
                <div>
                    <form onSubmit={(e) => this.props.AuthStore.signIn(e, this.props)} className={classes.SignIn}>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <Spinner />
                        <button>submit</button>
                    </form>
                </div>
            );
        } else {
            signin = (
                <div>
                    <form onSubmit={(e) => this.props.AuthStore.signIn(e, this.props)} className={classes.SignIn}>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button>submit</button>
                    </form>
                </div>
            );
        }

        return signin;
    }
}

export default SignIn;
