import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import RenderCategoryInputs from "./RenderCategoryInputs";

import './Admin.css'


const Admin = () => {


    const [products, setProducts] = useState([])

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(
        'https://c.dns-shop.ru/thumb/st1/fit/500/500/f9ded1c4f0272c4965b71eb9e03c89d1/8f294b10338291df08061a7370eb823c8686d7e9b7e323d9ef8065a61fbf902c.jpg.webp'
    );
    const [productCategory, setProductCategory] = useState("laptop");
    const [productCharacteristic, setProductCharacteristic] = useState({

    });

    useEffect(() => {
        fetch('/products/')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        if (productCategory === "laptop") {

            setProductCharacteristic({
                id: 99,
                name: 'MSI Modern 14 B11MOU',
                category: 'laptop',
                price: 440,
                old_price: 600,
                image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp',
                // characteristic: {
                processer: 'intel',
                processer_model: 'I3-1115G4',
                ram: 8,
                ssd: 256,
                display: 14,
                display_hz: '60 hz',
                video_card: 'UHD Graphics Xe G4 48EUs'
                // }
            })
        } else if (productCategory === "monitor") {
            setProductCharacteristic({
                screenSize: 0,
                screenHz: "",
            });
        }
        // Добавьте другие категории по аналогии
    }, [productCategory]);

    const handleInputChange = (field, value) => {
        setProductCharacteristic({
            ...productCharacteristic,
            [field]: value,
        });
    };

    const addProduct = async () => {
        const product = {
            id: products.length + 1,
            name: productName,
            price: productPrice,
            image: productImg,
            category: productCategory,
            characteristic: productCharacteristic,
        };


        try {
            const url = "/admin/addProduct/";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();
            console.log("Полученные данные:", responseData);
        } catch (error) {
            console.error("Ошибка при выполнении POST-запроса:", error);
        }
    };



    return (
        <div className="admin__panel__site">

            <div>
                <div>
                    <h1>Main </h1>
                    <label>

                        <h3>Product Name</h3>
                        <input
                            placeholder="Product Name"
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </label>
                    <h3>Product Price</h3>
                    <label>

                        <input
                            placeholder="Product Price"
                            type="number"
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </label>
                    <h3>Product Image</h3>
                    <label>

                        <input
                            placeholder="Product Image"
                            type="string"
                            onChange={(e) => setProductImg(e.target.value)}
                        />
                    </label>
                    <label>

                    <h3>Select Product Category</h3>
                        <select
                            name="select"
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            <option value="laptop">Laptop</option>
                            <option value="desktop">Desktop</option>
                            <option value="monitor">Monitor</option>
                            <option value="motherboard">Motherboard</option>
                        </select>
                    </label>
                </div>
                <h1>
                    Characteristic
                </h1>
                <RenderCategoryInputs productCategory={productCategory} productCharacteristic={productCharacteristic} handleInputChange={handleInputChange} />
                <button onClick={() => addProduct()}>Add Product</button>
            </div>
        </div>

    );
};

export default observer(Admin);
