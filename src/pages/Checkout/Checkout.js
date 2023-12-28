import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {

    return (
        <div className='shipping_site'>
            <div>
                <div>
                    <h1>Shipping Address</h1>
                    <h2>First Name <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>Last Name <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>Company <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>Street Address <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>City <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>Zip <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                    <h2>Phone Number <span className='important'>*</span></h2>
                    <input className='shipping_input' />
                </div>
            <button className='payment__button'><Link to="/payment"><p style={{color:"#0156FF"}}>payment</p></Link></button>
            </div>
        </div>

    );
};


export default Checkout;
