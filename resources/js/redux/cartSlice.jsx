import { createSlice } from "@reduxjs/toolkit";


const storeCartItemToLocalStorage = (data,totalAmount = 0) => {
    const cartData = {
        cart: data,
        cartTotalAmount: totalAmount
    };
    localStorage.setItem('cartData',JSON.stringify(cartData));
}

const getCartLocalStorageData = () =>{
    const  storedData  = localStorage.getItem('cartData');
    
    if (storedData){
        const parsedData = JSON.parse(storedData);
        return {
            cartList: parsedData.cart || [],
            totalAmount: parsedData.cartTotalAmount || 0 
        };
    }
   
    return  {
        cartList: [],
        totalAmount: 0 
    };
}
const INITIAL_STATE = {
    ... getCartLocalStorageData(),
    cartCount : 0,
    itemsCount : 0,
    cartItemsTotal: 0
};
const cartSlice = createSlice({
    name:"cart",
    initialState : INITIAL_STATE,
    reducers: {
        addToCart : (states,action) => {
            const itemInCart = states.cartList.find(item =>
                item.productId === action.payload.productId)
            
            if (itemInCart) {
                states.cartList.forEach((item) => {
                    if (item?.productId === action.payload.productId){
                        // item.productQty = 1;
                        item.totalPrice = item.productQty * item.productId;
                    }
                });
                storeCartItemToLocalStorage(states.cartList);
                return ;
            }
            else {
                states.cartList.push({
                    ...action.payload,productQty:1,
                });
                // states.cartList.push(action.payload);
                storeCartItemToLocalStorage(states.cartList);
            }
        },
        
        increment: (states, action) => {
            states.cartCount += 1;
            // states.cartList.forEach((item) => {
                
            //     if (item?.productId === action.payload){
            //         item.productQty ++;
            //         item.totalPrice = item.productQty * item.productId;
            //     }
                
            // });
            const updatedCartList = states.cartList.map((item) => {
                if (item.productId === action.payload) {
                    item.productQty += 1;
                    item.totalPrice = item.productQty * item.productPrice;
                }
                return item;
            });
            // states.totalAmount = states.cartList.reduce((cartTotal,cartItem)=>{
            //     return cartTotal + cartItem.totalPrice;
            // },0);
            const totalAmount = updatedCartList.reduce(
                (cartTotal, cartItem) => cartTotal + cartItem.totalPrice,
                0
            );

            storeCartItemToLocalStorage(updatedCartList, totalAmount);
            states.cartList = updatedCartList;
            states.totalAmount = totalAmount;
        },
        decrement: (states, action) => {
            states.cartCount -= 1;
            states.cartList.forEach((item)=> {
                if (item?.productId === action.payload){
                    item.productQty --;
                    item.totalPrice = item.productQty * item.productId;
                }
            });
            states.totalAmount = states.cartList.reduce((cartTotal,cartItem)=>{
                return cartTotal + cartItem.totalPrice;
            },0);
        },
        getCartTotal: (states) => {    
            states.cartItemsTotal = states.cartList.reduce((cartTotal,
                cartItem) => {
                return cartTotal + cartItem.totalPrice},0);
        },
        
        getCartCount: (states) => {
                states.itemsCount = states.cartList.length;

        }

    },
});

export const getCartItemsCount = (state) => state.cart.itemsCount;
// export const getCartItemsTotal = (state) => state.cart.cartItemsTotal;
export const {addToCart,increment,decrement,getCartTotal,getCartCount} = cartSlice.actions;
export default cartSlice.reducer;