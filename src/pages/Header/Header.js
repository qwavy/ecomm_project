import { Route, Routes, Link } from 'react-router-dom';



import '../Header/Header.css'

import pfp from '../../images/pfp.png';
import cart_icon from '../../images/cart_icon.png';
import search_icon from '../../images/search_icon.png';
import logo from '../../images/Logo.png'

import products_store from '../../store/products_store';


const Header = () => {

  const changePage = (page) => {
    products_store.Filterpage = page
    console.log(page)
  }


  return (
    <div>
      <div className="header">
        <div>
          <Link to="/home">
            <img src={logo} />
          </Link>
        </div>

        <div className='header__navbar'>

          <Link to="/products">
            <p onClick={() => changePage("laptop")}>Laptops</p>
          </Link>
          <Link to="/products">
            <p onClick={() => changePage("dekstop")}>Desktop PCs</p>
          </Link>
          <Link to="/products">
            <p onClick={() => changePage("monitor")}>Monitors</p>
          </Link>
          <Link to="/products">
            <p onClick={() => changePage("motherboard")}>Motherboards</p>
          </Link>
          <Link to="/news">
            <p>News</p>
          </Link>
          <Link to="/">
            <p>About us</p>
          </Link>
          <Link to="/">
            <button>Chekout</button>
          </Link>

        </div>
        <div className='header__profile'>
          <div>
            <img src={search_icon} />
          </div>
          <div>
            <Link to='/cart'>
              <img src={cart_icon} />
            </Link>
          </div>
          <div>
            <Link to='/login'>
            <img src={pfp} />
            </Link>
          </div>



        </div>
      </div>
    </div>

  )
}
export default Header