import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from './components/layout/layout';
import Order from './page/order/order';
import Booking from './page/booking/booking';
import AddProductForm from './page/addProduductForm/addProductForm';
import ScrollToTop from './helper/scrollToTop/scrollToTop';
import { lazy, Suspense, useEffect, useState } from "react";
import CancelOrderForm from './components/cancelOrderForm/cancelOrderForm';
import AddGalleryForm from './page/addGalleryForm/addGalleryform';
import PageNotFound from './page/pageNotFound/pageNotFound';
import Profile from './page/profile/profile';
import ProductsAccess from './page/profile/productsAccess/productsAccess';
import GalleryAccess from './page/profile/galleryAccess/galleryAccess';
import { useDispatch, useSelector } from 'react-redux';
// import TermAndService from './page/termAndService/termAndService';
// import Contact from './page/contact/contact';
// import Gallery from './page/gallery/gallery';
// import About from './page/about/about';
import Testimonial from './page/testimonial/testimonial';
import { userLogged } from './Redux/userSlice/userSlice';
import VerifyAccount from './page/verifyAccount/verifyAccount';
import Auth from './page/authForm/auth';
import ProtecedRoute from './protectedRoute/protectedRoute';
import NonProtectedRoute from './protectedRoute/nonProtectedRoute';
import Header from "./components/header/header"
// import Footer from "./components/footer/footer"
// import Products from './page/products/products';
// import Services from './page/productsAndService/services';
import { fetchProductsDetails } from './Redux/productSlice/productSlice';
import { galleriesDetails } from './Redux/gallerySlice/gallerySlice';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/layout/errorFallback';

const Footer = lazy(async () => {
  let obj = await import('./components/footer/footer')
  return typeof obj.default === "function" ? obj : obj.default
});
const Contact = lazy(async () => {
  let obj = await import("./page/contact/contact")
  return typeof obj.default === "function" ? obj : obj.default
})
const About = lazy(async () => {
  let obj = await import("./page/about/about")
  return typeof obj.default === "function" ? obj : obj.default
})
const Gallery = lazy(async () => {
  let obj = await import("./page/gallery/gallery")
  return typeof obj.default === "function" ? obj : obj.default
})
const TermAndService = lazy(async () => {
  let obj = await import("./page/termAndService/termAndService")
  return typeof obj.default === "function" ? obj : obj.default
})
const Products = lazy(async () => {
  let obj = await import("./page/productsAndService/products")
  return typeof obj.default === "function" ? obj : obj.default
})
const Services = lazy(async () => {
  let obj = await import("./page/productsAndService/services")
  return typeof obj.default === "function" ? obj : obj.default
})

function App() {

  const dispatch = useDispatch();
  const userState = useSelector(state => state.user)

  const [activeDetails, setActiveDetails] = useState({})
  const { products } = useSelector(state => state.products);


  useEffect(() => {
    dispatch(userLogged())
    dispatch(fetchProductsDetails());
    dispatch(galleriesDetails())


  }, [])

  return (
    <div className="App max-w-screen overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        {/* <Suspense fallback={<h6>...</h6>}> */}
        <Header />
        {/* </Suspense> */}
        <Routes>
          <Route path='/' element={<Layout products={products} activeDetails={activeDetails} setActiveDetails={setActiveDetails} />} />
          <Route path='/order' element={<Order />} />
          <Route path='/booking' element={<Booking />} />

          <Route path='/products' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <Products products={products} activeDetails={activeDetails} setActiveDetails={setActiveDetails} />
              </Suspense>
            </ErrorBoundary>
          } />

          <Route path='/services' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <Services products={products} activeDetails={activeDetails} setActiveDetails={setActiveDetails} />
              </Suspense>
            </ErrorBoundary>
          } />


          <Route element={<ProtecedRoute />}>
            <Route path='/product/add' element={<AddProductForm />} />
            <Route path='/order/cancel/:id' element={<CancelOrderForm />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/gallery/add' element={<AddGalleryForm />} />
            <Route path='/gallery/access' element={<GalleryAccess />} />
            <Route path='/products/access' element={<ProductsAccess />} />
          </Route>

          <Route element={<NonProtectedRoute />}>
            <Route path='/auth' element={<Auth />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />

          <Route path='/term_and_service' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <TermAndService />
              </Suspense>
            </ErrorBoundary>
          } />

          <Route path='/contact' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          } />

          <Route path='/gallery' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <Gallery />
              </Suspense>
            </ErrorBoundary>
          } />

          <Route path='/about' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              fallback={() => window.location.reload()}>
              <Suspense fallback={<h6>...</h6>}>
                <About />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/verify-account/:token' element={<VerifyAccount />} />
        </Routes>

        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          fallback={() => window.location.reload()}>
          <Suspense fallback={<h6>...</h6>}>
            <Footer />
          </Suspense>
        </ErrorBoundary>

      </BrowserRouter>
    </div>
  );
}

export default App;
