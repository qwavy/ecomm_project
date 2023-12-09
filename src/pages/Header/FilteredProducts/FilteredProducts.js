import { useEffect, useState } from "react"
import products_store from "../../../store/products_store"
import '../FilteredProducts/FilteredProducts.css'
import MotherboardFilter from "../../../components/ProductsFilter/Motherboards/MotherboardsFilter"

import filteredProductsArr from '../../../store/products_store'
import { observer } from "mobx-react-lite"
// import { observer } from "mobx-react-lite"

const FilteredProducts = () => {
    const [msiProducts, setMsiProducts] = useState(products_store.msi_motherboard)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)


    


    // const [filtered]

    useEffect(() => {
        setCountFilteredProducts(filteredProducts.length)
    }, [filteredProducts])
    useEffect(() => {
        setFilteredProducts(msiProducts)
    }, [])
    const filterr = () => {
        console.log(products_store.products)
        setFilteredProducts(products_store.filteredProductsArr)
    }

    return (
        <div className="site">
            <h1>
                {products_store.counter}
            </h1>

            <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>
            <button onClick={() => filterr()}>button</button>
            <div className="filter_content">
                <div className="filter_column">
                    <p>A Collapsible:</p>
                    <button class="collapsible">Open Collapsible</button>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    {/* <MotherboardFilter/> */}
                </div>
                <div className="msi_products">
                    {products_store.filteredProductsArr.map((desktop) => <div className='msi_product'>
                        <img src={desktop.image} alt='car' className='msi_image' />
                        <p className='msi_laptop_name'>{desktop.name}</p>
                        <p><s>{desktop.old_price}$</s></p>
                        <span>{desktop.price}$</span>
                    </div>)}
                </div>

            </div>


        </div>
    )
}
export default (FilteredProducts)