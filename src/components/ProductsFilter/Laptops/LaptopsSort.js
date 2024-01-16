import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"

const LaptopsSort = (products) => {

    const options = [
        { value: '', text: "Sort" },
        { value: 'PriceLow', text: "Sort By Price Low" },
        { value: 'PriceHigh', text: "Sort By Price High" },
        { value: 'Sale', text: "Sort By Sale" },
    ]

    const [selectedOptionValue, setSelectedOptionValue] = useState(options[0].value)



    useEffect(() => {

        if (selectedOptionValue == "PriceLow") {
            sortPriceLow()
        } else if (selectedOptionValue == "PriceHigh") {
            sortPriceHigh()
        } else if (selectedOptionValue == "Sale") {
            sortSale()
        }

    }, [selectedOptionValue])


    const handleChange = (event) => {
        setSelectedOptionValue(event.target.value)
    }

    const sortPriceLow = () => {
        const sorted = products.laptops.sort((product1, product2) => {
            return product1.price - product2.price
        })
        products.setLaptops([...sorted])
    }

    const sortPriceHigh = () => {
        const sorted = products.laptops.sort((product1, product2) => {
            return product2.price - product1.price
        })
        products.setLaptops([...sorted])
    }

    const sortSale = () => {
        const sorted = products.laptops.sort((product1, product2) => {
            return product1.old_price - product2.old_price
        })
        products.setLaptops([...sorted])
    }




    return (
        <div>

            <label>
                <select value={selectedOptionValue} onChange={handleChange}  className="filter_sort">
                    {options.map((option) => <option key={option.value} value={option.value}>
                        {option.text}
                    </option>)}
                </select>
            </label>
        </div>
    )
}

export default observer(LaptopsSort)