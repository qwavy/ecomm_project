import { useEffect, useState } from "react"


import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'


import { observer } from "mobx-react-lite"

const DekstoFilter = (products) => {



    const [msiProducts, setMsiProducts] = useState(products.products)

    const [selectedCategories, setSelectedCategories] = useState([])

    const [selectedProcesser, setSelectedProcesser] = useState([])
    const [selectedProcesser_model, setSelectedProcesser_model] = useState([])
    const [selectedMotherboard,setselectedMotherboard] = useState([])
    const [selectedRam,setSelectedRam] = useState([])
    const [selectedSsd, setSelectedSsd] = useState([])
    const [selectedVideo_card,setSelectedVideo_card] = useState([])
    const [selectedBlock_power,setSelectedBlock_power] = useState([])
    const [selectedType_ram,setSelectedType_ram] = useState([])

    const [activeCollapsProcesser, setActiveCollapsProcesser] = useState(false)
    const [activeCollapsProcesser_model, setActiveCollapsProcesser_model] = useState(false)
    const [activeCollapsMotherboard,setActiveCollapsMotherboard] = useState(false)
    const [activeCollapsRam,setActiveCollapsRam] = useState(false)
    const [activeCollapsSsd, setActiveCollapsSsd] = useState(false)
    const [activeCollapsVideo_card,setActiveCollapsVideo_card] = useState(false)
    const [activeCollapsBlock_power,setActiveCollapsBlock_power] = useState(false)
    const [activeCollapsType_ram,setActiveCollapsType_ram] = useState(false)

    const [searchValue, setSearchValue] = useState("")



    const filtered = msiProducts.filter((item) => {
        const isSelectedProcesser = selectedProcesser.length == 0 || selectedProcesser.includes(item.characteristic.processer)
        const isSelectedProcesser_model = selectedProcesser_model.length == 0 || selectedProcesser_model.includes(item.characteristic.processer_model)
        
        const isSelectedMotherboard = selectedMotherboard.length == 0 || selectedMotherboard.includes(item.characteristic.motherboard)
        const isSelectedRam = selectedRam.length == 0 || selectedRam.includes(item.characteristic.ram)
        const isSelectedSsd = selectedSsd.length == 0 || selectedSsd.includes(item.characteristic.ssd)
        const isSelectedVideo_card = selectedVideo_card.length == 0 || selectedVideo_card.includes(item.characteristic.video_card)
        const isSelectedBlock_power = selectedBlock_power.length == 0 || selectedBlock_power.includes(item.characteristic.block_power)
        const isSelectedType_ram = selectedType_ram.length == 0 || selectedType_ram.includes(item.characteristic.type_ram)


        const isSearchValue = item.name.toLowerCase().includes(searchValue.toLowerCase())


        return isSelectedSsd && isSelectedProcesser && isSelectedProcesser_model && isSelectedMotherboard && isSelectedRam && isSelectedVideo_card && isSelectedBlock_power && isSelectedType_ram && isSearchValue 


    })

    const handleCheckboxChange = (category, value, setSelectedCategories) => {
        if (selectedCategories.includes(value)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        } else {
            setSelectedCategories([...selectedCategories, value])
        }
    }



    useEffect(() => {
        fetch('/products/desktops/')
            .then((res) => res.json())
            .then((data) => setMsiProducts(data))
            .catch((e) => console.log(e))
    }, [])

    const applyFilter = () => {
        products.setProducts(filtered)
        console.log(searchValue)
    }



    const clearFilter = () => {
        products.setProducts(msiProducts)
        setSelectedCategories([])



        setSearchValue("")
    }



    return (
        <div>
            <button class={activeCollapsProcesser_model ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsProcesser_model(!activeCollapsProcesser_model)}><h2>Processer Model</h2><img src={activeCollapsProcesser_model ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsProcesser_model ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.processer_model))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedProcesser_model.includes(item)}
                                onChange={() => handleCheckboxChange('processer_model', item, setSelectedProcesser_model)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsProcesser ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsProcesser(!activeCollapsProcesser)}><h2>Processer </h2><img src={activeCollapsProcesser ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsProcesser ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.processer))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedProcesser.includes(item)}
                                onChange={() => handleCheckboxChange('processer', item, setSelectedProcesser)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsMotherboard ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsMotherboard(!activeCollapsMotherboard)}><h2>Motherboard</h2><img src={activeCollapsMotherboard ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsMotherboard ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.motherboard))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedMotherboard.includes(item)}
                                onChange={() => handleCheckboxChange('motherboard', item, setselectedMotherboard)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsRam ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsRam(!activeCollapsRam)}><h2>Ram</h2><img src={activeCollapsRam ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsRam ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.ram))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedRam.includes(item)}
                                onChange={() => handleCheckboxChange('ram', item, setSelectedRam)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsSsd ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsSsd(!activeCollapsSsd)}><h2>Ssd</h2><img src={activeCollapsSsd ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsSsd ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.ssd))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedSsd.includes(item)}
                                onChange={() => handleCheckboxChange('ssd', item, setSelectedSsd)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsVideo_card ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsVideo_card(!activeCollapsVideo_card)}><h2>Video Card</h2><img src={activeCollapsVideo_card ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsVideo_card ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.video_card))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedVideo_card.includes(item)}
                                onChange={() => handleCheckboxChange('video_card', item, setSelectedVideo_card)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsBlock_power ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsBlock_power(!activeCollapsBlock_power)}><h2>Block power</h2><img src={activeCollapsBlock_power ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsBlock_power ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.block_power))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedBlock_power.includes(item)}
                                onChange={() => handleCheckboxChange('block_power', item, setSelectedBlock_power)}
                            />
                            {item}
                        </li>
                    </ul>
                    </label>
                ))}
            </div>
            <button class={activeCollapsType_ram ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsType_ram(!activeCollapsType_ram)}><h2>Type Ram</h2><img src={activeCollapsType_ram ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsType_ram ? "content activeContent" : "content"}>
                {Array.from(new Set(msiProducts.map((item) => item.characteristic.type_ram))).map((item) => (
                    <label><ul className="filter_column_list">
                        <li>
                            <input
                                type="checkbox"
                                value={item}
                                checked={selectedType_ram.includes(item)}
                                onChange={() => handleCheckboxChange('type_ram', item, setSelectedType_ram)}
                            />
                            {item}
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
export default observer(DekstoFilter)