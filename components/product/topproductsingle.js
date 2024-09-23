import React from 'react'

export default function TopProductSingle({title,price,image,description}) {
  return (
    <>
    <div className="thumbnail no-border no-padding">
                    <div className="media">
                        <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg" >
                            <img src="assets/img/preview/shop/top-rated-2.jpg" alt="" />
                            <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                        </a>
                    </div>
                    <div className="caption text-center">
                        <h4 className="caption-title"><a href="product-details.html">{title}</a></h4>
                        <div className="rating">
                            <span className="star"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                        </div>
                        <div className="price"><ins>${price}</ins> <del>${price}</del></div>
                        <div className="buttons">
                            <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a>
                            <a className="btn btn-theme btn-theme-transparent" href="#">Add to Cart</a>
                            <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                        </div>
                    </div>
                </div>
                </>
  )
}
