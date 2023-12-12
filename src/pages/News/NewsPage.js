import msi_console from '../../images/msi_console.png'
import intel_banner from '../../images/intelbanner_news.png'
import contactform_banner from '../../images/contact_form_news.png'

import news__intel from '../../images/news__intel.png'
import news__nvidia from '../../images/news__nvidia.png'
import news__ssd from '../../images/news__ssd.png'
import news__ram from '../../images/news__ram.png'

import './NewsPage.css'



const NewsPage = () => {
    return (
        <div>
            <div className="header__content">
                <div className="product__description">
                    <h1>MSI MPG Trident 3</h1>
                    <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                </div>
                <div className="product">
                    <img src={msi_console} />
                </div>
            </div>
            <div className='news__content'>
                <div className='news__processor'>
                    <div className='news__processor__description'>
                        <h1>
                            Outplay the Competittion
                        </h1>
                        <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.

                            *Performance compared to i7-9700. Specs varies by model.</p>
                    </div>
                    <div className='news__processor__banner'>

                        <img src={intel_banner} />
                    </div>
                </div>
                <div className='news__contactform'>
                    <div className='news__contactform__description'>
                        <button>Contact Us</button>
                    </div>
                    <div className='news__contactform__baner'>
                        <img src={contactform_banner} />
                    </div>
                </div>
                <div className='news__brands'>
                    <div className='news__brands__description'>
                        <div>
                            <h1>Features</h1>
                            <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
                        </div>

                    </div>
                    <div className='news__brands__container'>
                        <div className='news__brand'>
                            <img src={news__intel} />
                            <p><span>Intel® Core™ i7</span> processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        </div>
                        <div className='news__brand'>
                            <img src={news__nvidia} />
                            <p>The new <span>GeForce® RTX SUPER™ </span>Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                        </div>
                        <div className='news__brand'>
                            <img src={news__ssd} />
                            <p>Unleash the full potential with the latest<span>SSD technology</span> , the NVM Express. 6 times faster than traditional SATA SSD.</p>
                        </div>
                        <div className='news__brand'>
                            <img src={news__ram} />
                            <p>Featuring the latest <span>10th Gen Intel® Core™</span> processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsPage