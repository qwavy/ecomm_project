import React, { useEffect, useState } from 'react';
// observer
import products_store from '../../store/products_store';

import './Cart.css'

import useStore from '../../store/products_store'
import bin from '../../images/bin.png'
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [totalAmount,setTotalAmount] = useState(0)

    const [cartProducts, setCartProducts] = useState([])

    const products = [{
        id: 1,
        name: 'MSI Modern 14 B11MOU',
        category: 'laptop',
        price: 440,
        old_price: 600,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp',
        characteristic: {
            processer: 'intel',
            processer_model: 'I3-1115G4',
            ram: 8,
            ssd: 256,
            display: 14,
            display_hz: '60 hz',
            video_card: 'UHD Graphics Xe G4 48EUs'
        }
    }]

    useEffect(() => {
        fetch('/cartProducts/')
            .then((res) => res.json())
            .then((data) => {
                setCartProducts(data)
            })
            .catch((e) => console.log(e))

        for(let i = 0;i < cartProducts.length;i++){
            setTotalAmount(totalAmount+cartProducts[i].price)
        }
    }, [])

    // const store = useStore(); // замените на реальное получение вашего MobX-стора

    const handleDelete = (productId) => {
        products_store.deleteProduct(productId);
    };

    const test = () => {

    }


    return (
        <div>

            <div className='cart__site'>

                <div className='cart_products'>

                    {cartProducts.map((product) => (
                        <div >
                            <div className='cart_container'>

                                <div key={product.id} className='cart_product' style={{ border: "none" }}>
                                    <div>

                                        <img src={product.image} alt={product.name} className='cart_image' style={{ width: "170px" }} />
                                    </div>
                                    <div>

                                        <p className='cart_name'>{product.name}</p>
                                    </div>

                                    <p><s>{product.old_price}$</s></p>
                                    <div className="msi_product_container">
                                        <span className='cart_price'>{product.price}$</span>
                                    </div>
                                </div>

                                {/* <div>
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
                        </div> */}
                                <button style={{ backgroundColor: "white", border: "none" }}><img src={bin} style={{ width: "30px", height: "30px" }} onClick={() => handleDelete(product.id)} /></button>
                            </div>
                            <hr className='cart_vektor'></hr>
                        </div>
                    ))}
                </div>

                <div className='checkout_side'>
                    <h1>Summary</h1>
                    <p>Estimate Shipping and Tax</p>
                    <div className='summary_side'>
                        <h2>Shipping</h2>
                        <h2>21 $</h2>
                    </div>
                    <div className='summary_side'>
                        <h2>Tax</h2>
                        <h2>2 $</h2>
                    </div>
                    <div className='summary_side'>
                        <h2>GST</h2>
                        <h2>11 $</h2>
                    </div>
                    <div className='summary_side'>
                        <h2>Order total</h2>
                        <h2>{totalAmount}$</h2>
                    </div>
                    <Link to="/Checkout">
                        <button className='checkout__button'>Checkout</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default observer(Cart);
