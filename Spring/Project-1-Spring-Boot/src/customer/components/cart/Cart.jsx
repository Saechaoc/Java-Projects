import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        {/* Left side of checkout */}
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        {/*Order Summary*/}
        <div className="px-5 top-0 h-[100vh] mt-6 mr-72">
          <div className="border rounded-lg">
            <button
              className="flex justify-center mt-2 mx-3 rounded-lg text-center"
              style={{
                padding: "0.3rem 3.75rem",
                px: "2.75rem",
                backgroundColor: "#067d35",
                color: "white",
                fontSize: "16px",
              }}
              variant="contained"
              type="submit"
              aria-label="Checkout"
            >
              Place your order
            </button>
            <div
              className="separator"
              style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
            ></div>
            <p className="font-bold text-xl pb-4">Order Summary</p>

            {/* Row Items */}
            <div className="space-y-2 font-semibold text-sm">
              <div className="flex justify-between text-black">
                <span>Items (3):</span>
                <span>$123.00</span>
              </div>

              <div className="flex justify-between text-black">
                <span>Shipping & handling:</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between text-black">
                <span>Tax:</span>
                <span>$12.30</span>
              </div>
              <div
                className="separator"
                style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
              ></div>

              <div
                className="flex justify-between text-xl"
                style={{ color: "#B12704" }}
              >
                <span>Order total:</span>
                <span className="mb-4">$135.30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
