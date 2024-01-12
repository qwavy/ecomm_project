import MainPage from '../components/MainPage/MainPage'
import products_store from '../store/products_store';
import ProductsPage from './ProductsPage';
import Header from '../pages/Header/Header';
import FilteredProducts from '../pages/FilteredProducts/FilteredProducts';
import NewsPage from '../pages/News/NewsPage';
import MonitorsSort from './ProductsFilter/Monitors/MonitorsSort';
import Login from '../pages/Auth/Login/Login';
// import pr from '../store/products_store';

import { observer } from 'mobx-react-lite';

import { Route, Routes, Link } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Payment from '../pages/Payment/Payment';
import Register from '../pages/Auth/Register/Register';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';
import ProductPage from '../pages/ProductPage/ProductPage';
import Footer from '../pages/Footer/Footer';

import './App.css'
import FilteredMonitors from '../pages/FilteredProducts/FilteredMonitors/FilteredMonitors';
import FilteredDekstops from '../pages/FilteredProducts/FilteredDekstops/FilteredDekstops';
import FilteredMotherboards from '../pages/FilteredProducts/FilteredMotherboards/FilteredMotherboards';
import FilteredLaptops from '../pages/FilteredProducts/FilteredLaptops/FilteredLaptops';
import ContactUs from '../pages/ContactUs/ContactUs';


const App = () => {
    return (
        <div>
            <Header />
            {/* <NewsPage/> */}

            {/* <Login/> */}
            {/* <FilteredProducts/> */}


            {/* <MainPage/>  */}


            {/* <ProductsPage/> */}
            <div style={{minHeight:"980px"}} >
                {products_store.isLogin ?
                    <Routes>


                        <Route path='/home' element={<MainPage />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/laptops' element={<FilteredLaptops />} />
                        <Route path='/monitors' element={<FilteredMonitors />} />
                        <Route path='/dekstops' element={<FilteredDekstops />} />
                        <Route path='/motherboards' element={<FilteredMotherboards />} />
                        <Route path='/productPage' element={<ProductPage />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/news' element={<NewsPage />} />
                        <Route path='/contactUs' element={<ContactUs/>}/>

                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/*' element={<Login />} />

                        {products_store.isAdmin ?
                            <Route path='/admin' element={<Admin />} /> :
                            <Route path='/admin' element={<MainPage />} />

                        }
                    </Routes>}
            </div>


            <Footer />

        </div>
    );
}

export default observer(App)