import { Link } from 'react-router-dom'
import './Footer.css'

import footer__payment from '../../images/footer_payment.png'
import footer__instagramm from '../../images/footer_instagramm.png'
import footer__facebook from '../../images/footer_facebook.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='newsletter__container'>
                <div>
                    <h1>Sign Up To Our Newsletter.</h1>
                    <p>Be the first to hear about the latest offers.</p>
                </div>
                <div className='newsletter'>
                    <input placeholder='Your Email' />
                    <button>Subscibe</button>
                </div>
            </div>
            <div className='footer__container'>
                <div>

                    <ul>
                        <li><h3>
                            Information
                        </h3></li>
                        <li><Link to='/news' />News</li>
                        <li><Link to='/terms' />Shop Terms & Conditions</li>
                        <li><Link to='/' />Privacy Policy</li>
                        <li><Link to='/' />Contact Us</li>
                        <li><Link to='/' />Newsletter Subsciption</li>
                        <li><Link to='/' />About Us</li>
                        <li><Link to='/' />About Zip</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h3>Pc Parts</h3></li>
                        <li>CPUS</li>
                        <li>Add On Cards</li>
                        <li>Hard Drives (Internal)</li>
                        <li>Graphic Cards</li>
                        <li>Keyboards / Mice</li>
                        <li>Motherboards</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h3>Laptops</h3></li>
                        <li>Desktop PCs</li>
                        <li>Custom PCs</li>
                        <li>Servers</li>
                        <li>MSI All-In-One PCs</li>
                        <li>HP/Compaq PCs</li>
                        <li>Tecs PCs</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <h3>Laptops</h3>
                        </li>
                        <li>Evryday Use Notebooks
                        </li>
                        <li>MSI Workstation Series
                        </li>
                        <li>MSI Prestige Series
                        </li>
                        <li>Tablets and Pads</li>
                        <li>Netbooks</li>
                        <li>Infinity Gaming Notebooks</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h3>Address</h3></li>
                        <li>Address: 1234 Street Adress City Address, 1234</li>
                        <li>Phones: (00) 1234 5678</li>
                        <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                        <li>Friday: 9:00 AM - 6:00 PM</li>
                        <li>Saturday: 11:00 AM - 5:00 PM</li>
                        <li>E-mail: shop@email.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer__social'>
                <div>
                    <img src={footer__instagramm}/>
                    <img src={footer__facebook}/>
                </div>
                <div>
                    <img src={footer__payment}/>
                </div>
                <div>
                    Copyright © 2020 Shop Pty. Ltd.
                </div>
            </div>
        </div>
    )
}
export default Footer