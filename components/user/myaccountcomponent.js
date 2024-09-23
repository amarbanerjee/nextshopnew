import React from 'react'
import UserSidebar from './usersidebar'

export default function MyAccountComponent() {
  return (
                <section className="page-section">
                    <div className="wrap container">
                        <div className="row">
                            
                            
                            <UserSidebar />
                            
                            <div className="col-lg-9 col-md-9 col-sm-8">
                                <div className="information-title">My Account</div>
                                <div className="details-wrap">
                                    <div className="block-title alt"> <i className="fa fa-angle-down"></i> My Account</div>
                                    <div className="details-box">
                                        <ul>
                                            <li>                                                
                                                <a href="/user/myaccount/">Edit your account information</a>
                                            </li>
                                            <li>                                               
                                                <a href="/user/changepassword/">Change your password</a>
                                            </li>
                                            <li>                                              
                                                <a href="/user/addressbook/">Modify your address book entries</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="block-title alt"> <i className="fa fa-angle-down"></i> My Account</div>
                                    <div className="details-box">
                                        <ul>
                                            <li>
                                                <a href="/user/orderhistory/">View your order history</a>
                                            </li>
                                            <li>
                                                <a href="/user/reviews/">Your reviews and ratings</a>
                                            </li>
                                            <li>
                                                <a href="/user/return-request/">View your retun requests</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="block-title alt"> <i className="fa fa-angle-down"></i> Newsletter </div>
                                    <div className="details-box">
                                        <ul>
                                            <li>
                                                <a href="/user/newsletter/">Subscribe / unsubscribe to newsletter</a>
                                            </li>                                           
                                        </ul>
                                    </div>

                                </div>                                
                            </div>
                           

                           
                        </div>

                    </div>
                </section>
  )
}
