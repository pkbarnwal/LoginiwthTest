import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
        <h4>Sign up To join DateHelp</h4>
           <button  type='submit' className={classes.signWithGoogle}>SignIn with Google</button>
        <hr/>
        <p>OR</p>
      <form>
        <div className={classes.control}>
             <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
             <label htmlFor='username'>Username</label>
            <input type='username' id='username' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input type='password' id='confirm-password' required />
        </div>
        <div className={classes.control}>
        <label for="gender"> Select you gender</label>
           <select name="gender">
	            <option value="male">Male</option>
	            <option value="female">Female</option>
	          </select>
        </div>
        <div className={classes.actions}>
          <button type='button' className={classes.toggle}>
           Sign Up
          </button>
        </div>
      </form>
      {/* <div className={classes.authbottom}> */}
        <span className={classes.authBottom}>Already Have an Account <a href="/">Sign in at Here..</a></span>
      {/* </div> */}

    </section>
  );
};

export default AuthForm;
