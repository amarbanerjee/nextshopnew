import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3">
                                <div className="widget">
                                    <h4 className="widget-title">About Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin ultrices suscipit. Sed commodo vel mauris vel dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul className="social-icons">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget">
                                    <h4 className="widget-title">News Letter</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter Your Mail and Get $10 Cash"/>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-theme btn-theme-transparent">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget widget-categories">
                                    <h4 className="widget-title">Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Private Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget widget-tag-cloud">
                                    <h4 className="widget-title">Item Tags</h4>
                                    <ul>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Jeans</a></li>
                                        <li><a href="#">Top Sellers</a></li>
                                        <li><a href="#">E commerce</a></li>
                                        <li><a href="#">Hot Deals</a></li>
                                        <li><a href="#">Supplier</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Theme</a></li>
                                        <li><a href="#">Website</a></li>
                                        <li><a href="#">Isamercan</a></li>
                                        <li><a href="#">Themeforest</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-meta">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="copyright">Copyright 2014 BELLA SHOP   |   All Rights Reserved   |   Designed By Jthemes</div>
                            </div>
                            <div className="col-sm-6">
                                <div className="payments">
                                    <ul>
                                        <li><img src="assets/img/preview/payments/visa.jpg" alt=""/></li>
                                        <li><img src="assets/img/preview/payments/mastercard.jpg" alt=""/></li>
                                        <li><img src="assets/img/preview/payments/paypal.jpg" alt=""/></li>
                                        <li><img src="assets/img/preview/payments/american-express.jpg" alt=""/></li>
                                        <li><img src="assets/img/preview/payments/visa-electron.jpg" alt=""/></li>
                                        <li><img src="assets/img/preview/payments/maestro.jpg" alt=""/></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
  )
}
