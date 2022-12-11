import React from 'react';
import './Signin.css'
import LoadingSpinner from './LoadingSpinner.js'
export default function Signin(props) {
    
return (
        <div>
           <main className="pa4 black-80">
  <div className="signin-form measure center shadow-5">
    {props.loading && <LoadingSpinner />}
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
            onChange={props.handleChange} 
            className="input-class pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="email" 
            name="email"  
            id="email-address" 
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
            onChange={props.handleChange} 
            className="input-class b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="password"  
            id="password"
        />
      </div>
    </fieldset>
    <div className="">
      <input
        onClick={props.handleSignin} 
        className="signin-button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Log in"
    />
    </div>
    <div className="lh-copy mt3">
      <p 
      onClick={() => props.handleRouteChange('register')}
      className="signup-button f6 link grow white db">Register</p>
    </div>
  </div>
</main> 
        </div>
    )
}

