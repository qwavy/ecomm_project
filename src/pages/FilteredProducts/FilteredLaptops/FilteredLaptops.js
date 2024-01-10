import { useEffect, useState } from "react"
import products_store from "../../../store/products_store"
import MotherboardFilter from "../../../components/ProductsFilter/Motherboards/MotherboardsFilter"


import '..//FilteredProducts.css'

import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'
import cart_icon from '../../../images/cart_icon.png';
import favorite_icon from '../../../images/Favorite.png'


import { observer } from "mobx-react-lite"
import Laptops from "../../../components/ProductsFilter/Laptops/Laptops"
// import { observer } from "mobx-react-lite"




const FilteredProducts = () => {
    const [msiProducts, setMsiProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)

    const [activeCollaps, setActiveCollaps] = useState(false)
    const [activeCollapsContent, setActiveCollapsContent] = useState(false)


    useEffect(() => {
        fetch('/products/laptops/')
            .then((res) => res.json())
            .then((data) => {
                console.log({msiProducts})
                setMsiProducts(data)
            })
            .catch((e) => console.log(e))
        // setFilteredProducts(msiProducts)
    }, [])

    const addCart = (product) => {
        fetch('/posts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
          });

    }

    const addFavourites = (product) => {
        products_store.addFavourite(product)
        console.log(products_store.favourites)
    }



    return (
        <div className="site">


            <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>

            <div className="filter_content">
                <div className="filter_column">
                    <button className={activeCollaps ? "collapsible active" : "collapsible"} onClick={() => setActiveCollaps(!activeCollaps)}><h2>Filter</h2><img src={activeCollaps ? opened_pointer : closed_pointer} /></button>
                    <div className={activeCollaps ? "content activeContent" : "content"}>
                        <Laptops laptops={msiProducts} setLaptops={setMsiProducts}/>
                    </div>
                </div>
                <div className="msi_products">
                    {msiProducts.map((product) => <div className='msi_product'>
                        <img src={product.image} alt='car' className='msi_image' style={{ width: "170px" }} />
                        <p className='msi_laptop_name'>{product.name}</p>
                        <p><s>{product.old_price}$</s></p>
                        <div className="msi_product_container">

                            <span>{product.price}$</span>
                            <button onClick={() => addFavourites(product)} style={{ backgroundColor: "white", border: "none", paddingBottom: "10px" }}>
                                <img src={favorite_icon} />
                            </button>
                            <button onClick={() => addCart(product)} style={{ backgroundColor: "white", border: "none", paddingBottom: "10px" }}>
                                <img src={cart_icon} className="msi_cart" />
                            </button>

                        </div>




                    </div>)}

                </div>

            </div>


        </div >
    )
}
export default observer(FilteredProducts)