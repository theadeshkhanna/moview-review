import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

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
                <br />
                <br />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" placeholder="email" name="email"/>
                    <br />
                    <input type="password" placeholder="password" name="password"/>
                    <br />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
