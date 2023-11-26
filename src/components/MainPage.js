import React, { useState } from 'react';

// components 
import '../components/App.css';


// mobx 
import products_store from '../store/products_store';
import { observer } from "mobx-react-lite"

// icons for layout 
// import logo from '../images/logo.png'; 
import pfp from '../images/pfp.png';
import cart_icon from '../images/cart_icon.png';
import search_icon from '../images/search_icon.png';
import banner_1 from '../images/banner_1.png';
import logo from '../images/Logo.png'


import msi_laptop from '../images/msi_laptop.png'

const MainPage = observer(() => {

  const [products, setProducts] = useState(products_store.products)
  const [msiLaptops, setMsiLaptops] = useState(products_store.msi_laptops)
  const [msiDekstops,setMsiDekstops] = useState(products_store.msi_dekstops)
  // console.log(products) 

  const msiLaptopsFive = msiLaptops.slice(0, 5);
  const msiDekstopsFive = msiDekstops.slice(0,5)

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
      <div className='content'>
        <div className='content__banner_1'>
          <img src={banner_1} />
        </div>
        <div className='content__products'>
          {products.map((product) => <div className='content__product' key={product.id}>
            <img src={product.image} />
            <h3 className='content__product__title'>{product.name}</h3>
            <span className='content__product__price'>{product.price}</span>
          </div>)}
        </div>
        <div className='msi_content'>
          <div className='msi_banner'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiLaptopsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} />
              <p>{laptop.name}</p>
              <span>{laptop.price}</span>
            </div>)}
          </div>
        </div>
        <div className='msi_content'>
          <div className='msi_banner'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiDekstopsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} />
              <p>{laptop.name}</p>
              <span>{laptop.price}</span>
            </div>)}
          </div>
        </div>
        <div className='msi_content'>
          <div className='msi_banner'>
            <p>msi laptops</p>
            <p><a>all products</a></p>
          </div>
          <div className='msi_products'>
            {msiLaptopsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} />
              <p>{laptop.name}</p>
              <span>{laptop.price}</span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
})

export default MainPage