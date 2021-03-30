import React from 'react'

export const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
    return (
        <section className='login'>
            <div className="login__container">
                {
                    hasAccount ? (

                        <h2 className='login__title'>Вход</h2>
                    ) : (
                        <h2 className='login__title'>Регистрация</h2>
                    )
                }
                <label>User Name</label>
                <input type="text"
                       onFocus
                       required
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
                <p className='login__error-message'>{emailError}</p>
                <label>Password</label>
                <input type="text"
                       required
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <p className='login__error-message'>{passwordError}</p>
                <div className='btn__container'>
                    {
                        hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign in</button>
                                <p>Dont have a account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup}>Sign up</button>
                                <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}