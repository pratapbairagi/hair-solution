import { memo, useEffect, useMemo, useState } from "react";
// import About from "../about/about";
// import Contact from "../contact/contact";
import Gallery from "../gallery/gallery";
// import HeroSection from "../heroSection/heroSection";
// import Products from "../products/products";
// import Services from "../services/services";
// import Testimonial from "../testimonial/testimonial";
import { lazy, Suspense } from "react"
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { products_details } from "../../Redux/action/product";
import { fetchProductsDetails } from "../../Redux/productSlice/productSlice";
import { galleriesDetails } from "../../Redux/gallerySlice/gallerySlice";
import { Audio, BallTriangle, Circles, Rings } from 'react-loader-spinner';
import ErrorFallback from "./errorFallback";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ErrorBoundary} from "react-error-boundary"

const About = lazy(async() =>{ 
    let obj = await import("../about/about")
    return typeof obj.default === "function" ? obj : obj.default
})
const Contact = lazy(async() =>{ 
    let obj = await import("../contact/contact")
    return typeof obj.default === "function" ? obj : obj.default
})

const HeroSection = lazy(async() =>{
    let obj = await import("../heroSection/heroSection");
    return typeof obj.default === "function" ? obj : obj.default 
    })
const Services = lazy(async() =>{ 
    let obj = await import("../services/services")
    return typeof obj.default === "function" ? obj : obj.default
})
const Testimonial = lazy(async () => {
    let obj = await import("../testimonial/testimonial");
    return typeof obj.default === "function" ? obj : obj.default
})


const Layout = ({products, activeDetails, setActiveDetails}) => {
    // const dispatch = useDispatch();

    // useMemo(() => {
    //     dispatch(fetchProductsDetails());
    //     dispatch(galleriesDetails())
    // }, []);

    // const {products, loading, success, message, error} = useSelector(state=> state.products);
    // const [activeDetails, setActiveDetails] = useState({})



    // useEffect(() => {
    // let toastId = null;

    //     if (loading) {
    //         toastId = toast.loading("Please wait...", {
    //             position: "bottom-left"
    //         });

    //     }

    //     if (success && message) {
    //         toast.update(toastId, {
    //             render: message,
    //             position: "bottom-left",
    //             type: "success",
    //             isLoading: false,
    //             autoClose: "4000"
    //         })
    //     }

    //     if (error && message) {
    //         toast.update(toastId, {
    //             render: message,
    //             position: "bottom-left",
    //             type: "error",
    //             isLoading: false,
    //             autoClose: "4000"
    //         })
    //     }

    //     return () => {
    //         if (toastId) {
    //             toast.dismiss(toastId);
    //         }
    //     };

    // }, [error, success, message, loading])

    return (
        <>
        {/* <ErrorFallback /> */}
        <div className="container grid grid-cols-12 py-14 lg:py-0">
          
            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6 col-span>...</h6>}>
            <HeroSection />
            </Suspense>
            </ErrorBoundary>

            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6>...</h6>}>
                <About />
            </Suspense>
            </ErrorBoundary>

            <Gallery />

            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6>...</h6>}>
            <Services products={products} activeDetails={activeDetails} setActiveDetails={setActiveDetails} />
            </Suspense>
            </ErrorBoundary>

            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6>...</h6>}>
                <Testimonial />
            </Suspense>
            </ErrorBoundary>

            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6>...</h6>}>
            <Contact />
            </Suspense>
            </ErrorBoundary>
        </div>
        </>
    )
};

export default memo(Layout);