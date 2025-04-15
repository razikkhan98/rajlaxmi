// // import React from 'react'

// // // import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";

// // import Funnel from "../../Assets/img/Product/Funnel.svg";
// // const FilterDropDown = () => {
// //     return (
// //         <>
// //             <div class="dropdown">
// //                 <button className='border-0 bg-transparent'  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
// //                 <img src={Funnel} alt="Filter" className="sort-icon" />
// //                 <div className="text-center text-color-terracotta">Filter</div>
// //                 </button>
// //                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
// //                     <li><a class="dropdown-item" href="/#">Action</a></li>
// //                     <li><a class="dropdown-item" href="/#">Another action</a></li>
// //                     <li><a class="dropdown-item" href="/#">Something else here</a></li>
// //                 </ul>
// //             </div>
// //         </>


// //     )
// // }

// // export default FilterDropDown

// import React, { useRef, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Funnel from "../../Assets/img/Product/Funnel.svg";
// import Accordion from 'react-bootstrap/Accordion';


// const FilterDropDown = ({BestSellers}) => {

//     const dropdownRef = useRef(null);

//     // Prevent dropdown from closing on accordion toggle
//     const handleAccordionClick = (event) => {
//         event.stopPropagation(); // Prevents dropdown from closing
//     };
//     const [value, setValue] = useState(50);

//     // const handleChange = (e) => {
//     //   setValue(e.target.value);
//     //   e.target.style.backgroundSize = `${e.target.value}% 100%`;
//     // };
  

//     // const CategoryData = [
//     //     { id: "checkbox1", value: "ghee", label: "Ghee" },
//     //     { id: "checkbox2", value: "oil", label: "Oil" },
//     //     { id: "checkbox3", value: "100gm", label: "100 gm" },
//     //     { id: "checkbox4", value: "200gm", label: "200 gm" },
//     //     { id: "checkbox5", value: "250gm", label: "250 gm" },
//     // ];
//     // const VarientData = [
//     //     { id: "checkbox1", value: "small", label: "Small" },
//     //     { id: "checkbox2", value: "medium", label: "Medium" },
//     //     { id: "checkbox3", value: "100gm", label: "100 gm" },
//     //     { id: "checkbox4", value: "200gm", label: "200 gm" },
//     // ];

//     // ========================
//     //   Filter Functionality
//     // ==============-=========
//     // const dropdownRef = useRef(null);
//     // const [value, setValue] = useState(100); // Max price range set to 2999
//     const [filters, setFilters] = useState({
//         availability: [],
//         categories: [],
//         variants: []
//     });

//     const CategoryData = [
//         { id: "checkbox1", value: "ghee", label: "Ghee" },
//         { id: "checkbox2", value: "oil", label: "Oil" },
//         { id: "checkbox3", value: "100gm", label: "100 gm" },
//         { id: "checkbox4", value: "500gm", label: "500 gm" },
//         { id: "checkbox5", value: "250gm", label: "250 gm" },
//     ];

//     const VarientData = [
//         { id: "checkbox1", value: "small", label: "Small" },
//         { id: "checkbox2", value: "medium", label: "Medium" },
//     ];

//     // Handle input change for range and checkboxes
//     const handleChange = (e) => {
//         if (e.target.type === "checkbox") {
//             const { id, checked, value } = e.target;
//             setFilters((prev) => {
//                 const newFilters = { ...prev };
//                 if (checked) {
//                     if (id.startsWith("availability")) {
//                         newFilters.availability.push(value);
//                     } else if (id.startsWith("category")) {
//                         newFilters.categories.push(value);
//                     } else if (id.startsWith("variant")) {
//                         newFilters.variants.push(value);
//                     }
//                 } else {
//                     if (id.startsWith("availability")) {
//                         newFilters.availability = newFilters.availability.filter(item => item !== value);
//                     } else if (id.startsWith("category")) {
//                         newFilters.categories = newFilters.categories.filter(item => item !== value);
//                     } else if (id.startsWith("variant")) {
//                         newFilters.variants = newFilters.variants.filter(item => item !== value);
//                     }
//                 }
//                 return newFilters;
//             });
//         } else {
//             setValue(e.target.value);
//         }
//     };

//     // Function to filter products based on the selected filters
//     const filterProducts = () => {
//         let filteredProducts = BestSellers;

