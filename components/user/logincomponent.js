import { useState, useRef, useContext } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import NotificationContext from '@/store/notification-context';
import Button from '../ui/button';
import Link from 'next/link';


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

export default function LoginComponent() {

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
    <>
        <section className="page-section color">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="block-title"><span>Login</span></h3>
                                <form className="form-login" onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-md-12 hello-text-wrap">
                                            <span className="hello-text text-thin">Hello, welcome to your account</span>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <a className="btn btn-theme btn-block btn-icon-left facebook" href="#"><i className="fa fa-facebook"></i>Sign in with Facebook</a>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <a className="btn btn-theme btn-block btn-icon-left twitter" href="#"><i className="fa fa-twitter"></i>Sign in with Twitter</a>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group"><input className="form-control" type="email" placeholder="email" id='email' required ref={emailInputRef} /></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group"><input className="form-control" type="password" placeholder="Your password" id='password'
            required
            ref={passwordInputRef} /></div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="checkbox">
                                                <label><input type="checkbox" /> Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 text-right-lg">
                                            <a className="forgot-password" href="#">forgot password?</a>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-theme btn-block btn-theme-dark" href="#">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-6">
                                <h3 className="block-title"><span>Create New Account</span></h3>
                                <form action="#" className="create-account">
                                    <div className="row">
                                        <div className="col-md-12 hello-text-wrap">
                                            <span className="hello-text text-thin">Create Your Account on Bellashop</span>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="block-title">Signup Today and You'll be able to</h3>
                                            <ul className="list-check">
                                                <li>Online Order Status</li>
                                                <li>See Ready Hot Deals</li>
                                                <li>Love List</li>
                                                <li>Sign up to receive exclusive news and private sales</li>
                                                <li>Quick Buy Stuffs</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <Link className="btn btn-block btn-theme btn-theme-dark btn-create" href="/user/signup">Create Account</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </section>

        <section className="page-section">
                    <div className="container">
                        <div className="row blocks shop-info-banners">
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-gift"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Buy 1 Get 1</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-comments"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Call to Free</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-trophy"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Money Back!</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
      
    </>
  )
}
