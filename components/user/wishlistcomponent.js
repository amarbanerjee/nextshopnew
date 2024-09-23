import React from 'react'

export default function WishlistComponent() {
  return (
    <>
       <section className="page-section breadcrumbs">
                    <div className="container">
                        <div className="page-header">
                            <h1>Wishlist</h1>
                        </div>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
       </section>

       <section className="page-section color no-padding-bottom">
                    <div className="container">

                        <div className="row wishlist">
                            <div className="col-md-9">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="image"><a className="media-link" href="#"><i className="fa fa-plus"></i><img src="assets/img/preview/shop/order-1.jpg" alt=""/></a></td>
                                            <td className="description">
                                                <h4><a href="#">Standard Product Name Header Here</a></h4>
                                                by Category Name
                                            </td>
                                            <td className="price">$116.00</td>
                                            <td className="add"><a className="btn btn-theme btn-theme-dark btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i> Add to cart</a></td>
                                            <td className="total"><a href="#"><i className="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="image"><a className="media-link" href="#"><i className="fa fa-plus"></i><img src="assets/img/preview/shop/order-1.jpg" alt=""/></a></td>
                                            <td className="description">
                                                <h4><a href="#">Standard Product Name Header Here</a></h4>
                                                by Category Name
                                            </td>
                                            <td className="price">$116.00</td>
                                            <td className="add"><a className="btn btn-theme btn-theme-dark btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i> Add to cart</a></td>
                                            <td className="total"><a href="#"><i className="fa fa-close"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="image"><a className="media-link" href="#"><i className="fa fa-plus"></i><img src="assets/img/preview/shop/order-1.jpg" alt=""/></a></td>
                                            <td className="description">
                                                <h4><a href="#">Standard Product Name Header Here</a></h4>
                                                by Category Name
                                            </td>
                                            <td className="price">$116.00</td>
                                            <td className="add"><a className="btn btn-theme btn-theme-dark btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i> Add to cart</a></td>
                                            <td className="total"><a href="#"><i className="fa fa-close"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a className="btn btn-theme btn-theme-transparent btn-icon-left btn-continue-shopping" href="#"><i className="fa fa-shopping-cart"></i>Continue shopping</a>
                            </div>
                            <div className="col-md-3">
                                <h3 className="block-title"><span>Login</span></h3>
                                <form action="#" className="form-sign-in">
                                    <div className="row">
                                        <div className="col-md-12 hello-text-wrap">
                                            <span className="hello-text text-thin">Hello, welcome to your account</span>
                                        </div>
                                        <div className="col-md-12">
                                            <a className="btn btn-theme btn-block btn-icon-left facebook" href="#"><i className="fa fa-facebook"></i>Sign in with Facebook</a>
                                        </div>
                                        <div className="col-md-12">
                                            <a className="btn btn-theme btn-block btn-icon-left twitter" href="#"><i className="fa fa-twitter"></i>Sign in with Twitter</a>
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
                                        <div className="col-md-12">
                                            <a className="btn btn-theme btn-block btn-theme-dark" href="#">Login</a>
                                        </div>
                                        <div className="col-md-12">
                                            <a className="btn btn-theme btn-block btn-theme-transparent" href="#">Create account</a>
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
