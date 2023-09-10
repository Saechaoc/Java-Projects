import React from "react";

const AddToCartBtn = () => {
  return (
    <div>
      <button
        type="submit"
        className="items-center justify-center border-transparent px-8 py-2 text-base font-medium text-white"
        style={{ backgroundColor: "#067d35" }}
        aria-label="Add to Cart (opens modal)"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartBtn;
