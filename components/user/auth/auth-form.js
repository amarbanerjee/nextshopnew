import { useState, useRef, useContext } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';


import classes from './auth-form.module.css';
import NotificationContext from '@/store/notification-context';

async function createUser(email, password,username) {

  

  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password,username }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    

    throw new Error(data.message || 'Something went wrong!');
  }

   return data;
}

function AuthForm() {
  const notificationCtx = useContext(NotificationContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        // set some auth state
        console.log("Login");
        router.replace('/');

        notificationCtx.showNotification({
          title: 'Successfully Login !!',
          message: 'Login Successful.',
          status: 'success',
        });
      }
      else{
        notificationCtx.showNotification({
          title: 'Error Login !!',
          message: result.error || 'Login failed.',
          status: 'error',
        });
      }
    } else {
      try {
        const enteredUsername = usernameInputRef.current.value;
        const result = await createUser(enteredEmail, enteredPassword,enteredUsername);
        console.log(result);

        notificationCtx.showNotification({
          title: 'Signing up...',
          message: 'Successfull Registering for the App.',
          status: 'success',
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>

        {!isLogin && <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' required ref={usernameInputRef} />
        </div>}

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
