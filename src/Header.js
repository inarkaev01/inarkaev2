import React from 'react';
import Logo from "./Logo";
import Cart from "./Cart";
import Menu from "./Menu";

function Header() {
    return (
        <div className="container">
         <div className="header">
             <div className="row align-items-center">
            <Logo/>
            <Menu/>
            <Cart/>
             </div>
         </div>
            </div>
    );
}

export default Header;