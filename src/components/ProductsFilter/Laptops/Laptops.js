import { useState } from "react"
import products_store from "../../../store/products_store"

const Laptops = () => {
    const [selectedCategories,setSelectedCategories] = useState([])
    const [msiLaptops,setMsiLaptops] = useState(products_store.msi_laptops)
    const [selectedSsd,setSelectedSsd] = useState([])

    const handleCheckboxChange = (category,value,setSelectedCategories) => {
        if(selectedCategories.includes(value)){
            setSelectedCategories(selectedCategories.filter((c) => c !== value))
        }else{
            setSelectedCategories([...selectedCategories,value])
        }
    }

    const filteredLaptops = msiLaptops.filter((item) => {
        const isSelectedSsd = selectedSsd.length == 0 || selectedSsd.includes(item.characteristic.ssd)

        return isSelectedSsd
    })

    return(
        <div>
            {Array.from(new Set(msiLaptops.map((item) => item.characteristic.ssd))).map((ssd) => (
                <label>
                    <input
                     type="checkbox"
                     value={ssd}
                     checked={selectedSsd.includes(ssd)}
                     onChange={() => handleCheckboxChange('ssd',ssd,setSelectedSsd)}/>
                {ssd}
                </label>
            ))}
            {filteredLaptops.map((laptop) => <div>
                {laptop.name}
            </div>)}
        </div>
    )
}
export default Laptops