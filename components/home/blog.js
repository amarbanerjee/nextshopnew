import React from 'react'

export default function BlogComponent() {
  return (
    <>
     <section className="page-section breadcrumbs">
                    <div className="container">
                        <div className="page-header">
                            <h1>Blog Post Page</h1>
                        </div>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Blog With Left Sidebar</li>
                        </ul>
                    </div>
                </section>

                <section className="page-section with-sidebar">
                    <div className="container">
                        <div className="row">
                             SIDEBAR 
                            <aside className="col-md-3 sidebar" id="sidebar">
                                 widget search 
                                <div className="widget">
                                    <div className="widget-search">
                                        <input className="form-control" type="text" placeholder="Search" />
                                        <button><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                                 /widget search 
                                 widget shop categories 
                                <div className="widget shop-categories">
                                    <h4 className="widget-title">Categories</h4>
                                    <div className="widget-content">
                                        <ul>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">Woman</a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sweaters & Knits
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jackets & Coats
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Denim
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pants
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">Man</a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sweaters & Knits
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jackets & Coats
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Denim
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pants
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">Dress</a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sweaters & Knits
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jackets & Coats
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Denim
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pants
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">Top Sellers</a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sweaters & Knits
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jackets & Coats
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Denim
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pants
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-up"></i></span>
                                                <a href="#">Accessories</a>
                                                <ul className="children active">
                                                    <li>
                                                        <a href="#">Sweaters & Knits
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jackets & Coats
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Denim
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pants
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shorts
                                                            <span className="count">12</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Sale Off</a></li>
                                        </ul>
                                    </div>
                                </div>
                                 /widget shop categories 
                                 widget tabs 
                                <div className="widget widget-tabs alt">
                                    <div className="widget-content">
                                        <ul id="tabs" className="nav nav-justified">
                                            <li><a href="#tab-s1" data-toggle="tab">Recent posts</a></li>
                                            <li className="active"><a href="#tab-s2" data-toggle="tab">Popular post</a></li>
                                        </ul>
                                        <div className="tab-content">
                                             tab 1 
                                            <div className="tab-pane fade" id="tab-s1">
                                                <div className="recent-post">
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-3w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-1w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-2w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                             tab 2 
                                            <div className="tab-pane fade in active" id="tab-s2">
                                                <div className="recent-post">
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-1w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-2w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <a className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/blog/recent-post-3w.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="media-meta">
                                                                6th June 2014
                                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                                                            </div>
                                                            <h4 className="media-heading"><a href="#">Standard Blog Post Header</a></h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <a className="btn btn-theme btn-theme-transparent btn-theme-sm btn-block" href="#">More Products</a>
                                    </div>
                                </div>
                                 /widget tabs 
                                 widget archives 
                                <div className="widget shop-categories">
                                    <h4 className="widget-title">Archives</h4>
                                    <div className="widget-content">
                                        <ul>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">January<span className="count">12</span></a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">February<span className="count">12</span></a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">March<span className="count">12</span></a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-down"></i></span>
                                                <a href="#">April<span className="count">12</span></a>
                                                <ul className="children">
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="arrow"><i className="fa fa-angle-up"></i></span>
                                                <a href="#">May<span className="count">12</span></a>
                                                <ul className="children active">
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sample Post Name</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                 /widget archive 
                                 widget flickr feed 
                                <div className="widget widget-flickr-feed">
                                    <a className="btn btn-theme btn-title-more" href="#">See All</a>
                                    <h4 className="widget-title"><span>Flickr Images</span></h4>
                                    <ul>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-8.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-9.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-10.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-11.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-12.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-13.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-14.jpg" alt="//" /></a></li>
                                        <li><a href="#"><img src="assets/img/preview/flickr/flickr-feed-15.jpg" alt="//" /></a></li>
                                    </ul>
                                </div>
                                 /widget flickr feed 
                                 widget tag cloud 
                                <div className="widget widget-tag-cloud">
                                    <a className="btn btn-theme btn-title-more" href="#">See All</a>
                                    <h4 className="widget-title"><span>Tags</span></h4>
                                    <ul>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Jeans</a></li>
                                        <li><a href="#">Top Sellers</a></li>
                                        <li><a href="#">E commerce</a></li>
                                        <li><a href="#">Hot Deals</a></li>
                                        <li><a href="#">Supplier</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Theme</a></li>
                                        <li><a href="#">Website</a></li>
                                        <li><a href="#">Isamercan</a></li>
                                        <li><a href="#">Themeforest</a></li>
                                    </ul>
                                </div>
                                 /widget tag cloud 
                                 widget 
                                <div className="widget">
                                    <a className="btn btn-theme btn-title-more btn-icon-left" href="#"><i className="fa fa-twitter"></i>Follow Us</a>
                                    <h4 className="widget-title"><span>Twitter</span></h4>
                                    <div className="recent-tweets">
                                        <div className="media">
                                            <span className="media-object pull-left"><i className="fa fa-twitter"></i></span>
                                            <div className="media-body">
                                                <p><a href="#">@twittername</a> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                <small>1 minute ago</small>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <span className="media-object pull-left"><i className="fa fa-twitter"></i></span>
                                            <div className="media-body">
                                                <p><a href="#">@twittername</a> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                <small>1 minute ago</small>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <span className="media-object pull-left"><i className="fa fa-twitter"></i></span>
                                            <div className="media-body">
                                                <p><a href="#">@twittername</a> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                <small>1 minute ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 /widget 
                            </aside>
                             /SIDEBAR 
                             CONTENT 
                            <div className="col-md-9 content" id="content">

                                 Blog posts 
                                <article className="post-wrap">
                                    <div className="post-media">
                                        <a href="assets/img/preview/blog/blog-post-1.jpg" data-gal="prettyPhoto"><img src="assets/img/preview/blog/blog-post-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="#">Sample Post With Featured Image</a></h2>
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-excerpt">
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. In posuere odio sed libero tincidunt commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem in, malesuada nunc. Etiam condimentum felis odio, vel mollis est tempor non...</p>
                                        </div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>
                                 / 
                                <article className="post-wrap">
                                    <div className="post-media">
                                        <div className="owl-carousel img-carousel">
                                            <div className="item"><a href="assets/img/preview/blog/blog-post-2.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="assets/img/preview/blog/blog-post-2.jpg" alt=""/></a></div>
                                            <div className="item"><a href="assets/img/preview/shop/blog-post-3.html" data-gal="prettyPhoto"><img className="img-responsive" src="assets/img/preview/blog/blog-post-3.jpg" alt=""/></a></div>
                                            <div className="item"><a href="assets/img/preview/shop/blog-post-4.html" data-gal="prettyPhoto"><img className="img-responsive" src="assets/img/preview/blog/blog-post-4.jpg" alt=""/></a></div>
                                            <div className="item"><a href="assets/img/preview/shop/blog-post-1.html" data-gal="prettyPhoto"><img className="img-responsive" src="assets/img/preview/blog/blog-post-1.jpg" alt=""/></a></div>
                                        </div>
                                    </div>
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="#">Standard Blog Post with Image Slider Header</a></h2>
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-excerpt">
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. In posuere odio sed libero tincidunt commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem in, malesuada nunc. Etiam condimentum felis odio, vel mollis est tempor non...</p>
                                        </div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>
                                 / 
                                <article className="post-wrap">
                                    <div className="post-media">
                                        <img src="assets/img/preview/blog/audio-post.jpg" alt="" />
                                    </div>
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="#">Standard Sound Blog Post Header</a></h2>
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-excerpt">
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. In posuere odio sed libero tincidunt commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem in, malesuada nunc. Etiam condimentum felis odio, vel mollis est tempor non...</p>
                                        </div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>
                                 / 
                                <article className="post-wrap">
                                    <div className="post-media">
                                        <a href="http://youtu.be/kg-clmeHBrM" data-gal="prettyPhoto" className="media-link">
                                            <span className="btn btn-play"><i className="fa fa-play"></i></span>
                                            <img src="assets/img/preview/blog/blog-post-3.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="#">Standard Video Blog Post Header</a></h2>
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-excerpt">
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. In posuere odio sed libero tincidunt commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem in, malesuada nunc. Etiam condimentum felis odio, vel mollis est tempor non...</p>
                                        </div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>
                                 / 
                                <article className="post-wrap">
                                    <div className="post-media">
                                        <blockquote>
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. </p>
                                            <footer><cite title="Source Title">ISA MERCAN</cite></footer>
                                        </blockquote>
                                    </div>
                                    <div className="post-header">
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>
                                 / 
                                <article className="post-wrap">
                                    <div className="post-media">
                                         16:9 aspect ratio 
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="http://player.vimeo.com/video/113101251"></iframe>
                                        </div>
                                    </div>
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="#">Standard Vimeo Video Blog Post Header</a></h2>
                                        <div className="post-meta">By <a href="#">author name here</a> / 6th June 2014 / in <a href="#">Design</a>, <a href="#">Photography</a> / <a href="#">27 Comments</a> / 18 Likes / <a href="#">Share This Post</a></div>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-excerpt">
                                            <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante. Quisque suscipit mauris ipsum, eu mollis arcu laoreet vel. In posuere odio sed libero tincidunt commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem in, malesuada nunc. Etiam condimentum felis odio, vel mollis est tempor non...</p>
                                        </div>
                                    </div>
                                    <div className="post-footer">
                                        <span className="post-read-more"><a href="#" className="btn btn-theme btn-theme-transparent btn-icon-left"><i className="fa fa-file-text-o"></i>Read more</a></span>
                                    </div>
                                </article>

                                 /Blog posts 

                                 Pagination 
                                <div className="pagination-wrapper">
                                    <ul className="pagination">
                                        <li className="disabled"><a href="#"><i className="fa fa-angle-double-left"></i> Previous</a></li>
                                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">Next <i className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                                

                            </div>
                            

                        </div>
                    </div>
                </section>

                <section className="page-section no-padding-top">
                    <div className="container">
                        <div className="row blocks shop-info-banners">
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-gift"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Buy 1 Get 1</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-comments"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Call to Free</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block">
                                    <div className="media">
                                        <div className="pull-right"><i className="fa fa-trophy"></i></div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Money Back!</h4>
                                            Proin dictum elementum velit. Fusce euismod consequat ante.
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
