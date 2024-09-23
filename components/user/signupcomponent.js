import React from 'react'

export default function SignupComponent() {
  return (
    <>
      <section className="page-section color">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="block-title"><span>Sign Up</span></h3>
                                <form action="#" className="form-login">
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
                                            <div className="form-group"><input className="form-control" type="text" placeholder="Your Full Name" /></div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group"><input className="form-control" type="text" placeholder="User name or email" /></div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group"><input className="form-control" type="password" placeholder="Your password" /></div>
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
                                            <button type='submit' className="btn btn-theme btn-block btn-theme-dark" href="#">Sign Up</button>
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
                                            <a className="btn btn-block btn-theme btn-theme-dark btn-create" href="#">Create Account</a>
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
