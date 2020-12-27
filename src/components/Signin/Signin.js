import { Component } from "react";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            password: ""
        }
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitSignIn = () => {
        fetch("https://zildev-smartbrain-api.herokuapp.com/signin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.emailAddress,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(userData => {
                if (userData.id) {
                    this.props.loadUser(userData);
                    this.props.onRouteChange("home");
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="emailAddress"
                                    id="email-address"
                                    onChange={this.onChange}
                                    value={this.state.emailAddress}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                />
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer">
                                <input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in" onClick={() => {
                                    // onRouteChange("home")
                                    this.onSubmitSignIn()
                                }}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db pointer" onClick={() => onRouteChange("register")}>Register</p>
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}
