import React from 'react'

export const Candidate = ({handleLogout}) => {
    return(
        <section className='candidate'>
            <header>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </section>
    )
}