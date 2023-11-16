import '../components/App.css';



import logo from '../images/logo.png';
import pfp from '../images/pfp.png';
import cart_icon from '../images/cart_icon.png';
import search_icon from '../images/search_icon.png';

import banner_1 from '../images/banner_1.png';

import product_1 from '../images/product_1.png'; 

const App = () => {
  return (
    <div className='site'>
      <div className="header">
        <div>
        <img src={logo} />
        </div>
        
        <div className='header__navbar'>
            <p>Laptops</p>
            <p>Desktop PCs</p>
            <p>Networking Devices</p>
            <p>Printers & Scanners</p>
            <p>PC Parts</p>
            <p>All Other Products</p>
            <p>Repairs</p>
            <button>Our Deals</button>

        </div>
        <div className='header__profile'>
          <div>
            <img src={search_icon}/>
          </div>
          <div>
            <img src={cart_icon}/>
          </div>
          <div>
            <img src={pfp}/>
          </div>
          
          
          
        </div>
      </div>
      <div className='content'>
        <div className='content__banner_1'>
          <img src={banner_1}/>
        </div>
        <div className='content__products'>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
          <div className='content__product'>
            <img src={product_1}/>
            <h3 className='content__product__title'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
            <span className='content__product__price'>$499.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 