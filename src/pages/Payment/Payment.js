/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 12 2020 23:38:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/
import { useState } from "react";
import React from "react";
import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/es/styles-compiled.css";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from "./Payment.css";

function Payment() {
    const data = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    const [cardDetails, setCardDetails] = useState(data);

    const handleInputFocus = (e) => {
        setCardDetails({ ...cardDetails, focus: e.target.name });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const check = () => {
        if(cardDetails){
            
        }
    }

    return (
        <div className="payment__site">
            <div className={styles.cardContainer}>
                <Cards
                    cvc={cardDetails.cvc}
                    expiry={cardDetails.expiry}
                    focused={cardDetails.focus}
                    name={cardDetails.name}
                    number={cardDetails.number}
                />
                <div>
                    <form className={styles.cardForm}>
                        <input
                            type="number"
                            name="number"
                            placeholder="Card Number"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={cardDetails.number}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={cardDetails.name}
                        />
                        <div className={styles.bottom}>
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY Expiry"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.expiry}
                            />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.cvc}
                                maxLength={3}
                            />
                        </div>
                    </form>
                </div>
            <button onClick={check}>pay</button>
            </div>
        </div>

    );
}

export default Payment;