import msi_console from '../../images/msi_console.png'
import intel_banner from '../../images/intelbanner_news.png'
import contactform_banner from '../../images/contact_form_news.png'
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
                <div className='news__description'>
                    <h1>
                        Outplay the Competittion
                    </h1>
                    <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.

                        *Performance compared to i7-9700. Specs varies by model.</p>
                </div>
                <img src={intel_banner} />
            </div>
        </div>
    )
}
export default NewsPage