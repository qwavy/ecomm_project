import { useState } from "react";

const Admin = () => {

    // const product = {
    //     id: 1,
    //     name: 'MSI Modern 14 B11MOU ggg',
    //     category: 'laptop',
    //     price: 440,
    //     old_price: 600,
    //     img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp',
    //     characteristic: {
    //         processer: 'intel',
    //         processer_model: 'I3-1115G4',
    //         ram: 8,
    //         ssd: 256,
    //         display: 14,
    //         display_hz: '60 hz',
    //         video_card: 'UHD Graphics Xe G4 48EUs'
    //     }
    // }

    const [product, setProduct] = useState({

    })

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [productImg, setProductImg] = useState("https://c.dns-shop.ru/thumb/st1/fit/500/500/589efa18969713b0b8e583cfcbda531e/6274664fe9eb2bcc9a3de254f1b082ba84c17ef6c79d65b245c525f56b5dfb4c.jpg.webp")

    const addProduct = async () => {
        setProduct({
            name: productName,
            price:productPrice,
            img:productImg
        })
        try {
            const url = 'http://localhost:5000/api/product/create'; // Замените на ваш эндпоинт для добавления в корзину

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Дополнительные заголовки могут быть добавлены по необходимости
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Полученные данные:', responseData);
        } catch (error) {
            console.error('Ошибка при выполнении POST-запроса:', error);
        }
    }

    const addCart = async() => {
        setProduct({
            name: productName,
            price:productPrice,
            img:productImg
        })
        try {
            const url = 'http://localhost:5000/api/basket/basket'; // Замените на ваш эндпоинт для добавления в корзину

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Дополнительные заголовки могут быть добавлены по необходимости
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Полученные данные:', responseData);
        } catch (error) {
            console.error('Ошибка при выполнении POST-запроса:', error);
        }
    }


    return (
        <div>
            <input onChange={(e) => setProductName(e.target.value)} />
            <input onChange={(e) => setProductPrice(e.target.value)} />
            <button onClick={() => addProduct()}>add product</button>
            <button onClick={() => addCart()}>add cart</button>
        </div>
    )
}
export default Admin