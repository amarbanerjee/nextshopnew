import React from 'react'
import UserSidebar from './usersidebar'

export default function ReviewComponent() {
  return (
    <section className="page-section">
                    <div className="wrap container">
                        <div className="row">
                            
                            
                            <UserSidebar />

                            <div className="col-lg-9 col-md-9 col-sm-8">
                                <div className="information-title">Your Reviews and Ratings</div>
                                <div className="details-wrap">                                    
                                    <div className="details-box orders">
                                        <table className="table">                                            
                                            <tbody>
                                                <tr>
                                                    <td className="ratings">
                                                        <p> Review Product -</p>
                                                        <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                                        <div className="rating">
                                                            <span className="star"></span>
                                                            <span className="star "></span>
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                        </div>
                                                        <p>James Fikaru</p>
                                                        <p>Aug 25, 2014</p>
                                                    </td>
                                                    <td className="reviews">
                                                        <h2>Not Good, Not Bad</h2>
                                                        <p>It left colour at first wash. Got white at some places. Don't know how many times more I'll be able to wear it before it loses too much colour. </p>
                                                    </td>                                                                                                 
                                                </tr>       
                                                <tr>
                                                    <td className="ratings">
                                                        <p> Review Product -</p>
                                                        <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                                        <div className="rating">
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                            <span className="star active"></span>
                                                        </div>
                                                        <p>cary aliya</p>
                                                        <p>Aug 30, 2014</p>
                                                    </td>
                                                    <td className="reviews">
                                                        <h2>Stylish</h2>
                                                        <p>
                                                            Top is very fashionable and trendy. looks good when u pair it with black jeans and have formal look if u tug in.
                                                            i give 5 star for this.
                                                            <br />
                                                            as it is my favorite top and whenever i wear this i get noticed my most and get good complements by people. 
                                                        </p>
                                                    </td>                                                                                                 
                                                </tr>       
                                            </tbody>
                                        </table>                                       
                                    </div>
                                </div>                                
                            </div>

            </div>

                    </div>
    </section>
    
  )
}
