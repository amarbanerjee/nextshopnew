import Link from 'next/link'
import React from 'react'

export default function UserSidebar() {
  return (
    <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="widget account-details">
                                    <h2 className="widget-title">Account</h2>
                                    
                                    <ul>
                                        <li><Link href="/user/myaccount/"> Account Information </Link></li>
                                        <li className="active"><Link href="/user/myaccount/">My Accont</Link></li>                                        
                                        <li><Link href="/user/change-password/">Change Password</Link></li>
                                        <li><Link href="/user/addressbook/">Address Books</Link></li>
                                        <li><Link href="/user/order-history/">Order History</Link></li>
                                        <li><Link href="/user/reviews/">Reviews and Ratings</Link></li>
                                        <li><Link href="/user/return-request/">Returns Requests</Link></li>
                                        <li><Link href="/user/newsletter/">Newsletter</Link></li> 
                                    </ul>
                                </div>
                            </div>
  )
}
