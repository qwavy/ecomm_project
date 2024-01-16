import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

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
import content_news_1 from '../../images/content_news_1.png'

const MainPage = () => {

  const [products, setProducts] = useState(products_store.products)
  const [msiLaptops, setMsiLaptops] = useState([])
  const [msiDekstops, setMsiDekstops] = useState([])
  const [msiMonitors, setMsiMonitors] = useState(products_store.msi_monitors)
  const [msiHeadphones, setMsiHeadphones] = useState(products_store.msi_headphones)
  const [msiMotherboard, setMsiMotherboard] = useState(products_store.msi_motherboard)
  // console.log(products) 

  const [contentNews,setContentNews] = useState([
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
    {title:"If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",image:content_news_1},
  ])

  // const [msiLaptopsFive,setMsiLaptopsFive] = useState([])
  const msiLaptopsFive = msiLaptops.slice(0, 5)
  const msiDekstopsFive = msiDekstops.slice(0, 5)
  const msiMonitorsFive = msiMonitors.slice(0, 5)
  const msiHeadphonesFive = msiHeadphones.slice(0, 5)
  const msiMotherboardFive = msiMotherboard.slice(0, 5)

  const [data, setData] = useState()

  useEffect(() => {
    // запрос на ноутбуки
    fetch('/products/laptops/')
      .then((res) => res.json())
      .then((data) => {
        setMsiLaptops(data)
      })
      .catch((e) => console.log(e))


    fetch('/products/desktops/')
      .then((res) => res.json())
      .then((data) => {
        setMsiDekstops(data)
      })
      .catch((e) => console.log(e))

    fetch('/news')
      .then((res) => res.json())
      .then((data) => setContentNews(data))
  }, [])



  return (
    <div className='site'>
      {/* <button onClick={console.log(data)}>TEST</button> */}
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
            <Link to="/products">
              <p>msi laptops</p>
              <p><a>all products</a></p>
            </Link>

          </div>
          <div className='msi_products'>
            {msiLaptopsFive.map((laptop) => <div className='msi_product'>
              <img src={laptop.image} className='msi_image' />
              <p className='msi_laptop_name'>{laptop.name}</p>
              <div className='msi_product_price'>

                <p><s>{laptop.old_price}$</s></p>
                <span>{laptop.price}$</span>
              </div>
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
              <img src={desktop.image} alt='car' className='msi_image' />
              <p className='msi_laptop_name'>{desktop.name}</p>
              <div className='msi_product_price'>

                <p><s>{desktop.old_price}$</s></p>
                <span>{desktop.price}$</span>
              </div>
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
              <img src={laptop.image} alt='car' className='msi_image' />
              <p className='msi_laptop_name'>{laptop.name}</p>
              <div className='msi_product_price'>

                <p><s>{laptop.old_price}$</s></p>
                <span>{laptop.price}$</span>
              </div>
            </div>)}
          </div>
        </div>
        <div className='content__news'>
          <h1>Follow us on Instagram for News, Offers & More</h1>
          <div className='content__news__container'>
            {contentNews.map((news) => <div className='content__news__card'>
              <img src={news.image}/>
              <p className='content__news__card__text'>{news.title}</p>
            </div>)}
          </div>
        </div>


      </div>
    </div>
  )
}

export default MainPage