import React, { useEffect, useState, useContext } from "react"

import cart_icon from '../../images/cart_icon.png'


import { ProductContext } from "../../context/ProductIdContext"

import './ProductPage.css'

const ProductPage = () => {

    const [product, setProduct] = useState([])

    const { id } = useContext(ProductContext);

    useEffect(() => {

        fetch(`/product/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)

        })
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
                            <img src={cart_icon} />
                        </button>
                        <div className="product__page__characteristic">
                            <div>
                                {product.category === 'laptop' && (
                                    <div>
                                        <p>Processor: {product.characteristic.processer} {product.characteristic.processer_model}</p>
                                        <p>RAM: {product.characteristic.ram} GB</p>
                                        <p>SSD: {product.characteristic.ssd} GB</p>
                                        <p>Display: {product.characteristic.display} inch, {product.characteristic.display_hz}</p>
                                        <p>Video Card: {product.characteristic.video_card}</p>
                                    </div>
                                )}

                                {product.category === 'desktop' && (
                                    <div>
                                        <p>Processor: {product.characteristic.processer} {product.characteristic.processer_model}</p>
                                        <p>Motherboard: {product.characteristic.motherboard}</p>
                                        <p>RAM: {product.characteristic.ram} GB</p>
                                        <p>SSD: {product.characteristic.ssd} GB</p>
                                        <p>Video Card: {product.characteristic.video_card}</p>
                                        <p>Power: {product.characteristic.block_power}W</p>
                                        <p>Type RAM: {product.characteristic.type_ram}</p>
                                    </div>
                                )}

                                {product.category === 'monitor' && (
                                    <div>
                                        <p>Response Time: {product.characteristic.response_time}</p>
                                        <p>Display: {product.characteristic.display} inch</p>
                                        <p>Display Hz: {product.characteristic.display_hz}</p>
                                        <p>Matrix: {product.characteristic.matrix}</p>
                                        <p>Resolution: {product.characteristic.resolution}</p>
                                        <p>Color Depth: {product.characteristic.color_depth}</p>
                                        <p>Brightness: {product.characteristic.brightness} nits</p>
                                    </div>
                                )}

                                {product.category === 'motherboard' && (
                                    <div>
                                        <p>Socket: {product.characteristic.socket}</p>
                                        <p>Chipset: {product.characteristic.chipset}</p>
                                        <p>Max RAM: {product.characteristic.max_ram} GB</p>
                                        <p>Type RAM: {product.characteristic.type_ram}</p>
                                        <p>Form Factor: {product.characteristic.form_factor}</p>
                                        <p>Max RAM Hz: {product.characteristic.max_ram_hz}</p>
                                        <p>Audio Chip: {product.characteristic.audio_chip}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export default ProductPage
