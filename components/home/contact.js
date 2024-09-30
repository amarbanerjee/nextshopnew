import { useState, useRef, useContext, React } from "react";
import { Formik } from 'formik';
import { useToast } from '@chakra-ui/react'

export default function Contact() {

    

   const [isSubmitting,setSubmitting] = useState(false);
   const toast = useToast();

  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

    // const onSubmit = async (event) => {
    //     event.preventDefault();
        
    //     const enteredEmail = emailInputRef.current.value;
    //     const enteredName = nameInputRef.current.value;
    //     const enteredSubject = subjectInputRef.current.value;
    //     const enteredMessage = messageInputRef.current.value;

    //     const wdata = {name:enteredName, email:enteredEmail, subject:enteredSubject, message:enteredMessage};

    //     console.log("Sending Data",wdata);

    //     const response = await fetch('/api/contact_submit', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(wdata),
    //     })
     
    //     // Handle response if necessary
    //     const res = await response.json();
    //     console.log("Res",res);
    //     // ...
    //   }

  return (
    <>

                
                <section className="page-section breadcrumbs">
                    <div className="container">
                        <div className="page-header">
                            <h1>Contact</h1>
                        </div>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Contact Us</li>
                        </ul>
                    </div>
                </section>
                 

                  
                <section className="page-section color">
                    <div className="container">

                        <div className="row">

                            <div className="col-md-4">
                                <div className="contact-info">

                                    <h2 className="block-title"><span>Contact Us</span></h2>

                                    <div className="media-list">
                                        <div className="media">
                                            <i className="pull-left fa fa-home"></i>
                                            <div className="media-body">
                                                <strong>Address:</strong><br />
                                                987 Main st. New York, NY, 00001, U.S.A
                                            </div>
                                        </div>
                                        <div className="media">
                                            <i className="pull-left fa fa-phone"></i>
                                            <div className="media-body">
                                                <strong>Telephone:</strong><br />
                                                (012) 345-7689
                                            </div>
                                        </div>
                                        <div className="media">
                                            <i className="pull-left fa fa-envelope-o"></i>
                                            <div className="media-body">
                                                <strong>Fax:</strong><br />
                                                0123456789
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-body">
                                                Phasellus pellentesque purus in massa aenean in pede phasellus libero ac tellus pellentesque semper.
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-body">
                                                <strong>Customer Service:</strong><br />
                                                <a href="mailto:hello@bella.com">hello@bella.com</a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-body">
                                                <strong>Returns and Refunds:</strong><br />
                                                <a href="mailto:hello@bella.com">hello@bella.com</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8 text-left">

                                <h2 className="block-title"><span>Contact Form</span></h2>

                                 Contact form 

    <Formik
        
       initialValues={{ email: '', name: '',subject:'',message:'' }}
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

         if(!values.subject)
            {
               errors.subject = 'Required';
            }

        if(!values.message)
        {
            errors.message = 'Required';
        }
         return errors;
       }}
       onSubmit={ async (values, actions) =>  {
        setSubmitting(true);
        const enteredEmail = emailInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        alert("test"+isSubmitting);

        const wdata = {name:enteredName, email:enteredEmail, subject:enteredSubject, message:enteredMessage};

        console.log("Sending Data",wdata);

        const response = await fetch('/api/contact_submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(wdata),
        })
     
        // Handle response if necessary
        const res = await response.json();
        console.log("Res",res);
        
        toast({
            title: 'You have successfully contacted..',
            description: "We have received your information.We will getback to you soon.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
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
                                <form name="contact-form" onSubmit={handleSubmit} className="contact-form" id="contact-form">

                                    <div className="outer required">
                                        <div className="form-group af-inner">
                                            <label className="sr-only" htmlFor="name">Name</label>
                                            <input
                                                type="text" name="name" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                 id="name" placeholder="Name"
                                                className="form-control placeholder" ref={nameInputRef}/>

                                                {errors.name && touched.name && errors.name}
                                        </div>
                                    </div>

                                    <div className="outer required">
                                        <div className="form-group af-inner">
                                            <label className="sr-only" htmlFor="email">Email</label>
                                            <input
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                id="email" 
                                                placeholder="Email" 
                                                data-toggle="tooltip" title="Email is required"
                                                className="form-control placeholder" ref={emailInputRef}/>

                                            {errors.email && touched.email && errors.email}
                                        </div>
                                    </div>

                                    <div className="outer required">
                                        <div className="form-group af-inner">
                                            <label className="sr-only" htmlFor="subject">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.subject}
                                                id="subject" placeholder="Subject" 
                                                data-toggle="tooltip" title="Subject is required"
                                                className="form-control placeholder" ref={subjectInputRef}/>
                                                {errors.subject && touched.subject && errors.subject}
                                        </div>
                                    </div>

                                    <div className="form-group af-inner">
                                        <label className="sr-only" htmlFor="input-message">Message</label>
                                        <textarea
                                            name="message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            
                                            id="input-message" placeholder="Message" rows="4" cols="50"
                                            data-toggle="tooltip" title="Message is required"
                                            className="form-control placeholder" ref={messageInputRef}></textarea>

                                            {errors.message && touched.message && errors.message}
                                    </div>

                                    <div className="outer required">
                                        <div className="form-group af-inner">
                                        <button  disabled={isSubmitting} className="form-button form-button-submit btn btn-theme btn-theme-dark" id="submit_btn" type="submit"> Contact Us </button>
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
                
                  
                <section className="page-section no-padding no-bottom-space">
                    <div className="container full-width">

                         
                        <div className="google-map">
                            <div id="map-canvas"></div>
                        </div>
                        

                    </div>
                </section>
               

            </>
  )
}
