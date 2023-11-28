import React from 'react'

const Products = () => {
  return (
    <div className="w-1/2">
        
        <label htmlFor="">
            <input type="text" />
        </label>
        <select name="" id="" className="border">
            <option value="All"> Default Sorting </option>
            <option value="Category A"> Chicken </option>
            <option value="Categoty B"> Launch </option>
            <option value="Category C"> Pizza </option>
            <option value="Category D"> Burger </option>
        </select>
    </div>
  )
}

export default Products