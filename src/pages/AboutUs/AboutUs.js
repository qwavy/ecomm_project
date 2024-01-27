
import './AboutUs.css'

import about_us_office from '../../images/office.png'
import about_us_history from '../../images/about_us_history.png'
import logo from '../../images/about_us_logo.png'
import about_us_experience from '../../images/about_us_experience.png'
import about_us_quality from '../../images/about_us_quality.png'
import about_us_delivery from '../../images/about_us_delivery.png'
import about_us_photo_1 from '../../images/about_us_photo_1.png'
import about_us_photo_2 from '../../images/about_us_photo_2.png'
import about_us_photo_3 from '../../images/about_us_photo_3.png'

import star from '../../images/star.png'
import pointer from '../../images/closed_pointer.png'

import { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const AboutUs = () => {

    const [reviews, setReviews] = useState([])
    const [currentReview, setCurrentReview] = useState([])
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

    useEffect(() => {
        fetch('/reviews/')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
                setCurrentReview([data[currentReviewIndex]])

                console.log(data[0])
            })
            .catch((e) => console.log(e))
    }, [])


    const nextReview = () => {
        setCurrentReviewIndex(currentReviewIndex + 1)
        setCurrentReview([reviews[currentReviewIndex]])
    }
    const prevReview = () => {
        setCurrentReviewIndex(currentReviewIndex - 1)
        setCurrentReview([reviews[currentReviewIndex]])
    }

    return (
        <div>
            {/* <div className="about__us"> */}
            About Us
            <div className='about__us black'>
                <div className='about__us__info'>

                    <div className='about__us__title'>
                        <h1>
                            A Family That Keeps On Growing
                        </h1>
                    </div>
                    <div className='about__us__description'>
                        We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.

                        Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                    </div>

                </div>
                <div>
                    <img src={about_us_office} />
                </div>
            </div>
            <div className='about__us'>
                <div>
                    <img src={about_us_history} />
                </div>
                <div className='about__us__info'>
                    <div className='about__us__title'>
                        <img src={logo} />
                        <h1>Shop.com</h1>
                    </div>
                    <div className='about__us__description'>
                        <p>Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.</p>
                    </div>
                </div>
            </div>
            <div className='about__us black'>
                <div className='about__us__info'>
                    <div className='about__us__title'>
                        <img src={about_us_experience} />
                        <h1>Now You're In Safe
                            Hands</h1>
                    </div>
                    <div className='about__us__description'>
                        <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.

                            *Performance compared to i7-9700. Specs varies by model.</p>
                    </div>
                </div>
                <div>
                    <img src={about_us_photo_1} />
                </div>
            </div>
            <div className='about__us'>
                <div>
                    <img src={about_us_photo_2} />
                </div>
                <div className='about__us__info'>
                    <div className='about__us__title'>
                        <img src={about_us_quality} />
                        <h1>The Highest Quality of Products</h1>
                    </div>
                    <div className='about__us__description'>
                        <p>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
                    </div>
                </div>
            </div>
            <div className='about__us black'>
                <div className='about__us__info'>
                    <div className='about__us__title'>
                        <img src={about_us_delivery} />
                        <h1>We Deliver to Any Regions</h1>
                    </div>
                    <div className='about__us__description'>
                        <p>We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.</p>
                    </div>
                </div>
                <div>
                    <img src={about_us_photo_3} />
                </div>
            </div>
            <div className='about__us__reviews__container'>
                <img src={pointer} className='left__pointer' onClick={() => nextReview()} />

                {currentReview.map((review) => <div className='about__us__reviews'>
                    <img src={star} />{review.rating}
                    <div className='about__us__review'>
                        <strong>{review.review_text}</strong>
                    </div>
                    <div className='about__us__reviews__author'>
                        <p>-- {review.author}</p>
                    </div>
                </div>)}
                <img src={pointer} className='right__pointer' onClick={() => prevReview()} />
            </div>

        </div>
    )
}

export default AboutUs