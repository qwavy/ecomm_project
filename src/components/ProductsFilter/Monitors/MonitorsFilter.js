import { useState } from "react"
import products_store from "../../../store/products_store"

import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'

import search_icon from '../../../images/search_icon.png';

const MonitorsFilter = () => {


    // display: 23.8,
    // matrix: 'IPS',
    // color_depth: '8 bit',
    // brightness: 250

    const [selectedCategories, setSelectedCategories] = useState([])
    const [msiMonitors, setMsiMonitors] = useState(products_store.msi_monitors)
    const [selectedDisplay_hz, setSelectedDisplay_hz] = useState([])
    const [selectedDisplayResolution, setSelectedDisplayResolution] = useState([])
    const [selectedResponseTime, setSelectedResponseTime] = useState([])
    const [selectedDisplay, setSelectedDisplay] = useState([])
    const [selectedMatrix, setSelectedMatrix] = useState([])
    const [selectedColordepth, setSelectedColordepth] = useState([])
    const [selectedBrightness, setSelectedBrightness] = useState([])


    const [activeCollapsDisplay_hz, setActiveCollapsDisplay_hz] = useState(false);
    const [activeCollapsDisplayResolution, setActiveCollapsDisplayResolution] = useState(false);
    const [activeCollapsResponseTime, setActiveCollapsResponseTime] = useState(false);
    const [activeCollapsDisplay, setActiveCollapsDisplay] = useState(false);
    const [activeCollapsMatrix, setActiveCollapsMatrix] = useState(false);
    const [activeCollapsColordepth, setActiveCollapsColordepth] = useState(false);
    const [activeCollapsBrightness, setActiveCollapsBrightness] = useState(false);


  const [value,setValue] = useState("")




    const handleCheckboxChange = (category, value, setSelectedCategories) => {
        if (selectedCategories.includes(value)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        } else {
            setSelectedCategories([...selectedCategories, value])
        }
    }
    products_store.filteredProductsArr = msiMonitors.filter((item) => {
        const isDisplay_hzSelected = selectedDisplay_hz.length == 0 || selectedDisplay_hz.includes(item.characteristic.display_hz)
        const isDisplayResolutionSelected = selectedDisplayResolution.length == 0 || selectedDisplayResolution.includes(item.characteristic.resolution)
        const isResponseTimeSelected = selectedResponseTime.length == 0 || selectedResponseTime.includes(item.characteristic.response_time)
        const isDisplaySelected = selectedDisplay.length == 0 || selectedDisplay.includes(item.characteristic.display)
        const isMatrixSelected = selectedMatrix.length == 0 || selectedMatrix.includes(item.characteristic.matrix)
        const isColordepthSelected = selectedColordepth.length == 0 || selectedColordepth.includes(item.characteristic.color_depth)
        const isBrightnessSelected = selectedBrightness.length == 0 || selectedBrightness.includes(item.characteristic.brightness)

        const inputChange = item.name.toLowerCase().includes(value.toLowerCase())

        return isDisplay_hzSelected && isDisplayResolutionSelected && isResponseTimeSelected && isDisplaySelected && isMatrixSelected && isColordepthSelected && isBrightnessSelected && inputChange
    })

    return (
        <div>
      <input onChange={(e) => setValue(e.target.value)}/> 
            <button class={activeCollapsResponseTime ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsResponseTime(!activeCollapsResponseTime)}><h2>Response Time</h2><img src={activeCollapsResponseTime ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsResponseTime ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.response_time))).map((response_time) => (
                    <label key={response_time}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={response_time}
                                    checked={selectedResponseTime.includes(response_time)}
                                    onChange={() => handleCheckboxChange('response_time', response_time, setSelectedResponseTime)} />
                                {response_time}
                            </li>
                        </ul>

                    </label>
                ))}
            </div>
            <button class={activeCollapsDisplayResolution ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsDisplayResolution(!activeCollapsDisplayResolution)}><h2>Display resolution</h2><img src={activeCollapsDisplayResolution ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsDisplayResolution ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.display))).map((display) => (
                    <label key={display}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={display}
                                    checked={selectedDisplay.includes(display)}
                                    onChange={() => handleCheckboxChange('display', display, setSelectedDisplay)} />
                                {display} inches
                            </li>
                        </ul>

                    </label>
                ))}

            </div>

            <button class={activeCollapsMatrix ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsMatrix(!activeCollapsMatrix)}><h2>Martix</h2><img src={activeCollapsMatrix ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsMatrix ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.matrix))).map((martix) => (
                    <label key={martix}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={martix}
                                    checked={selectedMatrix.includes(martix)}
                                    onChange={() => handleCheckboxChange('display_hz', martix, setSelectedDisplay_hz)} />
                                {martix}
                            </li>
                        </ul>

                    </label>
                ))}
            </div>
            
            <button class={activeCollapsDisplay_hz ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsDisplay_hz(!activeCollapsDisplay_hz)}><h2>Display Hz</h2><img src={activeCollapsDisplay_hz ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsDisplay_hz ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.display_hz))).map((display_hz) => (
                    <label key={display_hz}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={display_hz}
                                    checked={selectedDisplay_hz.includes(display_hz)}
                                    onChange={() => handleCheckboxChange('display_hz', display_hz, setSelectedDisplay_hz)} />
                                {display_hz}
                            </li>
                        </ul>

                    </label>
                ))}
            </div>
            <button class={activeCollapsColordepth ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsColordepth(!activeCollapsColordepth)}><h2>Color Depth</h2><img src={activeCollapsColordepth ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsColordepth ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.color_depth))).map((display_hz) => (
                    <label key={display_hz}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={display_hz}
                                    checked={selectedDisplay_hz.includes(display_hz)}
                                    onChange={() => handleCheckboxChange('display_hz', display_hz, setSelectedDisplay_hz)} />
                                {display_hz}
                            </li>
                        </ul>

                    </label>
                ))}</div>
            <button class={activeCollapsBrightness ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsBrightness(!activeCollapsBrightness)}><h2>Brightness</h2><img src={activeCollapsBrightness ? opened_pointer : closed_pointer} /></button>
            <div class={activeCollapsBrightness ? "content activeContent" : "content"}>
                {Array.from(new Set(msiMonitors.map((item) => item.characteristic.brightness))).map((resolution) => (
                    <label key={resolution}>
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                                <input
                                    type="checkbox"
                                    value={resolution}
                                    checked={selectedDisplayResolution.includes(resolution)}
                                    onChange={() => handleCheckboxChange('resolution', resolution, setSelectedDisplayResolution)} />
                                {resolution}
                            </li>
                        </ul>

                    </label>
                ))}</div>
        </div>
    )
}
export default MonitorsFilter