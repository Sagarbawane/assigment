import React from "react";
import { connect } from "react-redux";

import { startLoginUser } from "../actions/userAction";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            login: false,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: this.state.email,
            password: this.state.password,
        };
        const redirect = () => {
            return this.props.history.push("/events");
        };
        this.props.dispatch(startLoginUser(formData, redirect));
    };
    render() {
        return (

            <div className='container'>

                <h2 >Login Form</h2>


                <form onSubmit={this.handleSubmit} >
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form  >
            </div>
        )
    }
}
export default connect()(Login);
