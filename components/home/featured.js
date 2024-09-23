import React from 'react'

export default function Featured() {
  return (
    <>
    <section className="page-section">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="thumbnail no-border no-padding thumbnail-banner size-1x3">
                    <div className="media">
                        <a className="media-link" href="#">
                            <div className="img-bg" style={{backgroundImage : `url('assets/img/preview/shop/banner-1.jpg')` }}></div>
                            <div className="caption">
                                <div className="caption-wrapper div-table">
                                    <div className="caption-inner div-cell">
                                        <h2 className="caption-title"><span>Lorem Ipsum</span></h2>
                                        <h3 className="caption-sub-title"><span>Dolor Sir Amet Percpectum</span></h3>
                                        <span className="btn btn-theme btn-theme-sm">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="thumbnail no-border no-padding thumbnail-banner size-1x3">
                    <div className="media">
                        <a className="media-link" href="#">
                            <div className="img-bg" style={{backgroundImage: `url('assets/img/preview/shop/banner-2.jpg')` }}></div>
                            <div className="caption text-right">
                                <div className="caption-wrapper div-table">
                                    <div className="caption-inner div-cell">
                                        <h2 className="caption-title"><span>Lorem Ipsum</span></h2>
                                        <h3 className="caption-sub-title"><span>Dolor Sir Amet Percpectum</span></h3>
                                        <span className="btn btn-theme btn-theme-sm">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="page-section">
    <div className="container">

        <div className="tabs">
            <ul id="tabs" className="nav nav-justified-off">
              <li className=""><a href="#tab-1" data-toggle="tab">Featured</a></li>
              <li className="active"><a href="#tab-2" data-toggle="tab">Newest</a></li>
              <li className=""><a href="#tab-3" data-toggle="tab">Top Sellers</a></li>
            </ul>
        </div>

        <div className="tab-content">

            
            <div className="tab-pane fade" id="tab-1">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-3.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a>
                                    <a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                    <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-4.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a>
                                    <a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                    <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-1.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a>
                                    <a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                                    <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-2.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="tab-pane fade active in" id="tab-2">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-1.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-2.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-3.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-4.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="tab-pane fade" id="tab-3">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-2.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-3.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-4.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="thumbnail no-border no-padding">
                            <div className="media">
                                <a className="media-link" data-gal="prettyPhoto" href="assets/img/preview/shop/product-1-big.jpg">
                                    <img src="assets/img/preview/shop/product-1.jpg" alt=""/>
                                    <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                                </a>
                            </div>
                            <div className="caption text-center">
                                <h4 className="caption-title"><a href="product-details.html">Standard Product Header</a></h4>
                                <div className="rating">
                                    <span className="star"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span><span className="star active"></span>
                                </div>
                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                <div className="buttons">
                                    <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a><a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a><a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
</>
  )
}
