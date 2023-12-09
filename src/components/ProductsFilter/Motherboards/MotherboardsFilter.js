import React, { useState } from 'react';
import products_store from "../../../store/products_store"
// import filteredProductsArr from '../../../store/products_store'

import { observer } from 'mobx-react-lite';

const MotherboardFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [msiMotherboards, setMsiMotherboards] = useState(products_store.msi_motherboard)
  const [selectedChipsets, setSelectedChipsets] = useState([]);
  const [selectedRamTypes, setSelectedRamTypes] = useState([]);
  const [selectedSocket,setSelectedSocket] = useState([])

  const handleCheckboxChange = (category, value, setSelectedCategories) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
    products_store.counter += 1
  };

  products_store.filteredProductsArr = msiMotherboards.filter((item) => {
    const isChipsetSelected = selectedChipsets.length === 0 || selectedChipsets.includes(item.characteristic.chipset);
    const isRamTypeSelected = selectedRamTypes.length === 0 || selectedRamTypes.includes(item.characteristic.type_ram);
    const isSocketSelected = selectedSocket.length == 0 || selectedSocket.includes(item.characteristic.socket)

    return isChipsetSelected && isRamTypeSelected && isSocketSelected;
  });

  return (
    <div>
      <h2>Motherboard Filter</h2>
      <div>
        {/* Chipset Filter */}
        <h3>Chipset</h3>
        {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.chipset))).map((chipset) => (
          <label key={chipset}>
            <input
              type="checkbox"
              value={chipset}
              checked={selectedChipsets.includes(chipset)}
              onChange={() => handleCheckboxChange('chipset', chipset, setSelectedChipsets)}
            />
            {chipset}
          </label>
        ))}

        {/* RAM Type Filter */}
        <h3>RAM Type</h3>
        {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.type_ram))).map((ramType) => (
          <label key={ramType}>
            <input
              type="checkbox"
              value={ramType}
              checked={selectedRamTypes.includes(ramType)}
              onChange={() => handleCheckboxChange('ramType', ramType, setSelectedRamTypes)}
            />
            {ramType}
          </label>
        ))}
        <h3>Socket</h3>
        {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.socket))).map((socket) => (
          <label key={socket}>
            <input 
              type='checkbox'
              value={socket}
              checked={selectedSocket.includes(socket)}
              onChange={() => handleCheckboxChange('socket',socket,setSelectedSocket)}
            />
              {socket}
          </label>
        ))}
      </div>
      <h1>{products_store.counter}</h1>
      {/* <button onClick={()}></button> */}
      <h3>Filtered Motherboards</h3>
      <ul>
        {products_store.filteredProductsArr.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default (MotherboardFilter);
