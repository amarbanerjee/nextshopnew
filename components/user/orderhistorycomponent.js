import React from 'react'
import UserSidebar from './usersidebar'

export default function OrderHistoryComponent() {
  return (
    
    <section className="page-section">
    <div className="wrap container">
        <div className="row">
               <UserSidebar/>
            <div className="col-lg-9 col-md-9 col-sm-8">
                <div className="information-title">Your Order History</div>
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
                                    <th>Delivered on</th>
                                    <th></th>
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
                                    <td className="diliver-date"> 12th Dec'13 </td>
                                    <td className="order-status"><a href="return.html" className="btn btn-theme btn-theme-dark">Return Order</a> <a href="#" className="btn btn-theme btn-theme-dark">Re Order</a> </td>
                                </tr>
                                <tr>
                                    <td className="image"><a href="#" className="media-link"><i className="fa fa-plus"></i><img alt="" src="assets/img/preview/shop/order-1.jpg" /></a></td>
                                    <td className="quantity">x3</td>
                                    <td className="description">
                                        <h4><a href="#">Standard Product Name Header Here</a></h4>
                                        by Category Name
                                    </td>
                                    <td className="total">$250 </td>
                                    <td className="order-id"> OD31207 </td>
                                    <td className="diliver-date"> 12th Dec'13 </td>
                                    <td className="order-status"><a href="return.html" className="btn btn-theme btn-theme-dark">Return Order</a> <a href="#" className="btn btn-theme btn-theme-dark">Re Order</a> </td>
                                </tr>
                                <tr>
                                    <td className="image"><a href="#" className="media-link"><i className="fa fa-plus"></i><img alt="" src="assets/img/preview/shop/order-1.jpg" /></a></td>
                                    <td className="quantity">x3</td>
                                    <td className="description">
                                        <h4><a href="#">Standard Product Name Header Here</a></h4>
                                        by Category Name
                                    </td>
                                    <td className="total">$350 </td>
                                    <td className="order-id"> OD31207 </td>
                                    <td className="diliver-date"> 12th Dec'13 </td>
                                    <td className="order-status">  <span className="return-request"> You requested <br />this order for return </span> <a href="#" className="btn btn-theme btn-theme-dark">Re Order</a> </td>
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
