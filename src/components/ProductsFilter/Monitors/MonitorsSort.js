import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsSort = () => {

    const [msiProducts,setMsiProducts] = useState(products_store.msi_dekstops)

    const handleByPrice = () => {

    }

    return(
        <div>
            <button onClick={() => handleByPrice()}></button>
        </div>
    )
}

export default MonitorsSort