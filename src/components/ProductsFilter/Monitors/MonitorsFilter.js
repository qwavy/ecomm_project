import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsFilter = () => {
    const [selectedCategories,setSelectedCategories] = useState([])
    const [msiMonitors,setMsiMonitors] = useState(products_store.msi_monitors)
    const [selectedDisplay_hz,setSelectedDisplay_hz] = useState([])

    const handleCheckboxChange = (category,value,setSelectedCategories) => {
        if(selectedCategories.includes(value)){
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        }else{
            setSelectedCategories([...selectedCategories,value])
        }
    }
    const filteredMonitors = msiMonitors.filter((item) => {
        const isDisplay_hzSelected = selectedDisplay_hz.length == 0 || selectedDisplay_hz.includes(item.characteristic.display_hz)

        return isDisplay_hzSelected
    })

    return(
        <div>
            {Array.from(new Set(msiMonitors.map((item) => item.characteristic.display_hz))).map((display_hz) => (
                <label key={display_hz}>
                    <input
                     type="checkbox"
                     value={display_hz}
                     checked={selectedDisplay_hz.includes(display_hz)}
                     onChange={() => handleCheckboxChange('display_hz',display_hz,setSelectedDisplay_hz)}/>
                     {display_hz}
                </label>
            ))}
            {filteredMonitors.map((monitor) => <div>
                {monitor.name}
            </div>)}
        </div>
    )
}
export default MonitorsFilter