import { useState } from "react"
import products_store from "../../../store/products_store"

const Laptops = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [msiLaptops, setMsiLaptops] = useState(products_store.msi_laptops)
    const [selectedSsd, setSelectedSsd] = useState([])
    const [selectedProcesser,setSelectedProcesser] = useState([])
    const [selectedProcesser_model, setSelectedProcesser_model] = useState([])
    const handleCheckboxChange = (category, value, setSelectedCategories) => {
        if (selectedCategories.includes(value)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        } else {
            setSelectedCategories([...selectedCategories, value])
        }
    }

    const filteredLaptops = msiLaptops.filter((item) => {
        const isSelectedSsd = selectedSsd.length == 0 || selectedSsd.includes(item.characteristic.ssd)
        const isSelectedProcesser = selectedProcesser.length == 0 || selectedProcesser.includes(item.characteristic.processer)
        const isSelectedProcesser_model = selectedProcesser_model.length == 0 || selectedProcesser_model.includes(item.characteristic.processer_model)
        return isSelectedSsd && isSelectedProcesser && isSelectedProcesser_model
    })

    return (
        <div>
            {Array.from(new Set(msiLaptops.map((item) => item.characteristic.ssd))).map((ssd) => (
                <label>
                    <input
                        type="checkbox"
                        value={ssd}
                        checked={selectedSsd.includes(ssd)}
                        onChange={() => handleCheckboxChange('ssd', ssd, setSelectedSsd)} />
                    {ssd}
                </label>
            ))}
            {Array.from(new Set(msiLaptops.map((item) => item.characteristic.processer_model))).map((processer) => (
                <label>
                    <input
                        type="checkbox"
                        value={processer}
                        checked={selectedProcesser_model.includes(processer)}
                        onChange={() => handleCheckboxChange('processer', processer, setSelectedProcesser_model)}
                    />
                    {processer}
                </label>
            ))}
            {Array.from(new Set(msiLaptops.map((item) => item.characteristic.processer))).map((processer) => (
                <label>
                    <input
                        type="checkbox"
                        value={processer}
                        checked={selectedProcesser.includes(processer)}
                        onChange={() => handleCheckboxChange('processer', processer, setSelectedProcesser)}
                    />
                    {processer}
                </label>
            ))}

            {filteredLaptops.map((laptop) => <div>
                <li key={laptop.id}>
                    <div>{laptop.name}</div>
                    <img src={laptop.image} alt={laptop.name} style={{ width: '100px', height: '100px' }} />
                </li>

            </div>)}
        </div>
    )
}
export default Laptops