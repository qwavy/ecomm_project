import { useEffect, useState } from "react"

import products_store from "../store/products_store"

import './ProductsPage.css'

const ProductsPage = () => {
    const [msiMotherboard, setMsiMotherboard] = useState(products_store.msi_motherboard)
    const [filterActive,setFilterActive] = useState(false)
    // const motherboard_socket_amd_am4_inputCheckbox = document.querySelector("socket_am4_filter")
    // console.log(msiMotherboard)

    const filterButton = (socket) => {
        // setFilterActive(!filterActive)
        // if(filterActive){
        //     setMsiMotherboard(products_store.msi_motherboard) 
        // }
        // else{

        // }
        console.log('The checkbox was toggled'); 
        // if(msiMotherboard == products_store.msi_motherboard){
        //     const filtered = products_store.msi_motherboard.filter((motherboard) => motherboard.characteristic.socket == socket)
        //     setMsiMotherboard(filtered)
        // }else{
        //     setMsiMotherboard(products_store.msi_motherboard)
        // }


        if(filterActive){
            console.log('gf;kl')
        }
    }

    // useEffect(() => {
    //     // conso
    //     console.log('sad')
    // },[inputCheckbox])
    return (
        <div>
            <div className="container">
                {msiMotherboard.map((laptop) => <div className='msi_product'>
                    <img src={laptop.image} alt='car' className='msi_image' />
                    <p className='msi_laptop_name'>{laptop.characteristic.socket}</p>
                    <p><s>{laptop.old_price}$</s></p>
                    <span>{laptop.price}$</span>
                </div>)}

            </div>
            {/* <input type="checkbox" className="socket_am4_filter" onChange={() => filterButton('AMD-AM4')} checked={filterActive}/>
            <input type="checkbox" className="socket_am5_filter" onChange={() => filterButton('AMD-AM5')} checked={filterActive}/>
            <input type="checkbox" className="socket_am5_filter" onChange={() => filterButton('Intel-LGA1700')} checked={filterActive}/> */}
                        <input type="checkbox" className="socket_am4_filter" onChange={e => setFilterActive(e.target.checked)} checked={filterActive}/>
            <input type="checkbox" className="socket_am5_filter" onChange={e => setFilterActive(e.target.checked)} checked={filterActive}/>
            <input type="checkbox" className="socket_am5_filter" onChange={e => setFilterActive(e.target.checked)} checked={filterActive}/>
        </div>

    )
}

export default ProductsPage