import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

const Admin = () => {


    const [products,setProducts] = useState([]) 

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
    },[])

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


        // const product = {
        //     id: 99,
        //     name: 'MSI A320M-A PRO ADMIN',
        //     category: "motherboard",
        //     price: 65,
        //     old_price: 90,
        //     image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f9ded1c4f0272c4965b71eb9e03c89d1/8f294b10338291df08061a7370eb823c8686d7e9b7e323d9ef8065a61fbf902c.jpg.webp',
        //     characteristic: {
        //         socket: 'AMD-AM4',
        //         chipset: 'A320',
        //         max_ram: 2,
        //         type_ram: 'DDR4',
        //         form_factor: 'micro-ATX',
        //         max_ram_hz: 3200,
        //         audio_chip: 'Realtek ALC892'
        //     }
        // }

        console.log(product)
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

                    <label>
                        Display:
                        <input
                            type="number"
                            value={productCharacteristic.display}
                            onChange={(e) => handleInputChange("display", e.target.value)}
                        />
                    </label>
                    <label>
                        display_hz:
                        <input
                            type="string"
                            value={productCharacteristic.display_hz}
                            onChange={(e) => handleInputChange("display_hz", e.target.value)}
                        />
                    </label>
                    <label>
                        video_card:
                        <input
                            type="string"
                            value={productCharacteristic.video_card}
                            onChange={(e) => handleInputChange("video_card", e.target.value)}
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
                </div>        //         socket: 'AMD-AM4',
                //         chipset: 'A320',
                //         max_ram: 2,
                //         type_ram: 'DDR4',
                //         form_factor: 'micro-ATX',
                //         max_ram_hz: 3200,
                //         audio_chip: 'Realtek ALC892'
            );
        } else if (productCategory == "motherboard") {
            return (
                <div>
                    <label>

                        <input
                            type="string"
                            value={productCharacteristic.socket}
                            onChange={(e) =>
                                handleInputChange("socket", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="string"
                            value={productCharacteristic.chipset}
                            onChange={(e) =>
                                handleInputChange("chipset", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="number"
                            value={productCharacteristic.max_ram}
                            onChange={(e) =>
                                handleInputChange("max_ram", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="string"
                            value={productCharacteristic.type_ram}
                            onChange={(e) =>
                                handleInputChange("type_ram", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="string"
                            value={productCharacteristic.form_factor}
                            onChange={(e) =>
                                handleInputChange("form_factor", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="number"
                            value={productCharacteristic.max_ram_hz}
                            onChange={(e) =>
                                handleInputChange("max_ram_hz", e.target.value)
                            }
                        />
                    </label>
                    <label>

                        <input
                            type="string"
                            value={productCharacteristic.audio_chip}
                            onChange={(e) =>
                                handleInputChange("audio_chip", e.target.value)
                            }
                        />
                    </label>
                    {/* <label>
                        
                        <input
                            type="string"
                            value={productCharacteristic.}
                            onChange={(e) => 
                                handleInputChange("",e.target.value)
                            }
                        />
                    </label> */}
                </div>
            )
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
            <input
                placeholder="Product Image"
                type="string"
                onChange={(e) => setProductImg(e.target.value)}
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
            <button onClick={() => addProduct()}>Add Product</button>
        </div>
    );
};

export default observer(Admin);
