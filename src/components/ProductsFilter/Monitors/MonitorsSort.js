import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsSort = () => {

    const [msiProducts,setMsiProducts] = useState(products_store.msi_motherboard)

    const handleByPrice = () => {
        const compare = (a,b) => {
            if (a.price > b.price) return 1;
            if (b.price > a.price) return -1;
        }
        const sorted = msiProducts.sort(compare)
        setMsiProducts(sorted)
        console.log(sorted)
        
        // setMsiProducts([])
    }

    return(
        <div>
            <button onClick={() => handleByPrice()}>sdfgsdlfkgjsdlfkgjlk</button>
            {msiProducts.map((product) => (
                <div>
                    {product.name}
                </div>
            ))}
        </div>
    )
}

export default MonitorsSort