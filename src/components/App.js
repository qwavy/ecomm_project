import MainPage from '../components/MainPage/MainPage'
import products_store from '../store/products_store';
import ProductsPage from './ProductsPage';
// import pr from '../store/products_store';

const App = () => {
    return ( 
        <div>
            {/* <MainPage/> */}
            <ProductsPage/>
        </div>    
    );
}
 
export default App;