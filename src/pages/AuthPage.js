import AuthForm from '../components/Auth/AuthForm';

import signupImage from '../image/image 16.png';
import classes from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={classes.signUp}> 
       <img className={classes.image} src={signupImage} alt='SignupImage'/>
       <AuthForm />
  </div>
  )
};

export default AuthPage;
