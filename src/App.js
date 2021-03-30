import {useState, useEffect} from 'react'

import fire from './fire'
import {Login} from "./components/Login";
import './style.scss'
import {Candidate} from "./components/Candidate";


export const App = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleLogin = () => {
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError("Пользователь не найден")
                        break;
                    case 'auth/wrong-password':
                        setPasswordError("Неверный пароль")
                        break;
                }
            })
    }

    const handleSignup = () => {
        clearErrors()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError("Не верный формат Email!")
                        break;
                    case 'auth/weak-password':
                        setPasswordError('Длина пароля от 6 символов!')
                        break;
                }
            })
    }

    const handleLogout = () => {
        fire.auth().signOut()
    }

    const authListener = () => {
        fire
            .auth()
            .onAuthStateChanged(user => {
                    if (user) {
                        clearInputs()
                        setUser(user)
                    } else {
                        setUser('')
                    }
                }
            )
    }

    useEffect(() => {
        authListener()
    }, [])

    return (
        <div className="App">
            {
                user ? (
                    <Candidate handleLogout={handleLogout}/>
                ) : (
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                )
            }

        </div>
    );
}

