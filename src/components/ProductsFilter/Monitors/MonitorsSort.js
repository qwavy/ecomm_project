import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsSort = () => {

    const [msiProducts,setMsiProducts] = useState(products_store.msi_dekstops)

    const handleByPrice = () => {
        msiProducts.
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