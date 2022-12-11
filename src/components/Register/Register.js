import React from 'react';
import '../Signin/Signin.css'
export default function Register(props) {
    return (
        <div>
           <main className="pa4 black-80">
  <div className="signin-form measure center shadow-5">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input
            onChange = {props.handleChange} 
            className="input-class pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="name" 
            name="name"  
            id="name" 
        />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
            onChange = {props.handleChange} 
            className="input-class pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="email" 
            name="email"  
            id="email-address" 
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
            onChange = {props.handleChange} 
            className="input-class b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="password"  
            id="password"
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
        <input 
            onChange = {props.handleChange}
            className="input-class b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            type="password" 
            name="confirmPassword"  
            id="confirm-password"
        />
      </div>
    </fieldset>
    <div className="">
      <input
        onClick={props.handleRegister} 
        className="signin-button b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="button" 
        value="Register and Log in"
    />
    </div>
  </div>
</main> 
        </div>
    )
}