import React from 'react';
import 'animate.css';
import 'hover.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
    this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
    this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
    this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
            }
        })
    }

    /** RENDER **/
    render() {
        return(
            <div className="p-3 animate__animated animate__backInUp">
                <div className="card">
                    <div className="card-body">
                        <fieldset id="sign_up">
                            <legend>Register to Smart Brain</legend>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange}
                                />
                            </div>
                            <div className="">
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
                                value= "Register"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Register;