import React from 'react';

class LoginCompoent extends React.Component {
    constructor() {
        super();
        this.state = {
            email: { name: 'email', value: '', error: '' },
            password: { name: 'password', value: '', error: '' },
            rememberMe: { name: 'rememberMe', value: false, error: '' },
        }
    }

    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <form onSubmit={this.onSubmit} style={{ margin: 'auto', width: '50%' }}>
                <h3>Login Component with object</h3>
                <div>
                    <label>Email *</label>
                    <br />
                    <input
                        placeholder="Please enter your email"
                        type="email"
                        name={email.name}
                        value={email.value}
                        onChange={this.onChange}
                    />
                    <div style={{ color: 'red' }}>
                        {email.error.length > 0 && email.error}
                    </div>
                </div>
                <br />
                <div>
                    <label>Password *</label>
                    <br />
                    <input
                        placeholder="Please enter your password"
                        type="password"
                        name={password.name}
                        value={password.value}
                        onChange={this.onChange}
                    />
                    <div style={{ color: 'red' }}>
                        {password.error.length > 0 && password.error}
                    </div>
                </div>
                <br />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name={rememberMe.name}
                            checked={rememberMe.value}
                            onChange={this.onChange}
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

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name !== this.state.email.name && name !== this.state.password.name) {
            value = e.target.checked;
        }

        this.setState({ [name]: { ...this.state[name], value } });
    }

    validateForm = () => {
        const { email, password } = this.state;

        let status = true;
        if (email.value.length === 0) {
            status = false;
            this.setState({ email: { ...email, error: 'Please enter a valid value' } })
        } else {
            this.setState({ email: { ...email, error: '' } })
        }

        if (password.value.length === 0) {
            status = false;
            this.setState({ password: { ...password, error: 'Please enter a valid value' } })
        } else {
            this.setState({ password: { ...password, error: '' } })
        }

        return status;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        if (validationStatus === true) {
            const { email, password, rememberMe } = this.state;
            const model = {
                email: email.value,
                password: password.value,
                rememberMe: rememberMe.value
            }
            console.log(model);
        }

    }
}

export default LoginCompoent;