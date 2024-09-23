import React, { useEffect, useState, useContext } from "react"
import SideBar from '../Layout/sidebar'
import ProductGrid from './productgrid'


export default function MenProduct() {

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
    <section className="page-section breadcrumbs">
                    <div className="container">
                        <div className="page-header">
                            <h1>Category Page</h1>
                        </div>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li className="active">Category Grid View Page With Left Sidebar</li>
                        </ul>
                    </div>
                </section>


                <section className="page-section with-sidebar">
                    <div className="container">
                        <div className="row">
                             
                           <SideBar />
                            
                            <div className="col-md-9 content" id="content">

                                <div className="main-slider sub">
                                    <div className="owl-carousel" id="main-slider">

                                       
                                        <div className="item slide1 sub">
                                            <img className="slide-img" src="assets/img/preview/slider/slide-1-sub.jpg" alt=""/>
                                            <div className="caption">
                                                <div className="container">
                                                    <div className="div-table">
                                                        <div className="div-cell">
                                                            <div className="caption-content">
                                                                <h2 className="caption-title"><span>Winter Fashion</span></h2>
                                                                <h3 className="caption-subtitle"><span>Collection Ready</span></h3>
                                                                <p className="caption-text">
                                                                    <a className="btn btn-theme" href="#">Shop Now</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="item slide2 sub">
                                            <img className="slide-img" src="assets/img/preview/slider/slide-1-sub.jpg" alt=""/>
                                            <div className="caption">
                                                <div className="container">
                                                    <div className="div-table">
                                                        <div className="div-cell">
                                                            <div className="caption-content">
                                                                <h2 className="caption-title"><span>Winter Fashion</span></h2>
                                                                <h3 className="caption-subtitle"><span>Collection Ready</span></h3>
                                                                <p className="caption-text">
                                                                    <a className="btn btn-theme" href="#">Shop Now</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>

                               
                                <div className="shop-sorting">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <form className="form-inline" action="#">
                                                <div className="form-group selectpicker-wrapper">
                                                    <select
                                                        className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                        data-toggle="tooltip" title="Select">
                                                        <option>Product Name</option>
                                                        <option>Product Name</option>
                                                        <option>Product Name</option>
                                                    </select>
                                                </div>
                                                <div className="form-group selectpicker-wrapper">
                                                    <select
                                                        className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                        data-toggle="tooltip" title="Select">
                                                        <option>Select Manifacturers</option>
                                                        <option>Select Manifacturers</option>
                                                        <option>Select Manifacturers</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-4 text-right-sm">
                                            <a className="btn btn-theme btn-theme-transparent btn-theme-sm" href="#"><img src="assets/img/icon-list.png" alt=""/></a>
                                            <a className="btn btn-theme btn-theme-transparent btn-theme-sm" href="#"><img src="assets/img/icon-grid.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row products grid">

                                {rows.map((tr, i) => (
                
                                <ProductGrid key={tr?._id} id={tr?._id} title={tr?.title} price={tr?.price} image={tr?.image} description={tr?.description} />
                
                                ))}
                                  
                                    
                                </div>
                                 
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
      
    </>
  )
}
