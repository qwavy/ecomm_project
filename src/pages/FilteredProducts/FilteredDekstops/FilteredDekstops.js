
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
import Desktops from '../../../components/ProductsFilter/Dekstop/DekstopFilter'
import LaptopsSort from "../../../components/ProductsFilter/Laptops/LaptopsSort"

// react context

import { ProductContext } from "../../../context/ProductIdContext"


const FilteredProducts = () => {


    const [msiProducts, setMsiProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)

    const [searchFilter, setSearchFitler] = useState("")

    const [activeCollaps, setActiveCollaps] = useState(false)
    const [activeCollapsContent, setActiveCollapsContent] = useState(false)


    const { changeId } = useContext(ProductContext);


    useEffect(() => {
        fetch('/products/desktops/')
            .then((res) => res.json())
            .then((data) => {
                console.log({ msiProducts })
                setMsiProducts(data)
            })
            .catch((e) => console.log(e))
    }, [])


    useEffect(() => {
        setCountFilteredProducts(msiProducts.length)
    }, [msiProducts])

    const addCart = (product) => {
        fetch('/addCart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        });
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

    const addFavourites = () => {

    }



    return (
        <div className="site">

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
                        <Desktops products={msiProducts} setProducts={setMsiProducts} />
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
    )
}
export default observer(FilteredProducts)