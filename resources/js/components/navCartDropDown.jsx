import React,{ useState, useEffect } from 'react'
import {  getCartItemsCount,getCartTotal,getCartCount } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function NavCartDropDown() {
   const [showDropdown, setShowDropdown] = useState(false);
   const itemsCount = useSelector(getCartItemsCount);
   const {cartList, totalAmount} = useSelector((state)=> state.cart)
   const dispatch = useDispatch();
   const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
    };

    const handleCartClick = (e) => {
      e.preventDefault(); 
      toggleDropdown();
    };

    useEffect(()=>{
      dispatch(getCartCount());
    }, [dispatch,cartList])
  
   return (
      <>
               <li className="nav-item  dropdown">
                  <a className="nav-link dropdown-toggle" href="#"  role="button" aria-haspopup="true"
                   aria-expanded={showDropdown} onClick={handleCartClick}>
                     <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" viewBox="0 0 456.029 456.029" style={{ enableBackground: 'new 0 0 456.029 456.029' }}>
                        <g>
                           <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                           </g>
                        </g>
                        <g>
                           <g>
                              <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
        C457.728,97.71,450.56,86.958,439.296,84.91z" />
                           </g>
                        </g>
                        <g>
                           <g>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                           </g>
                        </g>
                     </svg>
                     <span className="badge">{itemsCount}</span>

                  </a>
                  { showDropdown && (
                  <div id="cartDropDown">
                  <ul className="dropdown-menu show" style={{ width: 'auto' }}>
                     <table className="table">
                        <thead>
                           <tr style={{ fontSize: '13px' }}>
                              <th>Product</th>
                              <th>Image</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Action</th>
                           </tr>
                        </thead>

                        <tbody>
                        {cartList.length > 0 ? (
                           cartList.map((item, index) => (
                           <tr key={index}>
                              <td>
                                 <span>{item.productName}</span>
                              </td>
                              <td>
                                 <img className="img-fluid f-pro-img" style={{ width: '30px', height: '45px'}}  src={`images/products/${item.productImage}`}  alt="" />
                              </td>
                              <td >
                                 <span>{item.productQty}</span>
                              </td>
                              <td >
                                 <span>{item.productPrice}</span>
                              </td>
                              <td>
                                 <button style={{
                                    float: 'right',
                                    fontSize: '10px',
                                    padding: '3px 6px 4px 6px',
                                    marginRight: '4px'
                                 }} className="btn btn-sm btn-danger">x</button>
                              </td>
                           </tr>
                           ))
                        ) :  (
                           <tr>
                             <td colSpan="5" style={{ textAlign: 'center' }}>
                               No items in the cart
                             </td>
                           </tr>
                         )}
                        </tbody>
                     </table>
                     <li className="divider"></li>
                     <li style={{ textAlign: 'center' }}><Link to="/cart" className="text-center" >View Cart</Link></li>
                  </ul>

                     </div>
                  )}
               </li>

      </>
   )
}
