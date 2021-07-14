import React from 'react';
import cart from './assets/cart.svg';

function Cart() {
    return (
        <div className="col-2">
            <div className="row align-items-center">
                <div className="col">
                    <div className="cart">
                      <a href="#">
                        <img src={cart}/>
                        <span>0</span>
                       </a>
                    </div>
                </div>
                <div className="col">
                    <div className="logout">Выход</div>
                </div>
                </div>
        </div>
    );
}

export default Cart;