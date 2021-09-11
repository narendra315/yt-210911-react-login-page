import React from 'react';

class LoginCompoent extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            rememberMe: false
        }
    }

    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <form onSubmit={this.onSubmit} style={{ margin: 'auto', width: '50%' }}>
                <h3>Login Component</h3>
                <div>
                    <label>Email *</label>
                    <br />
                    <input
                        placeholder="Please enter your email"
                        type="email"
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>Password *</label>
                    <br />
                    <input
                        placeholder="Please enter your password"
                        type="password"
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={e => this.setState({ rememberMe: e.target.checked })}
                        />
                        Remember me?
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

    validateForm = () => {
        const { email, password } = this.state;

        let status = true;
        if (email.length === 0) {
            status = false;
        }
        if (password.length === 0) {
            status = false;
        }
        return status;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        if (validationStatus === false) {
            alert('Please fill all the required fields');
        }
        console.log(this.state);
    }
}

export default LoginCompoent;