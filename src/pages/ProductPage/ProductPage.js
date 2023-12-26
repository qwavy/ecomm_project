// import { observer } from "mobx-react-lite"
import products_store from "../../store/products_store"
const ProductPage = () => {

    console.log(products_store.pro)

    return(
        <div>
            {[products_store.productIdProps].map((product) => <div>
                {product[0]}
            </div>)}
        </div>
    )


}

// export default observer(ProductPage)
export default (ProductPage)
