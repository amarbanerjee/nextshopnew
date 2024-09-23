import React from 'react'
import PreLoder from './preloader'
import Modal from './modal'
import TopBar from './topbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const currentPage = usePathname();

    const isActive = (path) => {
        return currentPage===path;
    }
  return (
    <>

   
   
        <Modal />
        <TopBar />

        <header className="header fixed">
                <div className="header-wrapper">
                    <div className="container">

                       
                        <div className="logo">
                            <Link href="/"><img src="assets/img/logo-bella-shop.png" alt="Bella Shop"/></Link>
                        </div>
                       

                        
                        <div className="header-search">
                            <input className="form-control" type="text" placeholder="What are you looking?"/>
                            <button><i className="fa fa-search"></i></button>
                        </div>
                        
                        <div className="header-cart">
                            <div className="cart-wrapper">
                                <Link href="/user/wishlist/" className="btn btn-theme-transparent hidden-xs hidden-sm"><i className="fa fa-heart"></i></Link>
                                <Link href="user/compare" className="btn btn-theme-transparent hidden-xs hidden-sm"><i className="fa fa-exchange"></i></Link>
                                <Link href="#" className="btn btn-theme-transparent" data-toggle="modal" data-target="#popup-cart"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs"> 0 item(s) - $0.00 </span> <i className="fa fa-angle-down"></i></Link>
                               
                                <Link href="#" className="menu-toggle btn btn-theme-transparent"><i className="fa fa-bars"></i></Link>
                               
                            </div>
                        </div>
                       

                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="container">
                        
                        <nav className="navigation closed clearfix">
                            <Link href="#" className="menu-toggle-close btn"><i className="fa fa-times"></i></Link>
                            <ul className="nav sf-menu">
                                <li className={isActive('/') ? 'active':''}><Link href="/">Homepage</Link>
                                    
                                </li>
                                {/* <li><Link href="category">Shop</Link>
                                    <ul>
                                        <li><Link href="category.html">Shop Sidebar Left</Link></li>
                                        <li><Link href="category-right.html">Shop Sidebar Right</Link></li>
                                        <li><Link href="category-list.html">Shop List View</Link></li>
                                        <li><Link href="product-details.html">Product Page</Link></li>
                                    </ul>
                                </li> */}
                                
                                
                                <li className="megamenu"><Link href="#">Features</Link>
                                    <ul>
                                        <li className="row">
                                            <div className="col-md-2">
                                                <h4 className="block-title"><span>Womens</span></h4>
                                                <ul>
                                                    <li><Link href="#">Dresses</Link></li>
                                                    <li><Link href="#">Rompers & Jumpsuits</Link></li>
                                                    <li><Link href="#">Bodysuits</Link></li>
                                                    <li><Link href="#">Shirts & Blouses</Link></li>
                                                    <li><Link href="#">Coats & Jackets</Link></li>
                                                    <li><Link href="#">Blazers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2">
                                                <h4 className="block-title"><span>Mens</span></h4>
                                                <ul>
                                                    <li><Link href="#">T-Shirts & Vests</Link></li>
                                                    <li><Link href="#">Sweaters & Cardigans</Link></li>
                                                    <li><Link href="#">Hoodies & Sweats</Link></li>
                                                    <li><Link href="#">Coats & Jackets</Link></li>
                                                    <li><Link href="#">Shirts</Link></li>
                                                    <li><Link href="#">Shorts</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2">
                                                <h4 className="block-title"><span>Pages</span></h4>
                                                <ul>
                                                    <li><Link href="shortcodes.html"><strong>Shortcodes</strong></Link></li>
                                                    <li><Link href="typography.html"><strong>Typography</strong></Link></li>
                                                    <li><Link href="coming-soon.html"><strong>Coming soon</strong></Link></li>
                                                    <li><Link href="error-page.html"><strong>404 Page</strong></Link></li>
                                                    <li><Link href="about.html"><strong>About</strong></Link></li>
                                                    <li><Link href="login.html"><strong>Login</strong></Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 visible-xs">
                                                <h4 className="block-title"><span>My Account</span></h4>
                                                <ul>
                                                    <li><Link href="accountinformation.html"> Account Information </Link></li>
                                                    <li><Link href="myaccount.html">My Account</Link></li>                                        
                                                    <li><Link href="cng-pw.html">Change Password</Link></li>
                                                    <li><Link href="address-book.html">Address Books</Link></li>
                                                    <li><Link href="order-history.html">Order History</Link></li>
                                                    <li><Link href="review-rating.html">Reviews and Ratings</Link></li>
                                                    <li><Link href="return.html">Returns Requests</Link></li>
                                                    <li><Link href="newsletter.html">Newsletter</Link></li>
                                                    <li><Link href="myaccount-leftsidebar.html">Left Sidebar</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <h4 className="block-title"><span>Header styles</span></h4>
                                                <ul>
                                                    <li><Link href="index-style-1.html"><strong>Header style 1</strong></Link></li>
                                                    <li><Link href="index-style-2.html"><strong>Header style 2</strong></Link></li>
                                                    <li><Link href="index-style-3.html"><strong>Header style 3</strong></Link></li>
                                                    <li><Link href="index-style-4.html"><strong>Header style 4</strong></Link></li>
                                                    <li><Link href="index-style-5.html"><strong>Header style 5</strong></Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product-list">
                                                    <div className="media">
                                                        <Link className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/shop/top-sellers-2.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </Link>
                                                        <div className="media-body">
                                                            <h4 className="media-heading"><Link href="#">Standard Product Header</Link></h4>
                                                            <div className="rating">
                                                                <span className="star"></span><span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>

                                                            </div>
                                                            <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <Link className="pull-left media-link" href="#">
                                                            <img className="media-object" src="assets/img/preview/shop/top-sellers-3.jpg" alt="" />
                                                            <i className="fa fa-plus"></i>
                                                        </Link>
                                                        <div className="media-body">
                                                            <h4 className="media-heading"><Link href="#">Standard Product Header</Link></h4>
                                                            <div className="rating">
                                                                <span className="star"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                                <span className="star active"></span>
                                                            </div>
                                                            <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={isActive('/men') ? 'active':''}><Link href="/men">Men</Link></li>
                                <li className={isActive('/women') ? 'active':''}><Link href="/women">Women</Link></li>
                                <li className={isActive('/kids') ? 'active':''}><Link href="/kids">Kids</Link></li>
                                <li className={isActive('/new') ? 'active':''}><Link href="/new">New</Link></li>
                                <li className={isActive('/category') ? 'active':''}><Link href="/category">Sale</Link></li>
                                <li className={isActive('/blog') ? 'active':''}><Link href="/blog">Blog</Link>
                                    {/* <ul>
                                        <li><Link href="blog.html">Blog Sidebar Left </Link></li>
                                        <li><Link href="blog-right.html">Blog Sidebar Right</Link></li>
                                        <li><Link href="blog-post.html">Blog Single Post</Link></li>
                                    </ul> */}
                                </li>
                                <li className={isActive('/contact') ? 'active':''}><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
        </header>
        
 
      
    </>
  )
}
