import React, { useState } from 'react';

function LoginCompoent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const model = { email, password, rememberMe };
        console.log(model);
    }

    return (
        <form onSubmit={onSubmit} style={{ margin: 'auto', width: '50%', padding: 100 }}>
            <h3>Simple Form with Hooks</h3>
            <div>
                <label>Email *</label><br />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div><br />
            <div>
                <label>Password *</label><br />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div><br />
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={e => setRememberMe(e.target.checked)}
                        checked={rememberMe}
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