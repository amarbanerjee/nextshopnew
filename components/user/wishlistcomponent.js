import React, { useEffect, useState, useContext } from "react"
import Link from "next/link";
import { useToast } from '@chakra-ui/react'
import { useSession, signOut } from 'next-auth/react';

export default function WishlistComponent() {
    const toast = useToast();
    const { data: session } = useSession();
    

    const [rows, setRows] = useState([]);
    
    useEffect(() => {
    

  
    async function getUserWishList() {
      try {
        
        const wdata = {uid:session.userData.id};
        //console.log("Data",wdata);
        //alert(session.userData.id);

        const res = await fetch("/api/user/showwishlists", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
                body: JSON.stringify(wdata),
          });
        console.log("Response",res);
        if (!res.ok) {
          throw new Error("Error fetching products");
        }

        const { wishlistdata } = await res.json();
        setRows(wishlistdata);
        console.log("Products",wishlistdata);
        
        toast({
            title: 'Data Loaded Successfullys..',
            description: "Wishlist data is ready.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        
        
      } catch (error) {
        
        

        console.log(error);
      }
    }
    getUserWishList();
  
  }, []);


  return (
    <>
    
       <section className="page-section breadcrumbs">
                    <div className="container">
                        <div className="page-header">
                            <h1>Wishlist</h1>
                        </div>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
       </section>

       <section className="page-section color no-padding-bottom">
                    <div className="container">

                        <div className="row wishlist">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {rows.map((tr, i) => (
                                        <tr>
                                            <td className="image"><a className="media-link" href="#"><i className="fa fa-plus"></i><img src="assets/img/preview/shop/order-1.jpg" alt=""/></a></td>
                                            <td className="description">
                                                <h4><Link href="#">{tr?.product_name}</Link></h4>
                                                by Category Name
                                            </td>
                                            <td className="price">${tr?.price}</td>
                                            <td className="add"><Link className="btn btn-theme btn-theme-dark btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i> Add to cart</Link></td>
                                            <td className="total"><a href="#"><i className="fa fa-close"></i></a></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <a className="btn btn-theme btn-theme-transparent btn-icon-left btn-continue-shopping" href="#"><i className="fa fa-shopping-cart"></i>Continue shopping</a>
                            </div>
                            
                        </div>
                    </div>
       </section>

       <section className="page-section">
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
