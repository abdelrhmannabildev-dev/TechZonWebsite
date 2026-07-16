import React from 'react'

function AddProduct(props) {
    const { setMode } = props
    const handleClick = () => {
        setMode("add")
    };
  return (
    <div className="add-product-action">
      <button className="add-product-btn" onClick={handleClick}>Add product</button>
    </div>
  )
}

export default AddProduct