import { useEffect, useState } from "react"


import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'


import { observer } from "mobx-react-lite"



const Laptops = (products) => {
    const [msiLaptops, setMsiLaptops] = useState(products.laptops)

    const [selectedCategories, setSelectedCategories] = useState([])

    const [selectedSsd, setSelectedSsd] = useState([])
    const [selectedProcesser, setSelectedProcesser] = useState([])
    const [selectedProcesser_model, setSelectedProcesser_model] = useState([])
    const [selectedRam, setSelectedRam] = useState([])
    const [selectedDisplay, setSelectedDisplay] = useState([])
    const [selectedDisplay_hz, setSelectedDisplay_hz] = useState([])
    const [selectedVideocard, setSelectedVideocard] = useState([])

    const [activeCollapsProduct, setActiveCollapsProduct] = useState(false);
    const [activeCollapsSsd, setActiveCollapsSsd] = useState(false);
    const [activeCollapsProcesser, setActiveCollapsProcesser] = useState(false);
    const [activeCollapsProcesser_model, setActiveCollapsProcesser_model] = useState(false)
    const [activeCollapsRam, setActiveCollapsRam] = useState(false)
    const [activeCollapsDisplay, setActiveCollapsDisplay] = useState(false)
    const [activeCollapsDisplay_hz, setActiveCollapsDisplay_hz] = useState(false)
    const [activeCollapsVideocard, setActiveCollapsVideocard] = useState(false)




    const filtered = msiLaptops.filter((item) => {
        const isSelectedSsd = selectedSsd.length == 0 || selectedSsd.includes(item.characteristic.ssd)
        const isSelectedProcesser = selectedProcesser.length == 0 || selectedProcesser.includes(item.characteristic.processer)
        const isSelectedProcesser_model = selectedProcesser_model.length == 0 || selectedProcesser_model.includes(item.characteristic.processer_model)
        const isSelectedRam = selectedRam.length == 0 || selectedRam.includes(item.characteristic.ram)
        const isSelectedDisplay = selectedDisplay.length == 0 || selectedDisplay.includes(item.characteristic.display)
        const isSelectedDisplay_hz = selectedDisplay_hz.length == 0 || selectedDisplay_hz.includes(item.characteristic.display_hz)
        const isSelectedVideocard = selectedVideocard.length == 0 || selectedVideocard.includes(item.characteristic.video_card)


        return isSelectedSsd && isSelectedProcesser && isSelectedProcesser_model && isSelectedRam && isSelectedDisplay && isSelectedDisplay_hz && isSelectedVideocard
    })


    const handleCheckboxChange = (category, value, setSelectedCategories) => {
        if (selectedCategories.includes(value)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        } else {
            setSelectedCategories([...selectedCategories, value])
        }
    }


    useEffect(() => {
        fetch('/products/laptops/')
            .then((res) => res.json())
            .then((data) => {
                setMsiLaptops(data)
            })
            .catch((e) => console.log(e))


    }, [])


    const applyFilter = () => {
        products.setLaptops(filtered)
    }

    const clearFilter = () => {
        products.setLaptops(msiLaptops)
        setSelectedCategories([])
        
        setSelectedSsd([])
        setSelectedProcesser([])
        setSelectedProcesser_model([])
        setSelectedRam([])
        setSelectedDisplay([])
        setSelectedDisplay_hz([])
        setSelectedVideocard([])

        setActiveCollapsSsd(false);
        setActiveCollapsProcesser(false);
        setActiveCollapsProcesser_model(false)
        setActiveCollapsRam(false)
        setActiveCollapsDisplay(false)
        setActiveCollapsDisplay_hz(false)
        setActiveCollapsVideocard(false)
    }


    return (
        <div>

            <button class={activeCollapsSsd ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsSsd(!activeCollapsSsd)}><h2>Ssd</h2><img src={activeCollapsSsd ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsSsd ? "content activeContent" : "content"}>
                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.ssd))).map((ssd) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={ssd}
                                checked={selectedSsd.includes(ssd)}
                                onChange={() => handleCheckboxChange('ssd', ssd, setSelectedSsd)} />
                            {ssd} GB

                        </li>
                    </ul>
                    </label>

                ))}
            </div>
            <button class={activeCollapsProcesser_model ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsProcesser_model(!activeCollapsProcesser_model)}><h2>Processer Model</h2><img src={activeCollapsProcesser_model ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsProcesser_model ? "content activeContent" : "content"}>
                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.processer_model))).map((processer_model) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={processer_model}
                                checked={selectedProcesser_model.includes(processer_model)}
                                onChange={() => handleCheckboxChange('processer_model', processer_model, setSelectedProcesser_model)}
                            />
                            {processer_model}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsProcesser ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsProcesser(!activeCollapsProcesser)}><h2>Processer Company</h2><img src={activeCollapsProcesser ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsProcesser ? "content activeContent" : "content"}>
                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.processer))).map((processer) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={processer}
                                checked={selectedProcesser.includes(processer)}
                                onChange={() => handleCheckboxChange('processer', processer, setSelectedProcesser)}
                            />
                            {processer}
                        </li>
                    </ul>

                    </label>
                ))}
            </div>
            <button class={activeCollapsRam ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsRam(!activeCollapsRam)}><h2>Ram</h2><img src={activeCollapsRam ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsRam ? "content activeContent" : "content"}>
                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.ram))).map((ram) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={ram}
                                checked={selectedRam.includes(ram)}
                                onChange={() => handleCheckboxChange('ram', ram, setSelectedRam)}
                            />
                            {ram}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsDisplay ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsDisplay(!activeCollapsDisplay)}><h2>Display</h2><img src={activeCollapsDisplay ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsDisplay ? "content activeContent" : "content"}>
                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.display))).map((display) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={display}
                                checked={selectedDisplay.includes(display)}
                                onChange={() => handleCheckboxChange('display', display, setSelectedDisplay)}
                            />
                            {display}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>

            <button class={activeCollapsDisplay_hz ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsDisplay_hz(!activeCollapsDisplay_hz)}><h2>Display Hz</h2><img src={activeCollapsDisplay_hz ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsDisplay_hz ? "content activeContent" : "content"}>

                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.display_hz))).map((display_hz) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={display_hz}
                                checked={selectedDisplay_hz.includes(display_hz)}
                                onChange={() => handleCheckboxChange('display_hz', display_hz, setSelectedDisplay_hz)}
                            />
                            {display_hz}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsVideocard ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsVideocard(!activeCollapsVideocard)}><h2>Videocard</h2><img src={activeCollapsVideocard ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsVideocard ? "content activeContent" : "content"}>

                {Array.from(new Set(msiLaptops.map((item) => item.characteristic.video_card))).map((videocard) => (
                    <label><ul>
                        <li>
                            <input
                                type="checkbox"
                                value={videocard}
                                checked={selectedVideocard.includes(videocard)}
                                onChange={() => handleCheckboxChange('videocard', videocard, setSelectedVideocard)}
                            />
                            {videocard}
                        </li>
                    </ul>

                    </label>
                ))}
            </div>
            <button onClick={() => applyFilter()} className="apply_button">Apply Filters</button>
            <button onClick={() => clearFilter()} className="apply_button">Clear Filters</button>

        </div>

    )
}
export default observer(Laptops)