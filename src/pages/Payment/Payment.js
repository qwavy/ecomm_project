/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 12 2020 23:38:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { ToastContainer, toast } from 'react-toastify';

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
        toast.success(' Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log("good")
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

                    <form className={styles.cardForm} style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "50px" }}>
                        <input
                            type="number"
                            name="number"
                            placeholder="Card Number"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={cardDetails.number}
                            className="payment__input"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={cardDetails.name}
                            className="payment__input"
                        />
                        <div className={styles.bottom}>
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY Expiry"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.expiry}
                                className="payment__input"
                            />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={cardDetails.cvc}
                                maxLength={3}
                                className="payment__input"
                            />
                        </div>
                    </form>
                </div>
                <button onClick={() => check()} className="payment__button" style={{ width: "125px",marginLeft:"175px" }}><p style={{ display: "flex", justifyContent: "center" }}>pay</p></button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

    );
}

export default Payment;