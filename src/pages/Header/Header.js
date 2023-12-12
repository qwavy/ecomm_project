import '../Header/Header.css'

import pfp from '../../images/pfp.png';
import cart_icon from '../../images/cart_icon.png';
import search_icon from '../../images/search_icon.png';
import logo from '../../images/Logo.png'

const Header = () => {
    return(
        <div>
               <div className="header">
        <div>
          <img src={logo} />
        </div>

        <div className='header__navbar'>
          <p>Laptops</p>
          <p>Desktop PCs</p>
          <p>Monitors</p>
          <p>Motherboards</p>
          <p>Sale</p>
          <p>About us</p>
          <button>Our Deals</button>

        </div>
        <div className='header__profile'>
          <div>
            <img src={search_icon} />
          </div>
          <div>
            <img src={cart_icon} />
          </div>
          <div>
            <img src={pfp} />
          </div>



        </div>
      </div>    
        </div>

    )
}
export default Header