import React, { Component } from 'react';
import classes from './SignUp.css';
import { observer, inject } from 'mobx-react';
import Spinner from "../../UI/Spinner/Spinner";

@inject('AuthStore')
@observer
class SignUp extends Component {

    HandleGoogle = () => {
        this.props.AuthStore.GoogleOauth();
    };

    render() {

        let signup = null;

        if (this.props.AuthStore.isloading === false) {
            signup = <Spinner />;
        } else {
            signup = (
                <div>
                    <form onSubmit={(e) => this.props.AuthStore.signUp(e, this.props)} className={classes.SignUp}>
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button>submit</button>
                    </form>
                    <button onClick={this.HandleGoogle}>Google</button>
                </div>
            );
        }

        return signup;
    }
}

export default SignUp;
