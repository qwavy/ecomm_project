import MainPage from '../components/MainPage/MainPage'
import products_store from '../store/products_store';
import ProductsPage from './ProductsPage';
import ProductsFilter from './ProductsFilter/ProductsFilter'
import Header from '../pages/Header/Header';
import FilteredProducts from '../pages/Header/FilteredProducts/FilteredProducts';
import MonitorsSort from './ProductsFilter/Monitors/MonitorsSort';
import { observer } from 'mobx-react-lite';
// import pr from '../store/products_store';

const App = () => {
    return ( 
        <div>
            <Header/>
            <FilteredProducts/>
            
            {/* <MainPage/> */}
            {/* <ProductsPage/> */}
            {/* <ProductsFilter/> */}
        </div>    
    );
}
 
export default App