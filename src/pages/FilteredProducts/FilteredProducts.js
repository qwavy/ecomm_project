// import { useEffect, useState } from "react"
// import products_store from "../../store/products_store"
// import './FilteredProducts.css'
// import MotherboardFilter from "../../components/ProductsFilter/Motherboards/MotherboardsFilter"


// import opened_pointer from '../../images/opened_pointer.png'
// import closed_pointer from '../../images/closed_pointer.png'
// import cart_icon from '../../images/cart_icon.png';
// import favorite_icon from '../../images/Favorite.png'


// import filteredProductsArr from '../../store/products_store'
// import { observer } from "mobx-react-lite"
// import MonitorsFilter from "../../components/ProductsFilter/Monitors/MonitorsFilter"
// import Laptops from "../../components/ProductsFilter/Laptops/Laptops"
// import DekstoFilter from "../../components/ProductsFilter/Dekstop/DekstopFilter"
// import Cart from "../Cart/Cart"
// import { Link } from "react-router-dom"
// import ProductPage from "../ProductPage/ProductPage"
// // import { observer } from "mobx-react-lite"


// const FilterComponent = () => {
//     switch (products_store.Filterpage) {
//         case "laptop":
//             return <Laptops />
//         case "monitor":
//             return <MonitorsFilter />
//         case "motherboard":
//             return <MotherboardFilter />
//         case "dekstop":
//             return <DekstoFilter />
//     }
// }

// const FilteredProducts = () => {
//     const [msiProducts, setMsiProducts] = useState(products_store.msi_motherboard)
//     const [filteredProducts, setFilteredProducts] = useState([])
//     const [countFilteredProducts, setCountFilteredProducts] = useState(0)

//     const [activeCollaps, setActiveCollaps] = useState(false)
//     const [activeCollapsContent, setActiveCollapsContent] = useState(false)


//     // const [filtered]

//     useEffect(() => {
//         setCountFilteredProducts(filteredProducts.length)
//     }, [filteredProducts])
//     useEffect(() => {
//         setFilteredProducts(msiProducts)
//     }, [])
//     useEffect(() => {

//     }, [activeCollaps])
//     const changeId = (product) => {
//         // products_store.productIdProps = product
//     }
//     const addCart = (product) => {
//         products_store.addProduct(product)
//         // products_store.cart_total += product.price
//     }

//     const addFavourites = (product) => {
//         products_store.addFavourite(product)
//         console.log(products_store.favourites)
//     }

//     const test = async (product) => {

//         try {
//             const url = 'http://localhost:5000/api/basket/basket'; // Замените на ваш эндпоинт для добавления в корзину

//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Дополнительные заголовки могут быть добавлены по необходимости
//                 },
//                 body: JSON.stringify(product),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const responseData = await response.json();
//             console.log('Полученные данные:', responseData);
//         } catch (error) {
//             console.error('Ошибка при выполнении POST-запроса:', error);
//         }
//     }


//     return (
//         <div className="site">


//             <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>

//             <div className="filter_content">
//                 <div className="filter_column">
//                     <button className={activeCollaps ? "collapsible active" : "collapsible"} onClick={() => setActiveCollaps(!activeCollaps)}><h2>Filter</h2><img src={activeCollaps ? opened_pointer : closed_pointer} /></button>
//                     <div className={activeCollaps ? "content activeContent" : "content"}>
//                         <FilterComponent />
//                     </div>
//                 </div>
//                 <div className="msi_products">
//                     {products_store.filteredProductsArr.map((product) => <div className='msi_product'>
//                             <img src={product.image} alt='car' className='msi_image' style={{ width: "170px" }} />
//                             <p className='msi_laptop_name'>{product.name}</p>
//                             <p><s>{product.old_price}$</s></p>
//                             <div className="msi_product_container">

//                                 <span>{product.price}$</span>
//                                 <button onClick={() => addFavourites(product)} style={{backgroundColor:"white",border:"none",paddingBottom:"10px"}}>
//                                     <img src={favorite_icon} />
//                                 </button>
//                                 <button onClick={() => addCart(product)} style={{backgroundColor:"white",border:"none",paddingBottom:"10px"}}>
//                                     <img src={cart_icon} className="msi_cart"  />
//                                 </button>

//                             </div>




//                     </div>)}

//             </div>

//         </div>


//         </div >
//     )
// }
// export default observer(FilteredProducts)