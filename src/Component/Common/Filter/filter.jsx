// import React from 'react'

// // import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";

// import Funnel from "../../Assets/img/Product/Funnel.svg";
// const FilterDropDown = () => {
//     return (
//         <>
//             <div class="dropdown">
//                 <button className='border-0 bg-transparent'  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src={Funnel} alt="Filter" className="sort-icon" />
//                 <div className="text-center text-color-terracotta">Filter</div>
//                 </button>
//                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                     <li><a class="dropdown-item" href="/#">Action</a></li>
//                     <li><a class="dropdown-item" href="/#">Another action</a></li>
//                     <li><a class="dropdown-item" href="/#">Something else here</a></li>
//                 </ul>
//             </div>
//         </>


//     )
// }

// export default FilterDropDown

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Funnel from "../../Assets/img/Product/Funnel.svg";

const FilterDropDown = () => {
  return (
    <>
      {/* Filter Button with Dropdown */}
      <div className="dropdown">
        <button
          className="border-0 bg-transparent"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={Funnel} alt="Filter" className="sort-icon" />
          <div className="text-center text-color-terracotta">Filter</div>
        </button>

        {/* Dropdown Menu (Popup) */}
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <p className="ms-2 mb-3 mt-1 font-semibold filter-heading text-start">FILTERS</p>
          </li>


          {/* Category Filter */}
          <li className="mx-2">
            {/* <strong className="dropdown-header">Category</strong> */}
            <select className="form-select my-2">
              <option value="avalability">Availability</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="grains">Grains</option>
            </select>
          </li>


          {/* Variants Filter */}
          <li className="mx-2">
            {/* <strong className="dropdown-header">Variants</strong> */}
            <select className="form-select my-2">
              <option value="price">Price</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </li>

          <li className="mx-2">
            {/* <strong className="dropdown-header">Variants</strong> */}
            <select className="form-select my-2">
              <option value="category">Category</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </li>

          <li className="mx-2">
            {/* <strong className="dropdown-header">Variants</strong> */}
            <select className="form-select my-2">
              <option value="varients">Varients</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </li>


          {/* Apply Button */}
          <li className="mt-5 mb-0 fixed-bottom">
            <button className="border-0 rounded-bottom py-2 text-white filter-btn w-100">Apply</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterDropDown;
