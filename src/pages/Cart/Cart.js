import { useState } from "react"
import cart_icon from '../../images/cart_icon.png';


const Cart = (product) => {

    let data
    console.log(product)
    const test = async () => {
        try {
            const url = 'https://example.com/api/basket/basket'; // Замените на ваш эндпоинт для добавления в корзину

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
            <img src={cart_icon} className="msi_cart" onClick={() => test()}/>

            {/* <button onClick={() => test()}>test</button> */}
            {/* {data.map((data) => <div>
                {data}
            </div>)} */}
        </div>
    )
}
export default Cart


