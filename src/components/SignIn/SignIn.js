import React from 'react';
import 'animate.css';
import 'hover.css';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
            }
        })
    }

    /** RENDER **/
    render() {
        const { onRouteChange } = this.props;
        return(
            <div className="p-3 animate__animated animate__backInUp">
                <div className="card">
                    <div className="card-body">
                        <fieldset id="sign_up">
                            <legend>Sign In to Smart Brain</legend>
                            <div>
                                <label htmlFor="email-address">Email</label>
                                <input type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className=""
                                type="submit"
                                value= "Sign In"
                            />
                        </div>
                        <div className="">
                         <p onClick={() => onRouteChange('register')} className="">Register</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default SignIn;