//         // Filter based on price
//         const maxPrice = (value / 100) * 2999; // Max price in the range slider
//         filteredProducts = filteredProducts.filter(product => parseFloat(product.price) <= maxPrice);

//         // Over here, implement filtering based on availability and other filters as required
//         console.log("Filtered Products: ", filteredProducts);
//     };

//     // Apply Filters
//     const handleApplyFilters = () => {
//         filterProducts();
//     };


//     return (
//         <>
//             {/* Filter Button with Dropdown */}
//         {/* Filter Button with Dropdown */}
//         <div className="dropdown" ref={dropdownRef}>
//                 <button
//                     className="border-0 bg-transparent"
//                     type="button"
//                     id="dropdownMenuButton"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                 >
//                     <img src={Funnel} alt="Filter" className="sort-icon" />
//                     <div className="text-center  text-color-terracotta">Filter</div>
//                 </button>

//                 {/* Dropdown Menu (Popup) */}
//                 <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
//                     <li>
//                         <p className="ms-2 mb-3 mt-1 fw-medium inter-font-family-500 text-heading filter-heading text-start">FILTERS</p>
//                     </li>

//                     {/* Accordion for Filters */}
//                     <Accordion className="px-2">
//                         {/* Availability Filter */}
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header><span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Availability</span></Accordion.Header>
//                             <Accordion.Body>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="availabilityInStock" value="inStock" onChange={handleChange} />
//                                     <label className="form-check-label" htmlFor="availabilityInStock">In Stock</label>
//                                 </div>
//                                 <div className="form-check">
//                                     <input className="form-check-input" type="checkbox" id="availabilityOutOfStock" value="outOfStock" onChange={handleChange} />
//                                     <label className="form-check-label" htmlFor="availabilityOutOfStock">Out Of Stock</label>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>

//                         {/* Price Filter */}
//                         <Accordion.Item eventKey="1">
//                             <Accordion.Header>
//                                 <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Price</span>
//                             </Accordion.Header>
//                             <Accordion.Body>
//                                 <input type="range" min="0" value={value} onChange={handleChange} max="100" className="customRange1" id="customRange1" />
//                                 <div className="d-flex justify-content-between">
//                                     <p className="inter-font-family-500 font-size-14 text-color-terracotta "> ₹ 0</p>
//                                     <p className="inter-font-family-500 font-size-14 text-color-terracotta "> ₹ 2999</p>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>

//                         {/* Categories Filter */}
//                         <Accordion.Item eventKey="2">
//                             <Accordion.Header>
//                                 <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Category</span>
//                             </Accordion.Header>
//                             <Accordion.Body>
//                                 <div>
//                                     {CategoryData.map((checkbox) => (
//                                         <div className="form-check" key={checkbox.id}>
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 id={`category-${checkbox.id}`}
//                                                 value={checkbox.value}
//                                                 onChange={handleChange}
//                                             />
//                                             <label className="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" htmlFor={`category-${checkbox.id}`}>
//                                                 {checkbox.label}
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>

//                         {/* Variants Filter */}
//                         <Accordion.Item eventKey="3">
//                             <Accordion.Header>
//                                 <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Variants</span>
//                             </Accordion.Header>
//                             <Accordion.Body>
//                                 <div>
//                                     {VarientData.map((checkbox) => (
//                                         <div className="form-check" key={checkbox.id}>
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 id={`variant-${checkbox.id}`}
//                                                 value={checkbox.value}
//                                                 onChange={handleChange}
//                                             />
//                                             <label className="form-check-label inter-font-family-400 font-size-14 text-color-dark-grayish-blue" htmlFor={`variant-${checkbox.id}`}>
//                                                 {checkbox.label}
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>

//                     {/* Apply Button */}
//                     <li className="mt-5 mb-0 fixed-bottom">
//                         <button
//                             className="border-0 rounded-bottom py-2 text-white filter-btn w-100"
//                             onClick={handleApplyFilters}
//                         >
//                             Apply
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default FilterDropDown;

import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Funnel from "../../Assets/img/Product/Funnel.svg";
import Accordion from 'react-bootstrap/Accordion';

