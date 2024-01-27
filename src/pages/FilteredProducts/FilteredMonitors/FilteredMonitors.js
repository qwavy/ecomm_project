// import { useEffect, useState } from "react"
// import products_store from "../../../store/products_store"
// // import './FilteredProducts.css'


// import opened_pointer from '../../../images/opened_pointer.png'
// import closed_pointer from '../../../images/closed_pointer.png'
// import cart_icon from '../../../images/cart_icon.png';
// import favorite_icon from '../../../images/Favorite.png'


// import { observer } from "mobx-react-lite"
// import MonitorsFilter from "../../../components/ProductsFilter/Monitors/MonitorsFilter"

// // import { observer } from "mobx-react-lite"




// const FilteredProductsMonitors = () => {
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
//                         <MonitorsFilter/>
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
// export default observer(FilteredProductsMonitors)



import { observer } from "mobx-react-lite"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';





// design
import '..//FilteredProducts.css'

import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'
import cart_icon from '../../../images/cart_icon.png';
import favorite_icon from '../../../images/Favorite.png'


// components 
import Laptops from "../../../components/ProductsFilter/Laptops/Laptops"
import LaptopsSort from "../../../components/ProductsFilter/Laptops/LaptopsSort"

// react context

import { ProductContext } from "../../../context/ProductIdContext"
import MonitorsFilter from "../../../components/ProductsFilter/Monitors/MonitorsFilter";



const FilteredProductsMonitors = () => {

    const [msiProducts, setMsiProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)

    const [searchFilter, setSearchFitler] = useState("")

    const [activeCollaps, setActiveCollaps] = useState(false)
    const [activeCollapsContent, setActiveCollapsContent] = useState(false)


    const { changeId } = useContext(ProductContext);

    useEffect(() => {
        fetch('/products/monitors')
            .then((res) => res.json())
            .then((data) => setMsiProducts(data))
            .then((e) => console.log(e))
    }, [])

    useEffect(() => {
        setCountFilteredProducts(msiProducts.length)
    }, [msiProducts])


    const addCart = (product) => {
        fetch('/addCart/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        })
        toast.success('Product Added to Cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    const addFavourites = () => { }

    return (
        <div className="site">
            <div>

                <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>
                <div className="filter_header">

                    <div>
                        {/* <input className="filter_search" onChange={(e) => setSearchFitler(e.target.value)}/> */}
                    </div>
                    <div >
                        <LaptopsSort laptops={msiProducts} setLaptops={setMsiProducts} />
                    </div>
                </div>
                <div className="filter_content">
                    <div className="filter_column">
                        <button className={activeCollaps ? "collapsible active" : "collapsible"} onClick={() => setActiveCollaps(!activeCollaps)}><h2>Filter</h2><img src={activeCollaps ? opened_pointer : closed_pointer} /></button>
                        <div className={activeCollaps ? "content activeContent" : "content"}>
                            <MonitorsFilter products={msiProducts} setProducts={setMsiProducts} />
                        </div>
                    </div>
                    <div className="msi_products">

                        {msiProducts.map((product) => <div className='msi_product'>
                            <Link to={`/ProductPage/${product.id}`} onClick={() => changeId(product.id)}>
                                <img src={product.image} alt='car' className='msi_image' style={{ width: "170px" }} />
                                <p className='msi_laptop_name'>{product.name}</p>
                                <p><s>{product.old_price}$</s></p>
                                <div className="msi_product_container">

                                    <span>{product.price}$</span>

                                </div>

                            </Link>
                            <div className="msi_product_buttons">

                                <img src={favorite_icon} onClick={() => addFavourites(product)} />
                                <img src={cart_icon} className="msi_cart" onClick={() => {
                                    addCart(product)
                                }} />
                            </div>


                        </div>)}

                    </div>

                </div>


                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div >
        </div>
    )
}

export default FilteredProductsMonitors

