import Link from 'next/link'
import React from 'react'

export default function ProductGrid({title,description,price,image,id}) {
  return (
    <>
                                <div className="col-md-4 col-sm-6">
                                        <div className="thumbnail no-border no-padding">
                                            <div className="media">
                                                <Link className="media-link" href={`/detail/${id}`}>
                                                    <img src="assets/img/preview/shop/product-1c.jpg" alt=""/>
                                                    <span className="icon-view">
                                                        <strong><i className="fa fa-eye"></i></strong>
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="caption text-center">
                                                <h4 className="caption-title">{title}</h4>
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
                                                   <a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                                   <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    </>
  )
}
