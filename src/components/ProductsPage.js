import { useEffect, useState } from "react"

import products_store from "../store/products_store"

// import './ProductsPage.css'

const ProductsPage = () => {
    const [msiMotherboards, setMsiMotherboards] = useState(products_store.msi_motherboard)
    
    const filteredMsiMotherboards = []
    let filtered = ''
    const motherboard_socket_amd_am4_inputCheckbox = document.querySelector("socket_am4_filter")
    // const [motherboard_socket_amd_am4_filterActive, setMotherboard_socket_amd_am4_FilterActive] = useState(true)
    let motherboard_socket_amd_am4_filterActive = true

    const motherboard_socket_amd_am5_inputCheckbox = document.querySelector("socket_am5_filter")
    let motherboard_socket_amd_am5_filterActive = false
    // console.log(msiMotherboard)

    const filterButton = (socket,filterActive) => {
        if(filterActive){
            
            if (msiMotherboards == products_store.msi_motherboard) {
                filtered = ''
    
                filtered = products_store.msi_motherboard.filter((motherboard) => motherboard.characteristic.socket == socket)
                filteredMsiMotherboards.push(filtered)
                setMsiMotherboards(filtered)
            } else if (msiMotherboards == filteredMsiMotherboards) {
                filtered = ''
    
                const filtered = products_store.msi_motherboard.filter((motherboard) => motherboard.characteristic.socket == socket)
                filteredMsiMotherboards.push(filtered)
                setMsiMotherboards(filtered)
            }
        }else{
            setMsiMotherboards(products_store.msi_motherboard)
    
        }
        filterActive = !filterActive 

    }


    return (
        <div>
            <div className="container">
                {msiMotherboards.map((laptop) => <div className='msi_product'>
                    <img src={laptop.image} alt='car' className='msi_image' />
                    <p className='msi_laptop_name'>{laptop.characteristic.socket}</p>
                    <p><s>{laptop.old_price}$</s></p>
                    <span>{laptop.price}$</span>
                </div>)}

            </div>
            <input type="checkbox" className="socket_am4_filter" onChange={() => filterButton('AMD-AM4',motherboard_socket_amd_am4_filterActive)}/>
            <input type="checkbox" className="socket_am5_filter" onChange={() => filterButton('AMD-AM5',motherboard_socket_amd_am5_filterActive)}/>
        </div>
// e => setMotherboard_socket_amd_am4_FilterActive(e.target.checked)
    )
}

export default ProductsPage