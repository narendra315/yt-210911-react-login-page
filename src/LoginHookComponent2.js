import React, { useState } from 'react';

function LoginCompoent() {
    const [email, setEmail] = useState({ name: 'email', value: '', error: '' });
    const [password, setPassword] = useState({ name: 'password', value: '', error: '' });
    const [rememberMe, setRememberMe] = useState({ name: 'rememberMe', value: false, error: '' });

    const onChange = (e, onInputChange) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name !== email.name && name !== password.name) {
            value = e.target.checked;
        }

        // onInputChange({ name, value, error: '' })
        onInputChange(prevState => {
            return { ...prevState, value }
        })
    }

    const validateForm = () => {
        let status = true;
        if (email.value.length === 0) {
            status = false;
            setEmail(prevState => { return { ...prevState, error: 'Email is mandatory field' } })
        } else {
            setEmail(prevState => { return { ...prevState, error: '' } })
        }

        if (password.value.length === 0) {
            status = false;
            setPassword(prevState => { return { ...prevState, error: 'Password is mandatory field' } })
        } else {
            setPassword(prevState => { return { ...prevState, error: '' } })
        }
        return status;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formValidationStatus = validateForm();
        if (formValidationStatus) {
            const model = {
                email: email.value,
                password: password.value,
                rememberMe: rememberMe.value
            };
            console.log(model);
        }
    }

    return (
        <form onSubmit={onSubmit} style={{ margin: 'auto', width: '50%', padding: 100 }}>
            <h3>Simple Form with Hooks and validation</h3>
            <div>
                <label>Email *</label><br />
                <input
                    type="email"
                    name={email.name}
                    value={email.value}
                    onChange={e => onChange(e, setEmail)}
                />
                <div style={{ color: 'red' }}>
                    {email.error.length > 0 && email.error}
                </div>
            </div><br />
            <div>
                <label>Password *</label><br />
                <input
                    type="password"
                    name={password.name}
                    value={password.value}
                    onChange={e => onChange(e, setPassword)}
                />
                <div style={{ color: 'red' }}>
                    {password.error.length > 0 && password.error}
                </div>
            </div><br />
            <div>
                <label>
                    <input
                        type="checkbox"
                        name={rememberMe.name}
                        onChange={e => onChange(e, setRememberMe)}
                        checked={rememberMe.value}
                    />
                    Remember me
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default LoginCompoent;