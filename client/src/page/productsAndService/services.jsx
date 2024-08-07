import { useMemo, useState } from "react";
// import { onClick_toggle_handler } from "../../helper/cardToggle_handler";
import ProductAndServicePageLayout from "./pageLayout"
import ServiceCard from "../../components/services/services_card/ServiceCard";
import hero_image1 from "./images/patch_using_smiley_face-removebg-preview.png"


const Services = ({products  }) => {
    
    const [toggleCardSize, setToggleCardSize] = useState(null)
    const toggle_handler = (id) => {
        setToggleCardSize( toggleCardSize === id ? null : id)
    }

    const product = useMemo(()=>{
        return products.filter((v)=>{
             return v.type_ === "service"
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
                 id={v.title+i}
                 toggle_handler={toggle_handler}
                 toggleCardSize={toggleCardSize}
                 setToggleCardSize={setToggleCardSize}
             />
            })
 },[products, toggleCardSize])

const items = [
    {value : "Outside Hair Patch Cutting", color: "bg-orange-200"}, 
    {value : "Hair Patch Service", color : "bg-green-300"}
]
 
    return (
       <>
       <ProductAndServicePageLayout 
        subheading="Looking For ?" 
        heading="All Services Are Here" 
        heroImg={hero_image1} 
        mainItemsServices={items}
        productOrService={product}
        type="services"
        />
       </>
    )
};

export default Services