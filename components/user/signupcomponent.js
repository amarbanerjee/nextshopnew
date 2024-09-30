import { useState, useRef, useContext  } from 'react';
import { Formik } from 'formik';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NotificationContext from '@/store/notification-context';

async function createUser(email, password,username) {

  console.log("Sendeing Username",username);

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


export default function SignupComponent() {

    const [isSubmitting,setSubmitting] = useState(false);
    const toast = useToast();
  
  const notificationCtx = useContext(NotificationContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();


  return (
    <>
      <section className="page-section color">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="block-title"><span>Sign Up</span></h3>


     <Formik
        
       initialValues={{ email: '', name: '',password:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if(!values.name)
         {
            errors.name = 'Required';
         }
         else if(values.name.length<5)
         {
            errors.name = 'Full Name Should be 5 charecter minimum';
         }

         if(!values.password)
            {
               errors.password = 'Required';
            }
            else if(values.password.length<7)
                {
                   errors.password = 'Password Should be 7 charecter minimum';
                }

        
         return errors;
       }}
       onSubmit={ async (values, actions) =>  {
        setSubmitting(true);
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredUsername = usernameInputRef.current.value;

    // optional: Add validation

    
      try {
        
        const result = await createUser(enteredEmail, enteredPassword,enteredUsername);
        console.log(result);

        toast({
            title: 'You have successfully signedup..',
            description: "We have received your Signup information.Please check your e-mail.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });

        router.replace('/user/auth/');
      } catch (error) {
        toast({
            title: 'Error in Signup Process',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        console.log(error);
      }
   
        
        

        actions.resetForm({ email: '', name: '',subject:'',message:'' });
        setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         resetForm
         /* and other goodies */
       }) => (
                                <form onSubmit={handleSubmit} className="form-login">
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
                                            <div className="form-group">
                                                <input className="form-control" type="text" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name} 
                                                placeholder="Your Full Name" 
                                                id='username'
                                                name='name' 
                                                ref={usernameInputRef} />
                                                 {errors.name && touched.name && errors.name}
                                                </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <input className="form-control" type="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} 
                                            id='email'
                                            name='email'
                                            placeholder="User name or email"  ref={emailInputRef} />

                                            {errors.email && touched.email && errors.email}
                                            
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                              <input className="form-control" type="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password} 
                                            id='password'
                                            name='password'
                                            placeholder="Your password" ref={passwordInputRef} />
                                              {errors.password && touched.password && errors.password}
                                            </div>
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
                                        <button  disabled={isSubmitting} className="form-button form-button-submit btn btn-theme btn-theme-dark" id="submit_btn" type="submit"> Sign Up </button>
                                        {isSubmitting && <p>Data is submitting...</p>}
                                        </div>
                                    </div>
                                </form>
                                 )}
                            </Formik>
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
