import React from 'react';
// observer
import products_store from '../../store/products_store';

import './Cart.css'

import useStore from '../../store/products_store'
import bin from '../../images/bin.png'
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const Cart = () => {

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


    // const store = useStore(); // замените на реальное получение вашего MobX-стора

    const handleDelete = (productId) => {
        products_store.deleteProduct(productId);
    };

    return (
        <div>

            <div className='cart__site'>
                <div>

                </div>
                {products_store.cart.map((product) => (
                    <div className='cart__container'>
                        <div key={product.id} className='msi_product' style={{ border: "none" }}>
                            <img src={product.image} alt={product.name} className='msi_image' style={{ width: "170px" }} />
                            <p className='msi_laptop_name'>{product.name}</p>
                            <p><s>{product.old_price}$</s></p>
                            <div className="msi_product_container">
                                <span>{product.price}$</span>
                            </div>
                        </div>

                        <div>
                            {/* Добавляем блок для характеристик в зависимости от категории продукта */}
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
                        <button style={{ backgroundColor: "white", border: "none" }}><img src={bin} style={{ width: "30px", height: "30px" }} onClick={() => handleDelete(product.id)} /></button>
                    </div>
                ))}
                <div>
                </div>
                {/* {products_store.cart_total} */}
            </div>
            <div className='checkout__button'>
                <Link to="/Checkout">

                    <button className='checkout__button'>Checkout</button>
                </Link>
            </div>

        </div>
    );
};

export default observer(Cart);
