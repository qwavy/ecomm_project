import logo from '../images/Logo.png';
import '../components/App.css';
const App = () => {
  return (
    <div className='site'>
      <div className="header">
        <img src={logo} />
        <div className='header__navbar'>
          {/* <ul>
            <li><a>Laptops</a></li>
            <li><a>Desktop PCs</a></li>
            <li><a>Networking Devices</a></li>
            <li><a>Printers & Scanners</a></li>
            <li><a>PC Parts</a></li>
            <li><a>All Other Products</a></li>
            <li><a>Repairs</a></li>
          </ul> */}
          <div>
          <a>Laptops</a>
            <a>Desktop PCs</a>
            <a>Networking Devices</a>
            <a>Printers & Scanners</a>
            <a>PC Parts</a>
            <a>All Other Products</a>
            <a>Repairs</a>
          <button>Our Deals</button>
          </div>

        </div>
        <div className='header__profile'>

        </div>
      </div>

    </div>
  )
}

export default App 