import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import products_store from "../../../store/products_store";

const MonitorsFilter = observer(() => {
    const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedDisplay_hz, setSelectedDisplay_hz] = useState([]);
  const [selectedDisplayResolution, setSelectedDisplayResolution] = useState([]);

  const handleCheckboxChange = (category, value, setSelectedCategories) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const updateFilteredProducts = action(() => {
    products_store.setFilteredProductsArr(
      products_store.msi_monitors.filter((item) => {
        const isDisplay_hzSelected = selectedDisplay_hz.length === 0 || selectedDisplay_hz.includes(item.characteristic.display_hz);
        const isDisplayResolutionSelected = selectedDisplayResolution.length === 0 || selectedDisplayResolution.includes(item.characteristic.resolution);
        return isDisplay_hzSelected && isDisplayResolutionSelected;
      })
    );
  });

  return (
    <div>
      <h2>Display Hz</h2>
      {Array.from(new Set(products_store.msi_monitors.map((item) => item.characteristic.display_hz))).map((display_hz) => (
        <label key={display_hz}>
          <ul>
            <li style={{ listStyleType: "none" }}>
              <input
                type="checkbox"
                value={display_hz}
                checked={selectedDisplay_hz.includes(display_hz)}
                onChange={() => {
                  handleCheckboxChange("display_hz", display_hz, setSelectedDisplay_hz);
                  updateFilteredProducts(); // Call the action to update filtered products
                }}
              />
              {display_hz}
            </li>
          </ul>
        </label>
      ))}
      <h2>Display Resolution</h2>
      {Array.from(new Set(products_store.msi_monitors.map((item) => item.characteristic.resolution))).map((resolution) => (
        <label key={resolution}>
          <ul>
            <li style={{ listStyleType: "none" }}>
              <input
                type="checkbox"
                value={resolution}
                checked={selectedDisplayResolution.includes(resolution)}
                onChange={() => {
                  handleCheckboxChange("resolution", resolution, setSelectedDisplayResolution);
                  updateFilteredProducts(); // Call the action to update filtered products
                }}
              />
              {resolution}
            </li>
          </ul>
        </label>
      ))}
    </div>
  );
});

export default MonitorsFilter;
