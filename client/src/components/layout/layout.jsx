import { memo } from "react";
import Gallery from "../gallery/gallery";
import { lazy, Suspense } from "react"
import ErrorFallback from "./errorFallback";
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

const Staffs = lazy(async () => {
    let obj = await import("../staffs/staffs");
    return typeof obj.default === "function" ? obj : obj.default
})


const Layout = ({products, activeDetails, setActiveDetails, reviews, staffs}) => {

    console.log("users ", staffs)
    return (
        <div className="container grid grid-cols-12 py-14 lg:py-0 mx-auto">
          
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
                <Testimonial reviews={reviews} />
            </Suspense>
            </ErrorBoundary>

            <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            fallback={()=> window.location.reload()}>
            <Suspense fallback={<h6>...</h6>}>
                <Staffs staffs={staffs} />
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
    )
};

export default memo(Layout);