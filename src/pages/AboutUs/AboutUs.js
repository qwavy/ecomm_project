
import './AboutUs.css'

import about_us_office from '../../images/office.png'


const AboutUs = () => {

    return (
        <div>
            <div className="about__us">
                About Us
                <div className='about__us__office'>
                    <div className='about__us__office__info'>

                        <div className='about__us__office__title'>
                            <h1>
                                A Family That Keeps On Growing
                            </h1>
                        </div>
                        <div className='about__us__office__description'>
                            We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.

                            Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                        </div>

                    </div>
                    <div>
                        <img src={about_us_office} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs