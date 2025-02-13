import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { decrement, increment, getCartItemsCount, getCartTotal,getCartCount } from '../../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartItemsList() {

    const {cartList,cartCount} = useSelector((state)=> state.cart);
    const {totalAmount} = useSelector((state)=> state.cart);
    const itemsTotal = useSelector(getCartItemsCount);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const cartTotal = useSelector((state)=> state.cart.cartItemsTotal);
    const tokenData =  useSelector(state => state.auth.token) ?? token ;
    const navigate = useNavigate();
    const location = useLocation(); 
    console.log(tokenData);
    useEffect(() => {
        dispatch(getCartTotal());
        dispatch(getCartCount());
    }, [cartList,cartCount,cartTotal, dispatch]);
    console.log(cartList);
    const handleCheckout = (e) => {
        e.preventDefault();
        
        if (cartCount === 0) {
            
            const notify = () => toast("Please add an item to cart!");
            notify();
        }
        if (!tokenData) {
          navigate('/login', { state: { from: location.pathname } }); 
        } else {
          navigate('/cart'); 
        }


      };
  return (
    <div>
        <div className="card">
         <div className="row">
             <div className="col-md-8 cart">
                 <div className="title">
                     <div className="row">
                         <div className="col"><h4><b>Shopping Cart</b></h4></div>
                         <div className="col align-self-center text-right text-muted">{itemsTotal} items</div>
                     </div>
                 </div>  
                 {cartList.length > 0 ? (
                           cartList.map((item, index) => (  
                 <div className="row border-top border-bottom">
                     <div className="row main align-items-center">

                         <div className="col-2"><img className="img-fluid f-pro-img"   src={`images/products/${item.productImage}`}></img></div>
                         <div className="col">
                             <div className="row text-muted">Shirt</div>
                             <div className="row">{item.productName}</div>
                         </div>
                         <div className="col-2">₹ {item.productPrice} <span className="close" style={{marginRight:'10px',marginTop:'5px'}}>&#10005;</span></div>
                         <div className="input-group" style={{ width: '20%' }}>
                            <span className="input-group-btn">
                                <button type="button" onClick={() => {dispatch(decrement(item.productId))}}  className="btn btn-default btn-number countButton">
                                    <span className="fa fa-minus"></span>
                                </button>
                            </span>
                            <input type="text" name="quant[1]" value={item.productQty} className="form-control input-number" style={{padding: '0 rem'}} min="8" max="30"></input>
                            <span className="input-group-btn">
                                <button type="button" onClick={() => {dispatch(increment(item.productId))}} className="btn btn-default btn-number countButton" >
                                    <span className="fa fa-plus"></span>
                                </button>
                            </span>
                        </div>
                         <div className="col">₹ {item?.productPrice * item?.productQty }  <span className="close">&#10005;</span></div>
                     </div>
                 </div>
                     ))) :  (                           
                 <div className="back-to-shop"><span className="text-muted">No Items in the cart</span></div>
                )}
                 <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
             </div>
             <div className="col-md-4 summary">
             
                 <div className="f-h5"><h5><b>Summary</b></h5>
                 <ToastContainer theme="dark" position="right-center" closeOnClick={true} autoClose={5000} />
                 </div>
                 <div className="cart-totals">
                  <h3>Cart Totals</h3>
                  <form action="#" method="get" accept-charset="utf-8">
                      <table>
                          <tbody>
                              <tr>
                                  <td>Subtotal</td>
                                  <td className="subtotal">Rs- {cartTotal} /-</td>
                              </tr>
                              <tr>
                                  <td>Shipping</td>
                                  <td className="free-shipping">Free Shipping</td>
                              </tr>
                              <tr className="total-row">
                                  <td>Total</td>
                                  <td className="price-total">Rs- {cartTotal} /-</td>
                              </tr>
                          </tbody>
                      </table>                  
                      <button type='button' className="btn-chkout confirm_checkout" onClick={handleCheckout}>CHECKOUT</button>
                  </form>               
              </div>
             </div>
         </div>        
     </div>
    </div>
  )
}

export default CartItemsList