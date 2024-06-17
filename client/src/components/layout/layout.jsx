import { useEffect, useMemo, useState } from "react";
// import About from "../about/about";
// import Contact from "../contact/contact";
// import Gallery from "../gallery/gallery";
// import HeroSection from "../heroSection/heroSection";
// import Products from "../products/products";
// import Services from "../services/services";
// import Testimonial from "../testimonial/testimonial";
import {lazy, Suspense} from "react"
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { products_details } from "../../Redux/action/product";
import { fetchProductsDetails } from "../../Redux/productSlice/productSlice";

const About = lazy(()=> import("../about/about") )
const Contact = lazy(()=> import("../contact/contact"))
const Gallery = lazy(()=> import("../gallery/gallery"))
const HeroSection = lazy(()=> import("../heroSection/heroSection"))
const Services = lazy(()=> import("../services/services"))
const Testimonial = lazy(()=> import("../testimonial/testimonial"))


const Layout = () => {
    const dispatch = useDispatch();
    const {products, loading, success, message, error} = useSelector(state=> state.products);

    useMemo(()=>{
        // dispatch(products_details())
        dispatch(fetchProductsDetails());
    },[]);

    
    useEffect(() => {
    let toastId = null;
    
        if (loading) {
            toastId = toast.loading("Please wait...", {
                position: "bottom-left"
            });

        }
        
        if (success && message) {
            toast.update(toastId, {
                render: message,
                position: "bottom-left",
                type: "success",
                isLoading: false,
                autoClose: "4000"
            })
        }

        if (error && message) {
            toast.update(toastId, {
                render: message,
                position: "bottom-left",
                type: "error",
                isLoading: false,
                autoClose: "4000"
            })
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };

    }, [error, success, message, loading])

    return (
        <div className="container grid grid-cols-12 py-14 lg:py-0">
            <ToastContainer position="bottom-left"/>
            <Suspense fallback={<h5>Loading...</h5>}>
            <HeroSection />
            <About />
            <Gallery />
            <Services data={products} />
            {/* <Products/> */}
            <Testimonial />
            <Contact />
            </Suspense>
        </div>
    )
};

export default Layout;