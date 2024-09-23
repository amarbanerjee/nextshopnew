import React from 'react'

export default function Modal() {
  return (
    <div className="modal fade popup-cart" id="popup-cart" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="container">
                        <div className="cart-items">
                            <div className="cart-items-inner">
                                <div className="media">
                                    <a className="pull-left" href="#"><img className="media-object item-image" src="assets/img/preview/shop/order-1s.jpg" alt="" /></a>
                                    <p className="pull-right item-price">$450.00</p>
                                    <div className="media-body">
                                        <h4 className="media-heading item-title"><a href="#">1x Standard Product</a></h4>
                                        <p className="item-desc">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <p className="pull-right item-price">$450.00</p>
                                    <div className="media-body">
                                        <h4 className="media-heading item-title summary">Subtotal</h4>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <div>
                                            <a href="#" className="btn btn-theme btn-theme-dark" data-dismiss="modal">Close</a><a href="shopping-cart.html" className="btn btn-theme btn-theme-transparent btn-call-checkout">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
