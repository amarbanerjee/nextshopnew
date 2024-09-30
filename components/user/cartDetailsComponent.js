import { React, useContext } from 'react'
import CartContext from "@/context/CartContext";
import Button from '../ui/button';
import NotificationContext from '@/store/notification-context';

export default function CartDetailsComponent() {
    const notificationCtx = useContext(NotificationContext);
    const { addItemToCart, deleteItemFromCart, cart,decrementCartItem } = useContext(CartContext);

    const deleteCartItemHandler = (cartItem) =>{
        deleteItemFromCart(cartItem.product);
        notificationCtx.showNotification({
            title: 'Deleted Item from the cart...',
            message: 'You have deleted an item from the cart succesfully',
            status: 'success',
          });
    }

    const increaseQty = (cartItem) => {
        
        const newQty = cartItem?.quantity + 1;
        const item = { ...cartItem, quantity: newQty };
    
        if (newQty > Number(cartItem.stock)) return;
    
        addItemToCart(item);
      };
    
      const decreaseQty = (cartItem) => {
        //alert("Decrease");
        const newQty = cartItem?.quantity - 1;
        const item = { ...cartItem, quantity: newQty };
        //alert(newQty);
        if (newQty <= 0)
        { 
            deleteItemFromCart(cartItem.product);
            notificationCtx.showNotification({
            title: 'Deleted Item from the cart...',
            message: 'You have deleted an item from the cart succesfully',
            status: 'success',
          });
            return;
        }
    
        decrementCartItem(item);
      };
  return (
    
    <section class="page-section">
    <div class="wrap container">
        <div class="row">
           
            <div class="col-md-12">
                <div class="information-title">Cart Details</div>
                <div class="details-wrap">                                    
                    <div class="details-box orders">
                    {cart?.cartItems?.length > 0 && ( 
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Qty</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                             
                                {cart?.cartItems?.map((cartItem,i) => (   
                                <tr key={i}>
                                    <td class="image"><a href="#" class="media-link"><i class="fa fa-plus"></i><img alt="" src="assets/img/preview/shop/order-1.jpg" /></a></td>
                                    <td className="quantity">
                                        <button className="btn" onClick={() => decreaseQty(cartItem)}><i className="fa fa-minus"></i></button>
                                        <input className="form-control qty" type="number" step="1" min="1" name="quantity" value={cartItem.quantity}
                              readOnly title="Qty" />
                                        <button className="btn" onClick={() => increaseQty(cartItem)}><i className="fa fa-plus"></i></button>
                                    </td>
                                    <td class="description">
                                        <h4><a href="#">{cartItem.name}</a></h4>
                                        by Category Name
                                    </td>
                                    <td class="total">${cartItem.price} </td>
                                    <td class="total">${cartItem.price * cartItem.quantity} </td>
                                    
                                    <td class="order-status">
                                        <Button onClick={() => deleteCartItemHandler(cartItem)} class="btn btn-theme btn-theme-dark">Delete Item</Button> 
                                    </td>
                                </tr> 
                            ))}
                           
                            </tbody>
                        </table>
                    )}
                        <div>
                            <a href="accountinformation.html" class="btn btn-theme"> Back To Account </a>
                        </div>
                    </div>
                </div>                                
            </div>
                                     
        </div>
    </div>
    </section>
  )
}
