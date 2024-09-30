import React, { useState, useEffect,useContext } from "react";
import CartContext from "@/context/CartContext";
import StarRatings from "react-star-ratings";
import { useToast } from '@chakra-ui/react'
import { useSession, signOut } from 'next-auth/react';

export default function ProductDetails({id}) {
    const toast = useToast();
    const { addItemToCart } = useContext(CartContext);
    const { data: session } = useSession();
    

    

    const [isWishList,setWishlist] = useState(false);

    const addToWishListHandler = async () => {

        try
        {
            
            if(session.userData){
                console.log("Session",session);
                const wdata = {uid:session.userData.id, pid:id, product_name:data.title, image:data.image, price: data.price};
                const response = await fetch('/api/user/wishlists', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                        body: JSON.stringify(wdata),
                  });

                  if (!response.ok) {
                    throw new Error("Error fetching products");
                    
                    toast({
                        title: 'You need to login..',
                        description: "We have received your Signup information.Please check your e-mail.",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      });
                  } else{

                    toast({
                        title: 'Successfully Added to the wishlist',
                        description: "Product is added to the wishlist successfully..",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      }); 
                      setWishlist(true);
                  }
              
            }
          }
          catch(error){
                console.log(error)
                toast({
                    title: 'Error added to the wishlist..',
                    description: "Error added to the wishlist.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  });  
            }
    }

    const addToCartHandler = () => {
        addItemToCart({
          product: data._id,
          name: data.title,
          price: data.price,
          image: data.image,
          
        });

        notificationCtx.showNotification({
            title: 'Added to the Cart Successfully !!',
            message: 'Cart Added',
            status: 'success',
          });
      };

    const [data, setData] = useState({});

    useEffect(() => {
        
        async function getProductById(id) {
          try {
            
    
            const res = await fetch(`/api/products/view/${id}`);
            if (!res.ok) {
              throw new Error("Error fetching products");
            }
    
            const { product } = await res.json();
            console.log(product);
            setData(product);
            
            // notificationCtx.showNotification({
            //   title: 'Product Loaded.. !!',
            //   message: 'Successfully Loaded..',
            //   status: 'success',
            // });
          } catch (error) {
            
            // notificationCtx.showNotification({
            //   title: 'Product Loaded Failed.. !!',
            //   message: 'Error in Loding Products ..',
            //   status: 'error',
            // });
    
            console.log("Error fetching products");
          }
        }

        async function checkWishlist(id) {
            //alert(id);
            try {
               console.log("Check Wishlist");
               const userId = session.userData.id;
                
      
              const wdata = {uid:userId, pid:id};
              //const wdata = {uid:"66f4e5083b00071e09070fe1", pid:"123"};
              //alert(wdata);
              //console.log("Wdata Json",JSON.stringify(wdata));
              const res = await fetch(`/api/user/checkWishlist/`,
                    {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                            body: JSON.stringify(wdata),
                    }
                );

              if (!res.ok) {
                throw new Error("Error fetching products");
              }
      
              const { wishlistdata } = await res.json();

              console.log("Wishlist no",wishlistdata);
              if(wishlistdata>0){
                setWishlist(true);
              }
             // setData(product);
              
              // notificationCtx.showNotification({
              //   title: 'Product Loaded.. !!',
              //   message: 'Successfully Loaded..',
              //   status: 'success',
              // });
            } catch (error) {
              
              // notificationCtx.showNotification({
              //   title: 'Product Loaded Failed.. !!',
              //   message: 'Error in Loding Products ..',
              //   status: 'error',
              // });
      
              console.log(error);
            }
          }
        getProductById(id);
        checkWishlist(id);
        
       
      }, []);

    
  return (
    <>
      <section className="page-section">
                    <div className="container">

                        <div className="row product-single">
                            <div className="col-md-6">
                                <div className="badges">
                                    <div className="hot">hot</div>
                                    <div className="new">new</div>
                                </div>
                                <div className="img-carousel">
                                    <div className="item">
                                        <a className="btn btn-theme btn-theme-transparent btn-zoom" href="/assets/img/preview/shop/product-1-big.jpg" data-gal="prettyPhoto"><i className="fa fa-plus"></i></a>
                                        <a href="/assets/img/preview/shop/product-1-big.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="/assets/img/preview/shop/product-1-big.jpg" alt=""/></a></div>
                                    
                                </div>
                                <div className="row product-thumbnails">
                                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" ><img src="/assets/img/preview/shop/product-thumb-1.jpg" alt=""/></a></div>
                                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" ><img src="/assets/img/preview/shop/product-thumb-2.jpg" alt=""/></a></div>
                                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" ><img src="/assets/img/preview/shop/product-thumb-3.jpg" alt=""/></a></div>
                                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" ><img src="/assets/img/preview/shop/product-thumb-4.jpg" alt=""/></a></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="back-to-category">
                                    <span className="link"><i className="fa fa-angle-left"></i> Back to <a href="category.html">Category</a></span>
                                    <div className="pull-right">
                                        <a className="btn btn-theme btn-theme-transparent btn-previous" href="#"><i className="fa fa-angle-left"></i></a>
                                        <a className="btn btn-theme btn-theme-transparent btn-next" href="#"><i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                                <h2 className="product-title">{data.title}</h2>
                                <div className="product-rating clearfix">
                                    <div className="rating">
                                    <StarRatings
                                            rating={4}
                                            starRatedColor="#ffb829"
                                            numberOfStars={5}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            name="rating"
                                            
                                    />
                                    </div>
                                    <a className="reviews" href="#">16 reviews</a> | <a className="add-review" href="#">Add Your Review</a>
                                </div>
                                <div className="product-availability">Availability: <strong>In stock</strong> 21 Item(s)</div>
                                <hr className="page-divider small"/>

                                <div className="product-price">${data.price}</div>
                                <hr className="page-divider"/>

                                <div className="product-text">
                                    <p>{data.description}</p>
                                    <ul>
                                        <li>- Cras tristique neque a mauris volutpat, eget sodales neque elementum.</li>
                                        <li>- Vestibulum iaculis velit sed dolor suscipit pretium.</li>
                                        <li>- Etiam mattis risus id leo imperdiet tincidunt.</li>
                                    </ul>
                                </div>
                                <hr className="page-divider"/>

                                <form action="#" className="row variable">
                                    <div className="col-sm-6">
                                        <div className="form-group selectpicker-wrapper">
                                            <label htmlFor="exampleSelect1">Size</label>
                                            <select
                                                id="exampleSelect1"
                                                className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                data-toggle="tooltip" title="Select">
                                                <option>Select Your Size</option>
                                                <option>Size 1</option>
                                                <option>Size 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group selectpicker-wrapper">
                                            <label htmlFor="exampleSelect2">Color</label>
                                            <select
                                                id="exampleSelect2"
                                                className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                data-toggle="tooltip" title="Select">
                                                <option>Select Your Color</option>
                                                <option>Color 1</option>
                                                <option>Color 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <hr className="page-divider small"/>


                                <div className="buttons">
                                    {/* <div className="quantity">
                                        <button className="btn"><i className="fa fa-minus"></i></button>
                                        <input className="form-control qty" type="number" step="1" min="1" name="quantity" defaultValue="1" title="Qty" />
                                        <button className="btn"><i className="fa fa-plus"></i></button>
                                    </div> */}
                                    <button  onClick={addToCartHandler} className="btn btn-theme btn-cart btn-icon-left" type="button"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    <button disabled={isWishList} onClick={addToWishListHandler} className="btn btn-theme btn-wish-list"><i className="fa fa-heart"></i></button>
                                    <button className="btn btn-theme btn-compare"><i className="fa fa-exchange"></i></button>
                                </div>

                                <hr className="page-divider small"/>

                                {/* <table>
                                    <tr>
                                        <td className="title">Category:</td>
                                        <td>Men Dress</td>
                                    </tr>
                                    <tr>
                                        <td className="title">Product Code:</td>
                                        <td>PS08</td>
                                    </tr>
                                    <tr>
                                        <td className="title">Tags:</td>
                                        <td>Fashion - clothes - Dress - Men - jean</td>
                                    </tr>
                                </table> */}
                                <hr className="page-divider small"/>

                                <ul className="social-icons list-inline">
                                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                </ul>

                            </div>
                        </div>

                    </div>
     </section>

      <section className="page-section md-padding">
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

      <section className="page-section">
                    <div className="container">
                        <div className="tabs-wrapper content-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#item-description" data-toggle="tab">Item Description</a></li>
                                <li><a href="#reviews" data-toggle="tab">Reviews (2)</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="item-description">
                                    <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>
                                    <p>Morbi imperdiet lacus nec ante blandit, sit amet fermentum magna faucibus. Nunc nec libero id urna vulputate venenatis. Aenean vulputate odio felis, in rhoncus sapien auctor nec. Donec non posuere sem. Ut quis egestas libero, mattis gravida nibh. Phasellus a nisi ac mi luctus tincidunt et non est. Proin ac orci rhoncus arcu bibendum molestie vel et metus. Aenean iaculis purus et velit iaculis, nec convallis ipsum ornare. Integer a orci enim.</p>
                                </div>
                                <div className="tab-pane fade" id="reviews">

                                    <div className="comments">
                                        <div className="media comment">
                                            <a href="#" className="pull-left comment-avatar">
                                                <img alt="" src="/assets/img/preview/avatars/avatar-1.jpg" className="media-object" />
                                            </a>
                                            <div className="media-body">
                                                <p className="comment-meta"><span className="comment-author"><a href="#">User Name Here</a> <span className="comment-date"> 26 days ago <i className="fa fa-flag"></i></span></span></p>
                                                <p className="comment-text">Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismd. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere.</p>
                                            </div>
                                        </div>
                                        <div className="media comment">
                                            <a href="#" className="pull-left comment-avatar">
                                                <img alt="" src="/assets/img/preview/avatars/avatar-3.jpg" className="media-object" />
                                            </a>
                                            <div className="media-body">
                                                <p className="comment-meta"><span className="comment-author"><a href="#">User Name Here</a> <span className="comment-date"> 26 days ago <i className="fa fa-flag"></i></span></span></p>
                                                <p className="comment-text">Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismd. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-form">
                                        <h4 className="block-title">Add a Review</h4>
                                        <form method="post" action="#" name="comments-form" id="comments-form">
                                            <div className="form-group"><input type="text" placeholder="Your name and surname" className="form-control" title="comments-form-name" name="comments-form-name" /></div>
                                            <div className="form-group"><input type="text" placeholder="Your email adress" className="form-control" title="comments-form-email" name="comments-formemail" /></div>
                                            <div className="form-group"><textarea placeholder="Your message" className="form-control" title="comments-form-comments" name="comments-form-comments" rows="6"></textarea></div>
                                            <div className="form-group"><button type="submit" className="btn btn-theme btn-theme-transparent btn-icon-left" id="submit"><i className="fa fa-comment"></i> Review</button></div>
                                        </form>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
      </section>

      <section className="page-section">
                    <div className="container">
                        <h2 className="section-title section-title-lg"><span>Related Products</span></h2>
                        <div className="featured-products-carousel">
                            <div className="owl-carousel" id="featured-products-carousel">
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-1.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-2.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-3.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-4.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-1.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-2.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-3.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                                <div className="thumbnail no-border no-padding">
                                    <div className="media">
                                        <a className="media-link" href="#">
                                            <img src="/assets/img/preview/shop/product-4.jpg" alt=""/>
                                            <span className="icon-view">
                                                <strong><i className="fa fa-eye"></i></strong>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="caption text-center">
                                        <h4 className="caption-title">Standard Product Header</h4>
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
                        </div>
                        <hr className="page-divider half"/>
                        <a className="btn btn-theme btn-view-more-block" href="#" style={{maxWidth: "100%"}}>View More</a>
                    </div>
      </section>

     <section className="page-section">
                    <div className="container">
                        <h2 className="section-title"><span>Brand &amp; Clients</span></h2>
                        <div className="partners-carousel">
                            <div className="owl-carousel" id="partners">
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                                <div><a href="#"><img src="/assets/img/preview/partners/brand-logo.jpg" alt=""/></a></div>
                            </div>
                        </div>
                    </div>
     </section>

    </>
  )
}

