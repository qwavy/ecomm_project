import { useEffect, useState } from "react"

import cart_icon from '../../images/cart_icon.png'



import './ProductPage.css'

const ProductPage = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`/product/${2}`)
            .then((res) => res.json())
            .then((data) => setProduct([data]))
    }, [])


    const addCart = (product) => {
        fetch('/addCart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        });
    }

    return (
        <div className="product__page">
            <div>
                {product.map((product) => <div className="product__page__card">
                    <div>

                        <img src={product.image} />
                    </div>
                    <div className="product__page__info">
                        <h1>{product.name}</h1>
                        <p className="product__page__info__old__price">{product.old_price}</p>
                        <p>{product.price}</p>
                        <button onClick={() => addCart(product)} style={{ backgroundColor: "white", border: "none", paddingBottom: "10px" }}>
                            <img src={cart_icon}/>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export default ProductPage
