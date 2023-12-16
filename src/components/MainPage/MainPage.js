import React, { useState } from 'react';

// components 
import '../MainPage/MainPage.css';


// mobx 
import products_store from '../../store/products_store';
import { observer } from "mobx-react-lite"

// icons for layout 
// import logo from '../images/logo.png'; 
import pfp from '../../images/pfp.png';
import cart_icon from '../../images/cart_icon.png';
import search_icon from '../../images/search_icon.png';
import logo from '../../images/Logo.png'
import banner_1 from '../../images/banner_1.png';
import msi_laptop from '../../images/msi_laptop.png'

const MainPage = () => {

  const [products, setProducts] = useState(products_store.products)
  const [msiLaptops, setMsiLaptops] = useState(products_store.msi_laptops)
  const [msiDekstops,setMsiDekstops] = useState(products_store.msi_dekstops)
  const [msiMonitors,setMsiMonitors] = useState(products_store.msi_monitors)
  const [msiHeadphones,setMsiHeadphones] = useState(products_store.msi_headphones)
  const [msiMotherboard,setMsiMotherboard] = useState(products_store.msi_motherboard)
  // console.log(products) 

  const msiLaptopsFive = msiLaptops.slice(0,5)
  const msiDekstopsFive = msiDekstops.slice(0,5)
  const msiMonitorsFive = msiMonitors.slice(0,5)
  const msiHeadphonesFive = msiHeadphones.slice(0,5)
  const msiMotherboardFive = msiMotherboard.slice(0,5)
  return (
    <div className='site'>
      {/* <div className="header">
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
            <img src={search_icon} />
          </div>
          <div>
            <img src={cart_icon} />
          </div>
          <div>
            <img src={pfp} />
          </div>



        </div>
      </div> */}
      <div className='content_mainpage'>
        <div className='content__banner_1'>
          <img src={banner_1} />
        </div>
        <div className='content__products'>
          {/* {products.map((product) => <div className='content__product' key={product.id}>
            <img src={product.image} />
            <h3 className='content__product__title'>{product.name}</h3>
            <span className='content__product__price'>{product.price}</span>
          </div>)} */}
        </div>
        <div className='msi_content'>
          <div className='msi_banner laptop'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
          {msiLaptopsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} className='msi_image'/>
              <p className='msi_laptop_name'>{laptop.name}</p>
              <p><s>{laptop.old_price}$</s></p>
              <span>{laptop.price}$</span>
            </div>)}
          </div>
        </div>
        <div className='msi_content'>
          <div className='msi_banner dekstop'>
            <p>msi dekstops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
          {msiDekstopsFive.map((desktop) => <div className='msi_product'>
              <img src={desktop.image} alt='car' className='msi_image'/>
              <p className='msi_laptop_name'>{desktop.name}</p>
              <p><s>{desktop.old_price}$</s></p>
              <span>{desktop.price}$</span>
            </div>)}
          </div>
        </div>
        <div className='msi_content'>
          <div className='msi_banner monitor'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiMonitorsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} alt='car' className='msi_image'/>
              <p className='msi_laptop_name'>{laptop.name}</p>
              <p><s>{laptop.old_price}$</s></p>
              <span>{laptop.price}$</span>
            </div>)}
          </div>
        </div>

        <div className='msi_content'>
          <div className='msi_banner'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiHeadphonesFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} alt='car' className='msi_image'/>
              <p className='msi_laptop_name'>{laptop.name}</p>
              <p><s>{laptop.old_price}$</s></p>
              <span>{laptop.price}$</span>
            </div>)}
          </div>
        </div>
        <div className='msi_content'>
          <div className='msi_banner'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiMotherboardFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} alt='car' className='msi_image'/>
              <p className='msi_laptop_name'>{laptop.name}</p>
              <p><s>{laptop.old_price}$</s></p>
              <span>{laptop.price}$</span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage