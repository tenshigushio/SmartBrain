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
            <div className="d-flex justify-content-center p-5 animate__animated animate__backInUp">
                <div className="card w-50">
                    <div className="card-body">
                        <form>
                            <fieldset id="sign_up">
                                <legend>Register to Smart Brain</legend>
                                <div className="form-group row p-2">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input  className="form-control center"
                                                type="text"
                                                name="name"
                                                id="name"
                                                onChange={this.onNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row p-2">
                                    <label htmlFor="email-address" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input  className="form-control center"
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
                            <div className="d-flex justify-content-center p-3">
                                <input  className="btn btn-primary"
                                        onClick={this.onSubmitSignIn}
                                        type="submit"
                                        value= "Register"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Register;