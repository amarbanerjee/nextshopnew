import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function HeroSlider() {
  return (
    <section className="page-section no-padding slider">
    <div className="container full-width">

        <div className="main-slider">
            <div >

            <Carousel>
            <div className="item slide1">
                    <img className="slide-img" src="assets/img/preview/slider/slide-1.jpg" alt=""/>
                    <div className="caption">
                        <div className="container">
                            <div className="div-table">
                                <div className="div-cell">
                                    <div className="caption-content">
                                        <h2 className="caption-title">The Biggest</h2>
                                        <h3 className="caption-subtitle">Sale</h3>
                                        <p className="caption-text">
                                            <a className="btn btn-theme" href="#">Shop Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item slide2 alt">
                    <img className="slide-img" src="assets/img/preview/slider/slide-2.jpg" alt=""/>
                    <div className="caption">
                        <div className="container">
                            <div className="div-table">
                                <div className="div-cell">
                                    <div className="caption-content">
                                        <h2 className="caption-title">New Arrivals On Sale</h2>
                                        <h3 className="caption-subtitle"><span>Summer Collection</span></h3>
                                        <div className="price">
                                            <span>$</span><ins>49</ins>
                                            <span>$</span><del>86</del>
                                        </div>
                                        <p className="caption-text">
                                            <a className="btn btn-theme" href="#">Shop this item Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item slide3 dark">
                    <img className="slide-img" src="assets/img/preview/slider/slide-3.jpg" alt=""/>
                    <div className="caption">
                        <div className="container">
                            <div className="div-table">
                                <div className="div-cell">
                                    <div className="caption-content">
                                        <h2 className="caption-title">New Arrivals On Sale</h2>
                                        <h3 className="caption-subtitle"><span>Summer Collection</span></h3>
                                        <p className="caption-text">
                                            <a className="btn btn-theme" href="#">Shop this item Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
                
                
                

            </div>
        </div>

    </div>
</section>
  )
}
