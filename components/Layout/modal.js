import { React, useContext } from 'react'
import CartContext from "@/context/CartContext";
import Link from 'next/link';

export default function Modal() {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  return (
    <div className="modal fade popup-cart" id="popup-cart" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="container">
                    {cart?.cartItems?.length > 0 && (   
                        <div className="cart-items">
                            <div className="cart-items-inner">
                            
                             
                             {cart?.cartItems?.map((cartItem) => (
                                <div className="media">
                                    <a className="pull-left" href="#"><img className="media-object item-image" src="assets/img/preview/shop/order-1s.jpg" alt="" /></a>
                                    <p className="pull-right item-price">${cartItem.price}</p>
                                    <div className="media-body">
                                        <h4 className="media-heading item-title"><a href="#">{cartItem.quantity} x {cartItem.name}</a></h4>
                                        <p className="item-desc">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                             ))}
                           

                                <div className="media">
                                    <p className="pull-right item-price">$450.00</p>
                                    <div className="media-body">
                                        <h4 className="media-heading item-title summary">Subtotal</h4>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <div>
                                            <a href="#" className="btn btn-theme btn-theme-dark" data-dismiss="modal">Close</a><Link href="/user/cart-details" className="btn btn-theme btn-theme-transparent btn-call-checkout">Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
  )
}
