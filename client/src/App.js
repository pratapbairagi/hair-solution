import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import FormComponent from './components/form/form';
import Layout from './components/layout/layout';
import Order from './page/order/order';
import Booking from './page/booking/booking';
import AddProductForm from './page/addProduductForm/addProductForm';
// import Header from './components/header/header';
// import Footer from './components/footer/footer';
import ScrollToTop from './helper/scrollToTop/scrollToTop';
import { lazy, Suspense } from "react";
import CancelOrderForm from './components/cancelOrderForm/cancelOrderForm';

// const Layout = lazy(()=> import('./components/footer/footer'))
// const Order = lazy(()=> import('./page/order/order'))
// const Booking = lazy(()=> import('./page/booking/booking'))
// const AddProductForm = lazy(()=> import('./page/addProduductForm/addProductForm'))

const Footer = lazy(() => import('./components/footer/footer'));
const Header = lazy(() => import('./components/header/header'))

function App() {

  return (
    <div className="App max-w-screen overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<h5>Loading..</h5>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/order' element={<Order />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/product/add' element={<AddProductForm />} />
          <Route path='/order/cancel/:id' element={<CancelOrderForm />} />
        </Routes>
        <Suspense fallback={<h5>Loading..</h5>}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
