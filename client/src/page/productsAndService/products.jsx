import hero_image1 from "./images/patch_using_smiley_face-removebg-preview.png"
import card_img1 from "./images/glue-removebg-preview.png"
import bg from "../../page/authForm/images/unblured.jpeg"
import ServiceCard from "../../components/services/services_card/ServiceCard";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsDetails } from "../../Redux/productSlice/productSlice";
import ProductAndServicePageLayout from "./pageLayout";

const Products = ({products }) => {
    
    const [toggleCardSize, setToggleCardSize] = useState(null)
    const toggle_handler = (id) => {
        setToggleCardSize( toggleCardSize === id ? null : id)
    }

    const product = useMemo(()=>{
        return products.filter((v)=>{
             return v.type_ === "product"
            }).map((v,i)=>{
                 return  <ServiceCard
                 key={i}
                 img={v.image.url}
                 title={v.title}
                 description={v.description}
                 type={v.types}
                 gender={v.gender}
                 size={v.sizes}
                 color={v.colors}
                 values={v}
                 toggle_handler={toggle_handler}
                 id={v.title+i}
                 toggleCardSize={toggleCardSize}
                 setToggleCardSize={setToggleCardSize}
             />
            })
 },[products, toggleCardSize])

const items = [
    {value : "Wig", color: "bg-orange-200"}, 
    {value : "Patch", color : "bg-orange-300"}, 
    {value : "Clips", color : "bg-blue-200"}, 
    {value : "Glue", color : "bg-blue-300"}, 
    {value : "Tapes", color : "bg-green-200"}
]
 
    return(
        <>
        <ProductAndServicePageLayout 
        subheading="Looking For ?" 
        heading="All Products Are Here" 
        heroImg={hero_image1} 
        mainItemsServices={items}
        productOrService={product}
        type="items"
        />
        </>
    )
};

export default Products