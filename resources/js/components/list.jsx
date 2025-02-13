// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, decrement, increment } from '../redux/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';

export default function List() {
   const {cartCount,cartList} = useSelector((state)=> state.cart)
   const dispatch = useDispatch();
   const [productList, setProductList] = useState([]);

   useEffect(()=> {
      const resultData = axios.get('http://localhost:8000/api/products').then(response =>{	
         setProductList(response.data.data);
      })
      },[setProductList]);
     
   const addItemToCart = async (id) => {
      // const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      const productData = response.data.data;
      const transFormedData = {
         productId: productData.id,
         productQty: 1,
         productName: productData.product_name,
         productImage: productData.product_image,
         productPrice: productData.product_price,
         totalPrice: 0
      }
      dispatch(addToCart(transFormedData));
   }
   const getProductQuantity = (productId) => {
      console.log(cartList);
      const product = cartList.find(item => item.productId === productId);
      
      return product ? product.productQty : 0;
  }

  return (
    <section className="product_section layout_padding">
    <div className="container">
       <div className="heading_container heading_center">
          <h2>
             Our <span>products</span>
          </h2>
       </div>
       <div className="row">

   {productList.length > 0 && (
      
      productList.map((item, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3"  key={index}>
             <div className="box">
                <div className="option_container">
                   <div className="options">
                      <button type="button" className="addToCart option1" onClick={()=> addItemToCart(item.id)} >
                        Add To Cart
                      </button>
                      <div className="input-group" style={{ width: '50%' }}>
                         <span className="input-group-btn">
                             <button type="button" className="btn btn-default btn-number countButton"
                              onClick={() => {dispatch(decrement(item.id))}} data-type="minus" data-field="quant[1]">
                                 <span className="fa fa-minus"></span>
                             </button>
                         </span>
                         <input type="text" name="quant[1]" className="form-control input-number"  value={getProductQuantity(item.id)}  min="8" max="30"></input>
                         <span className="input-group-btn">
                             <button type="button" className="btn btn-default btn-number countButton"
                             onClick={() => {dispatch(increment(item.id))}}  data-type="plus" data-field="quant[1]">
                                 <span className="fa fa-plus"></span>
                             </button>
                         </span>
                     </div>
                   </div>
                </div>
                <div className="img-box">
                   <img src={`images/products/${item.product_image}`} alt=""></img>
                </div>
                <div className="detail-box">
                   <h5>
                      {item.product_name}
                   </h5>
                   <h6>
                      ${item.product_price}
                   </h6>
                </div>
             </div>
          </div>
          )))
         }
       </div>
       <div className="btn-box">
          <a href="">
          View All products
          </a>
       </div>
    </div>
 </section>
  )
}
