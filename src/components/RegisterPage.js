import React from 'react'
import { Link } from 'react-router-dom'
import '../hackweek.css'


export const RegisterPage = ()=> {

    return (
        <div className="text-center m-5-auto hackweek">
            <h2>Sign Up</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br />
                    <input type="text" name="first_name" required />
                </p>
                
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Re-enter Password</label><br />
                    <input type="password" name="password" requiredc />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
            

        </div>
    )

}
