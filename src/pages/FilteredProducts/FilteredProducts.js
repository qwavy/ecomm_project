import { useEffect, useState } from "react"
import products_store from "../../store/products_store"
import './FilteredProducts.css'
import MotherboardFilter from "../../components/ProductsFilter/Motherboards/MotherboardsFilter"


import opened_pointer from '../../images/opened_pointer.png'
import closed_pointer from '../../images/closed_pointer.png'


import filteredProductsArr from '../../store/products_store'
import { observer } from "mobx-react-lite"
import MonitorsFilter from "../../components/ProductsFilter/Monitors/MonitorsFilter"
import Laptops from "../../components/ProductsFilter/Laptops/Laptops"
// import { observer } from "mobx-react-lite"

const FilteredProducts = () => {
    const [msiProducts, setMsiProducts] = useState(products_store.msi_motherboard)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)

    const [activeCollaps,setActiveCollaps] = useState(false)
    const [activeCollapsContent,setActiveCollapsContent] = useState(false)


    // const [filtered]

    useEffect(() => {
        setCountFilteredProducts(filteredProducts.length)
    }, [filteredProducts])
    useEffect(() => {
        setFilteredProducts(msiProducts)
    }, [])
    useEffect(() => {

    },[activeCollaps])
    const filter = () => {
        console.log(products_store.products)
        setFilteredProducts(products_store.filteredProductsArr)
    }
    const clear = () => {
        setFilteredProducts(msiProducts)
    }
    return (
        <div className="site">
            <h1>
                {products_store.counter}
            </h1>

            <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>
            
            <div className="filter_content">
                <div className="filter_column">
                    <button class={activeCollaps ? "collapsible active" : "collapsible"} onClick={() => setActiveCollaps(!activeCollaps)}><h2>Motherboard Filter</h2><img src={activeCollaps ? opened_pointer : closed_pointer}/></button>
                    <div class={activeCollaps ? "content activeContent" : "content"}>
                        {/* <MotherboardFilter/> */}
                        {/* <MonitorsFilter/> */}
                        <Laptops/>
                    <button onClick={() => filter()} className="apply_button">Apply Filters</button>
                    <button onClick={() => clear()}>Clear Filters</button>
                    </div>
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