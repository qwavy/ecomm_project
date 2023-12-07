import { useEffect, useState } from "react"
import products_store from "../../../store/products_store"
import '../FilteredProducts/FilteredProducts.css'



const FilteredProducts = () => {
    const [msiProducts, setMsiProducts] = useState(products_store.msi_motherboard)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [countFilteredProducts, setCountFilteredProducts] = useState(0)

    useEffect(() => {
        setCountFilteredProducts(filteredProducts.length)
    }, [filteredProducts])
    useEffect(() => {
        setFilteredProducts(msiProducts)
    }, [])
    const filterr = () => {
        console.log(products_store.products)
        setFilteredProducts(products_store.msi_laptops)
    }

    return (
        <div>
            <h1 className="filter_title">Filtered products ({countFilteredProducts})</h1>
            <button onClick={() => filterr()}>button</button>
            <div className="filter_content">
                <div className="filter_column">
                    filter
                </div>
                <div className="msi_products">
                    {filteredProducts.map((desktop) => <div className='msi_product'>
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
export default FilteredProducts