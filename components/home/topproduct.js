import React, { useEffect, useState, useContext } from 'react'
import TopProductSingle from '../product/topproductsingle';
import Pagination from "../product/pagination";
//import NotificationContext from '@/store/notification-context';

export default function TopProduct() {
    
    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);


  const [rows, setRows] = useState([]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // notificationCtx.showNotification({
    //   title: 'Loading.. !!',
    //   message: 'Loading Products from database..',
    //   status: 'pending',
    // });

    async function getPageCount() {
      try {
        const perpage=2;
        const page=1;
        const res = await fetch("/api/products/productCount");
        if (!res.ok) {
          throw new Error("Error fetching products");
        }

        const { count } = await res.json();
        //console.log(count);
        //setRows(products);
        setPageCount(count);
        
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

    async function getAllProducts() {
      try {
        //const perpage=2;
        //const page=1;
        console.log("Current Page",currentPage);
        console.log("Page Size",pageSize);

        const res = await fetch(`/api/products/all-products?perpage=${pageSize}&page=${currentPage}`);
        if (!res.ok) {
          throw new Error("Error fetching products");
        }

        const { products } = await res.json();
        setRows(products);
        
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
    getAllProducts();
    getPageCount();
  }, [currentPage]);
  return (
    <>
    <section className="page-section">
    <div className="container">
        <div className="message-box">
            <div className="message-box-inner">
                <h2>Free shipping on all orders over $45</h2>
            </div>
        </div>
    </div>
</section>

<section className="page-section">
    <div className="container">
        <h2 className="section-title"><span>Top Rated Products</span></h2>
        <div className="top-products-carousel">
        <div >
            
            {rows.map((tr, i) => (
                
                <TopProductSingle key={tr?._id} title={tr?.title} price={tr?.price} image={tr?.image} description={tr?.description} />
                
            ))}

            


            
                
               </div> 
            
        </div>
    </div>
</section>

</>
  )
}
