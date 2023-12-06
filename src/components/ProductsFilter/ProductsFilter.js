import Laptops from "./Laptops/Laptops"
import MonitorsFilter from "./Monitors/MonitorsFilter"
import MotherboardFilter from "./Motherboards/MotherboardsFilter"
import MonitorsSort from "./Monitors/MonitorsSort"
const ProductsFilter = () => {
  return(
    <div>
      <MonitorsSort/>
      {/* <Laptops/> */}
      {/* <MonitorsFilter/>
      <MotherboardFilter/> */}
    </div>
  )
}
export default ProductsFilter