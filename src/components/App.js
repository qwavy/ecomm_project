import logo from '../images/Logo.png';
import '../components/App.css';
const App = () => {
  return(
    <div>
      <div className="header">
        <img src={logo}/>
        <div className='header__navbar'>
          <ul>
            <li>Laptops</li>
            <li>Desktop PCs</li>
            <li>Networking Devices</li>
            <li>Printers & Scanners</li>
            <li>PC Parts</li>
            <li>All Other Products</li>
            <li>Repairs</li>
          </ul>
          <button>Our Deals</button>
        </div>
        <div className='header__profile'>

        </div>
      </div>
      
    </div>
  )
}

export default App 