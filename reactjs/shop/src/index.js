import React from "react";
import reactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from "./UserLogIn";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import CategoryPage from "./CategoryPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import Forgotpassword from "./Forgotpassword";
import UserRegister from "./UserRegister";
import ErrorPage from "./ErrorPage";

class Project extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="userlogin" element={<UserLogin />}></Route>
                    <Route index path="/" element={<Home />}></Route>
                    <Route path="product" element={<Product />}></Route>
                    <Route path="productdetail" element={<ProductDetail />}></Route>
                    <Route path="category" element={<CategoryPage />}></Route>
                    <Route path="cart" element={<CartPage />}></Route>
                    <Route path="checkout" element={<Checkout />}></Route>
                    <Route path="forgotpassword" element={<Forgotpassword />}></Route>
                    <Route path="userregister" element={<UserRegister />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
const root = reactDom.createRoot(document.getElementById('root'));
root.render(<Project />)