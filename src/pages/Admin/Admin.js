import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

const Admin = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp"
    );
    const [productCategory, setProductCategory] = useState("laptop");
    const [productCharacteristic, setProductCharacteristic] = useState({
        processer: "",
        processer_model: "",
        ram: 0,
        ssd: 0,
        display: 0,
        display_hz: "",
        video_card: "",
    });

    useEffect(() => {
        if (productCategory === "laptop") {
            //   setProductCharacteristic({
            //     processer: "",
            //     processer_model: "",
            //     ram: 0,
            //     ssd: 0,
            //     display: 0,
            //     display_hz: "",
            //     video_card: "",
            //   });
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
            name: productName,
            price: productPrice,
            img: productImg,
            category: productCategory,
            characteristic: productCharacteristic,
        };

        try {
            const url = "http://localhost:5000/api/product/create";
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

    const addCart = async () => {
        const product = {
            name: productName,
            price: productPrice,
            img: productImg,
            category: productCategory,
            characteristic: productCharacteristic,
        };

        console.log(product);

        try {
            const url = "http://localhost:5000/api/basket/basket";
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

    const renderCategoryInputs = () => {
        if (productCategory === "laptop") {
            return (
                <div>
                    <label>
                        Processor Model:
                        <input
                            type="text"
                            value={productCharacteristic.processer_model}
                            onChange={(e) =>
                                handleInputChange("processer_model", e.target.value)
                            }
                        />
                    </label>

                    <label>
                        RAM:
                        <input
                            type="number"
                            value={productCharacteristic.ram}
                            onChange={(e) => handleInputChange("ram", e.target.value)}
                        />
                    </label>

                    <label>
                        SSD:
                        <input
                            type="number"
                            value={productCharacteristic.ssd}
                            onChange={(e) => handleInputChange("ssd", e.target.value)}
                        />
                    </label>
                </div>
            );
        } else if (productCategory === "monitor") {
            return (
                <div>
                    <label>
                        Screen Size:
                        <input
                            type="number"
                            value={productCharacteristic.screenSize}
                            onChange={(e) =>
                                handleInputChange("screenSize", e.target.value)
                            }
                        />
                    </label>

                    <label>
                        Screen Hz:
                        <input
                            type="text"
                            value={productCharacteristic.screenHz}
                            onChange={(e) =>
                                handleInputChange("screenHz", e.target.value)
                            }
                        />
                    </label>
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            <input
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                placeholder="Product Price"
                type="number"
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <select
                name="select"
                onChange={(e) => setProductCategory(e.target.value)}
            >
                <option value="laptop">Laptop</option>
                <option value="desktop">Desktop</option>
                <option value="monitor">Monitor</option>
                <option value="motherboard">Motherboard</option>
            </select>
            {renderCategoryInputs()}
            <button onClick={addProduct}>Add Product</button>
            <button onClick={addCart}>Add Cart</button>
        </div>
    );
};

export default observer(Admin);
