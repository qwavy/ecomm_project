import { Route, Routes, Link } from 'react-router-dom';



import '../Header/Header.css'

import pfp from '../../images/pfp.png';
import cart_icon from '../../images/cart_icon.png';
import search_icon from '../../images/search_icon.png';
import logo from '../../images/Logo.png'
import favorite_icon from '../../images/Favorite.png'



import products_store from '../../store/products_store';


const Header = () => {

  const changePage = (page) => {
    products_store.setFilterPage(page)
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

          <Link to="/laptops">
            <p onClick={() => changePage("laptop")}>Laptops</p>
          </Link>
          <Link to="/dekstops">
            <p onClick={() => changePage("dekstop")}>Desktop PCs</p>
          </Link>
          <Link to="/monitors">
            <p onClick={() => changePage("monitor")}>Monitors</p>
          </Link>
          <Link to="/motherboards">
            <p onClick={() => changePage("motherboard")}>Motherboards</p>
          </Link>
          <Link to="/news">
            <p>News</p>
          </Link>
          <Link to="/ContactUs">
            <p>Contact Us</p>
          </Link>
          <Link to="/AboutUs">
            <p>About Us</p>
          </Link>
          <Link to="/Admin">
            <p>Admin Panel</p>
          </Link>


        </div>
        <div className='header__profile'>
          <div>
            <Link to="/favourite">
              {/* <img src={search_icon} /> */}
              <img src={favorite_icon}/>
            </Link>
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