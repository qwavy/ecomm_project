import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsFilter = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [msiMonitors, setMsiMonitors] = useState(products_store.msi_monitors)
    const [selectedDisplay_hz, setSelectedDisplay_hz] = useState([])
    const [selectedDisplayResolution,setSelectedDisplayResolution] = useState([])
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
        return isDisplay_hzSelected && isDisplayResolutionSelected
    })

    return (
        <div>
            <h2>Display Hz</h2>
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
            <h2>Display Resolution</h2>
            {Array.from(new Set(msiMonitors.map((item) => item.characteristic.resolution))).map((resolution) => (
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
            ))}
        </div>
    )
}
export default MonitorsFilter