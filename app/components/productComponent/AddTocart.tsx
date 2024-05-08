'use client'
import React from 'react'

const AddTocart = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Click");
        }}
        className='btn btn-primary'
      >
        Add To Cart
      </button>
    </div>
  );
}

export default AddTocart