const FilterDropDown = ({ BestSellers }) => {
    const dropdownRef = useRef(null);

    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedVariants, setSelectedVariants] = useState([]);
    const [priceValue, setPriceValue] = useState(100); // slider value from 0 to 100

    const handleAccordionClick = (event) => event.stopPropagation();

    const CategoryData = [
        { id: "category1", value: "Ghee", label: "Ghee" },
        { id: "category2", value: "Oil", label: "Oil" },
        { id: "category3", value: "100 gm", label: "100 gm" },
        { id: "category4", value: "200 gm", label: "200 gm" },
        { id: "category5", value: "250 gm", label: "250 gm" },
    ];

    const VariantData = [
        { id: "variant1", value: "Small", label: "Small" },
        { id: "variant2", value: "Medium", label: "Medium" },
        { id: "variant3", value: "100 gm", label: "100 gm" },
        { id: "variant4", value: "200 gm", label: "200 gm" },
    ];

    const toggleSelection = (value, currentState, setState) => {
        if (currentState.includes(value)) {
            setState(currentState.filter(item => item !== value));
        } else {
            setState([...currentState, value]);
        }
    };

    const handleApply = () => {
        // Convert slider value to price
        const maxPrice = 2999;
        const minPrice = 0;
        const selectedMaxPrice = Math.round((priceValue / 100) * (maxPrice - minPrice) + minPrice);

        const filtered = BestSellers.filter(item => {
            const price = parseFloat(item.price);

            // Availability filtering (dummy logic for now)
            const inStock = selectedAvailability.includes("In Stock");
            const outOfStock = selectedAvailability.includes("Out Of Stock");

            const matchesAvailability = !inStock && !outOfStock
                ? true
                : inStock;

            // Price filtering
            const matchesPrice = price <= selectedMaxPrice;

            // Category filtering based on qty
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.qty);

            // Variant filtering (match with name or qty for demo)
            const matchesVariant =
                selectedVariants.length === 0 ||
                selectedVariants.some(v => item.name.toLowerCase().includes(v.toLowerCase()) || item.qty.toLowerCase().includes(v.toLowerCase()));

            return matchesAvailability && matchesPrice && matchesCategory && matchesVariant;
        });

        console.log("Filtered Data:", filtered);
    };

    return (
        <>
            <div className="dropdown" ref={dropdownRef}>
                <button className="border-0 bg-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={Funnel} alt="Filter" className="sort-icon" />
                    <div className="text-center text-color-terracotta">Filter</div>
                </button>

                <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
                    <li>
                        <p className="ms-2 mb-3 mt-1 fw-medium inter-font-family-500 text-heading filter-heading text-start">FILTERS</p>
                    </li>

                    <Accordion className="px-2">
                        <Accordion.Item eventKey="0" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Availability</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                {["In Stock", "Out Of Stock"].map((value, i) => (
                                    <div className="form-check" key={i}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`availability${i}`}
                                            checked={selectedAvailability.includes(value)}
                                            onChange={() => toggleSelection(value, selectedAvailability, setSelectedAvailability)}
                                        />
                                        <label className="form-check-label" htmlFor={`availability${i}`}>
                                            {value}
                                        </label>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Price</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={priceValue}
                                    onChange={(e) => setPriceValue(e.target.value)}
                                    className="customRange1"
                                    id="customRange1"
                                />
                                <div className="d-flex justify-content-between">
                                    <p>₹ 0</p>
                                    <p>₹ 2999</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Category</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                {CategoryData.map(item => (
                                    <div className="form-check" key={item.id}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={item.id}
                                            checked={selectedCategories.includes(item.value)}
                                            onChange={() => toggleSelection(item.value, selectedCategories, setSelectedCategories)}
                                        />
                                        <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" onClick={handleAccordionClick} className="my-3 mx-2 rounded-3 border-0">
                            <Accordion.Header>
                                <span className="inter-font-family-500 font-size-18 text-color-dark-grayish-blue">Variants</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                {VariantData.map(item => (
                                    <div className="form-check" key={item.id}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={item.id}
                                            checked={selectedVariants.includes(item.value)}
                                            onChange={() => toggleSelection(item.value, selectedVariants, setSelectedVariants)}
                                        />
                                        <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Apply Button */}
                    <li className="mt-4">
                        <button onClick={handleApply} className="border-0 rounded-bottom py-2 text-white filter-btn w-100 bg-success">
                            Apply
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FilterDropDown;
