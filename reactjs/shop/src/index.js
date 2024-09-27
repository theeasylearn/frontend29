import React from "react";
import reactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from "./UserLogIn";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Category from "./CategoryPage";
import Cart from "./CartPage";
import Checkout from "./Checkout";
import Logout from "./Logout";
import Forgotpassword from "./Forgotpassword";
import UserRegister from "./UserRegister";
import NoPageFound from "./ErrorPage";

class Project extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="userlogin" element={<UserLogin />}></Route>
                    <Route index path="/" element={<Home />}></Route>
                    <Route path="product/:categoryid" element={<Product />}></Route>
                    <Route path="productdetail/:productid" element={<ProductDetail />}></Route>
                    <Route path="category" element={<Category />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="checkout" element={<Checkout />}></Route>
                    <Route path="forgotpassword" element={<Forgotpassword />}></Route>
                    <Route path="userregister" element={<UserRegister />}></Route>
                    <Route path="logout" element={<Logout />}></Route>
                    <Route path="*" element={<NoPageFound />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
const root = reactDom.createRoot(document.getElementById('root'));
root.render(<Project />)