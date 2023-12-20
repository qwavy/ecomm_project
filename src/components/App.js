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

import { Route,Routes,Link } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Payment from '../pages/Payment/Payment';

const App = () => {
    return ( 
        <div>
            <Header/>
            {/* <NewsPage/> */}

            {/* <Login/> */}
            {/* <FilteredProducts/> */}


            {/* <MainPage/>  */}


            {/* <ProductsPage/> */}
            <Routes>
                <Route path='*' element={<MainPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/products' element={<FilteredProducts />}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/payment' element={<Payment/>}/>
            </Routes>
        </div>    
    );
}
 
export default App