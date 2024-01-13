import './ContactUs.css'


import address_logo from '../../images/address_logo.png'
import phone_logo from '../../images/phone_logo.png'
import time_logo from '../../images/time_logo.png'
import mail_logo from '../../images/mail_logo.png'

const ContactUs = () => {
    return (
        <div>
            <div className="contact__us__title">
                <div>

                    <h1>Contact Us</h1>
                    <p>We love hearing from you, our Shop customers.
                        Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                </div>
            </div>
            <div className="contact__us">

                <div className="contact__us__forms">
                    <div className='contact__us__forms__container'>

                        <div className="contact__us__form">

                            <h2>Your Name *</h2>
                            <input />
                        </div>
                        <div className="contact__us__form">

                            <h2>Your Email *</h2>
                            <input />
                        </div>
                    </div>

                    <div className="contact__us__form">

                        <h2>Your Phone Number *</h2>
                        <input />
                    </div>
                    <div className="contact__us__form__description">

                        <h2>Your Phone Number *</h2>
                        <input />
                    </div>
                    <div className='contact__us__form'>
                        <button>Submit</button>
                    </div>
                </div>
                <div className='contact__us__side'>
                    <div className='contact__us__info'>
                        <div className='contact__us__info__logo'>

                            <img src={address_logo} alt='address_logo' />
                        </div>
                        <div>
                            <h3>Address:</h3>
                            <span>1234 Street Adress City Address, 1234</span>
                        </div>
                    </div>
                    <div className='contact__us__info'>
                        <div className='contact__us__info__logo'>

                            <img src={phone_logo} alt='phone_logo' />
                        </div>
                        <div>
                            <h3>Phone:</h3>
                            <span>(00)1234 5678</span>
                        </div>
                    </div>
                    <div className='contact__us__info'>
                        <div className='contact__us__info__logo'>

                            <img src={time_logo} alt='time_logo' />
                        </div>
                        <div>
                            <h3>We are open:</h3>
                            <p>Monday - Thursday: 9:00 AM - 5:30 PM<p>
                            </p>Friday 9:00 AM - 6:00 PM
                                <p>
                                </p>Saturday: 11:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    <div className='contact__us__info'>
                        <div className='contact__us__info__logo'>

                            <img src={mail_logo} alt='mail_logo' />
                        </div>
                        <div>
                            <h3>E-mail:</h3>
                            <span>shop@email.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs