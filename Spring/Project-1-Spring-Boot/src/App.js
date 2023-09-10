// import logo from './logo.svg';
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage/HomePage';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import "./styles.css";
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/order/Order';
import OrderCard from './customer/components/order/OrderCard';
import OrderDetails from './customer/components/order/OrderDetails';

function App() {
  return (
    <main className="relative">
      <Navigation/>
      {/* <section>
        <HomePage/>
      </section> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      <OrderDetails/>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  );
}

export default App;
