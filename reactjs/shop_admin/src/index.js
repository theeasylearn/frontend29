import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import Category from './Category';
import ChangePassword from './ChangePassword.js';
import EditCategory from './EditCategory.js';
import EditProduct from './EditProduct.js';
import ForgotPassword from './Forgotpassword.js';
import AdminLogin from './Login.js';
import AdminOrders from './Orders.js';
import PrintOrder from './PrintOrder.js';
import Products from './Product.js';
import Users from './User.js';
import ViewOrderDetail from './ViewOrderDetail.js';
import ViewProductDetail from './ViewProductDetail.js';
import FileNotFound from './FileNotFound.js';
import DashBoard from './DashBoard.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin />} />
            <Route path='add-category' element={<AddCategory />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='edit-category' element={<EditCategory/>} />
            <Route path='edit-product' element={<EditProduct />} />
            <Route path='category' element={<Category />} />
            <Route path='product' element={<Products />} />
            <Route path='change-password' element={<ChangePassword />} />
            <Route path='orders' element={<AdminOrders />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='print-orders' element={<PrintOrder />} />
            <Route path='users' element={<Users />} />
            <Route path='view-order-detail' element={<ViewOrderDetail />} />
            <Route path='view-product-detail/:productid' element={<ViewProductDetail />} />
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='*' element={<FileNotFound />} />
        </Routes>
    </BrowserRouter>)
}
root.render(<MyRouter />);
