import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, getCartItemsCount, getCartTotal, getCartCount } from '../../redux/cartSlice';

function CheckOut() {
    return (
        <>
            <div className="card">
                <div className="card-top border-bottom text-center">
                    <a href="#"> Back to shop</a>
                    <span id="logo">Check Out</span>
                </div>
                <div className="card-body">
                    <div className="row upper">
                        <span><i className="fa fa-check-circle-o"></i> Shopping bag</span>
                        <span><i className="fa fa-check-circle-o"></i> Order details</span>
                        <span id="payment"><span id="three">3</span>Payment</span>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left border" style={{marginBottom: '10px'}}>
                                <div className="row">
                                    <span className="header">Shipping Address</span>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-6"><span>First Name:</span>
                                            <input placeholder="YY/MM"></input>
                                        </div>
                                        <div className="col-6"><span>Last Name:</span>
                                            <input id="cvv"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <span>cardholder's name:</span>
                                        <input placeholder="Linda Williams"></input>
                                        <span>card Number:</span>
                                        <input placeholder="0125 6780 4567 9909"></input>
                                        <span>card Number:</span>
                                        <input placeholder="0125 6780 4567 9909"></input>
                                            <span>card Number:</span>
                                            <input placeholder="0125 6780 4567 9909"></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="left border">
                                        <div className="row">
                                            <span className="header">Payment</span>
                                            <div className="icons">
                                                <img src="https://img.icons8.com/color/48/000000/visa.png" />
                                            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                                        <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                            </div>
                        </div>
                        <form>
                            <span>cardholder's name:</span>
                            <input placeholder="Linda Williams"></input>
                                <span>card Number:</span>
                                <input placeholder="0125 6780 4567 9909"></input>
                                    <div className="row">
                                        <div className="col-4"><span>Expiry date:</span>
                                            <input placeholder="YY/MM"></input>
                                        </div>
                                        <div className="col-4"><span>CVV:</span>
                                            <input id="cvv"></input>
                                        </div>
                                    </div>
                                    <input type="checkbox" id="save_card" className="align-left"></input>
                                        <label for="save_card">Save card details to wallet</label>
                            </form>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="right border">
                                    <div className="header">Order Summary</div>
                                    <p>2 items</p>
                                    <div className="row item">
                                        <div className="col-4 align-self-center"><img className="img-fluid" src="https://i.imgur.com/79M6pU0.png"></img></div>
                                        <div className="col-8">
                                            <div className="row"><b>$ 26.99</b></div>
                                            <div className="row text-muted">Be Legandary Lipstick-Nude rose</div>
                                            <div className="row">Qty:1</div>
                                        </div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-4 align-self-center"><img className="img-fluid" src="https://i.imgur.com/Ew8NzKr.jpg"></img></div>
                                        <div className="col-8">
                                            <div className="row"><b>$ 19.99</b></div>
                                            <div className="row text-muted">Be Legandary Lipstick-Sheer Navy Cream</div>
                                            <div className="row">Qty:1</div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row lower">
                                        <div className="col text-left">Subtotal</div>
                                        <div className="col text-right">$ 46.98</div>
                                    </div>
                                    <div className="row lower">
                                        <div className="col text-left">Delivery</div>
                                        <div className="col text-right">Free</div>
                                    </div>
                                    <div className="row lower">
                                        <div className="col text-left"><b>Total to pay</b></div>
                                        <div className="col text-right"><b>$ 46.98</b></div>
                                    </div>
                                    <div className="row lower">
                                        <div className="col text-left"><a href="#"><u>Add promo code</u></a></div>
                                        <span>card Number:</span>
                                        <input placeholder="0125 6780 4567 9909"></input>
                                    </div>
                                    <button className="btn-placeorder">Place order</button>
                                    <p className="text-muted text-center">Complimentary Shipping & Returns</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default CheckOut