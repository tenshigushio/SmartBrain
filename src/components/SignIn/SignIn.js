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
            <div className="d-flex justify-content-center p-5 animate__animated animate__backInUp">
                <div className="card w-50">
                    <div className="card-body">
                        <form>
                            <fieldset id="sign_up">
                                <legend>Sign In to Smart Brain</legend>
                                <div className="form-group row p-2">
                                    <label htmlFor="email-address" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input className="form-control center"
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                                onChange={this.onEmailChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input  className="form-control center"
                                                type="password"
                                                name="password"
                                                id="password"
                                                onChange={this.onPasswordChange}
                                        />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <div className="d-flex justify-content-center p-3">
                            <div className="hvr-grow-rotate">
                                <input className="btn btn-primary"
                                    onClick={this.onSubmitSignIn}
                                    type="submit"
                                    value= "Sign In"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-2">
                            <p onClick={() => onRouteChange('register')} className="hvr-grow cursor-pointer"><u>Register</u></p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default SignIn;