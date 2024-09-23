import React from 'react'
import UserSidebar from './usersidebar'

export default function ReturnComponent() {
  return (
    
    <section className="page-section">
                    <div className="wrap container">
                        <div className="row">
                        <UserSidebar />
                            
                            <div className="col-lg-9 col-md-9 col-sm-8">
                                <div className="information-title">Return Requests</div>
                                <div className="details-wrap">                                    
                                    <div className="details-box orders">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Qty</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Order ID</th>
                                                    <th>Status</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="image"><a href="#" className="media-link"><i className="fa fa-plus"></i><img alt="" src="assets/img/preview/shop/order-1.jpg" /></a></td>
                                                    <td className="quantity">x3</td>
                                                    <td className="description">
                                                        <h4><a href="#">Standard Product Name Header Here</a></h4>
                                                        by Category Name
                                                    </td>
                                                    <td className="total">$150 </td>
                                                    <td className="order-id"> OD31207 </td>
                                                    <td className="status"> Return </td>                                                    
                                                </tr>                                                
                                            </tbody>
                                        </table>

                                        <div>
                                            <a href="accountinformation.html" className="btn btn-theme"> Back To Account </a>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                                                      
                        </div>
                    </div>
                </section>
    
  )
}
