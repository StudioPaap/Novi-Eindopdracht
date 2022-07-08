import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
    // state voor het formulier
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(['']);

    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory()
    const source = axios.CancelToken.source();


    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(data) {
        console.log(data)
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email: email,
                password: password,
                username: username,
                role: role,
            }, {
                cancelToken: source.token,
            });

            // als alles goed gegaan is, linken we door naar de login-pagina
            history.push('/inlog');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }


    return (
        <>
            <h1>Registreren</h1>

            <form onBlur={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="buttonrow">
                        <label htmlFor="Role-button">
                            <input type="radio"
                                   id="Role-button"
                                   value="user"
                                   onChange={(e) => setRole(e.target.value)}
                            />
                            <div className="box">
                                <span>Projectmanager</span>
                            </div>
                        </label>

                        <label htmlFor="Role-button2">
                            <input type="radio"
                                   id="Role-button2"
                                   value="admin"
                                   onChange={(e) => setRole(e.target.value)}
                            />
                            <div className="box">
                                <span>Studio</span>
                            </div>
                        </label>


                    </div>
                </label>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </button>

            </form>

            <p>Heb je al een account? Je kunt je <Link to="/inlog">hier</Link> inloggen.</p>
        </>
    );
}

export default RegisterPage;


