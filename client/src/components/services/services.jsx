// import patch1_ from "../heroSection/patch1_.png";
// import backgroud from "./images/backgroud.jpg"
import ServiceCard from "./services_card/ServiceCard";
import "./services.css"
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
// import clip from "./images/clip.jpg"
// import glue from "./images/glue.jpg"
// import tape from "./images/tape.jpg"
// import hair_topper from "./images/hair_topper.jpg"
// import hair_patch from "./images/hair_patch_men.jpg"
// import remover from "./images/remover.jpg"
// import hair_wig from "./images/hair_wig.jpg"
// import scalp_protector from "./images/scalp-protector.jpg"

// import fixing from "./images/fixing.png"
// import maintaining from "./images/maintaining.jpg"
// import cutting from "./images/cutting.png"

const Services = ({data}) => {

    // const [activeDetailsToggle, setActiveDetailsToggle] = useState(false)
    const [activeDetails, setActiveDetails] = useState({})
    
    

    // const productAndServices_data = [
    //     {
    //         title : "Hair Wig",
    //         image : hair_wig,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women"],
    //         size : [],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Hair Patch",
    //         image : hair_patch,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["men"],
    //         size : ["All Size Available"],
    //         color : [],
    //         type : ["Mono Base", "Octagon", "Full lace", "Mirage", "Front Less Mirage", "Australian Mirage", "Australian", "Transparent Poly", "Custmize"]
    //     },
    //     {
    //         title : "Hair Topper",
    //         image : hair_topper,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women"],
    //         size : ["Different Size Available"],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Hair Fixing Tape",
    //         image : tape,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women", "men"],
    //         size : [],
    //         color : [],
    //         type : ["White Tape", "Red Tape", "Balue Tape", "No shine Tape"]
    //     },
    //     {
    //         title : "Hair Fixing Glue",
    //         image : glue,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women", "men"],
    //         size : [],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Glue/Tape Remover",
    //         image : remover,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women", "men"],
    //         size : [],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Hair Wig Clip",
    //         image : clip,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : ["women", "men"],
    //         size : ["small", "medium"],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Hair Patch Fixing",
    //         image : fixing,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "service",
    //         gender : ["men"],
    //         size : [],
    //         color : [],
    //         type : []

    //     },
    //     {
    //         title : "Hair Wig/patch Maintaining",
    //         image : maintaining,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "service",
    //         gender : ["women", "men"],
    //         size : [],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : " Outside Hair Patch Cutting",
    //         image : cutting,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "service",
    //         gender : ["men"],
    //         size : [],
    //         color : [],
    //         type : []
    //     },
    //     {
    //         title : "Scalp protector",
    //         image : scalp_protector,
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate.",
    //         product_type : "product",
    //         gender : [],
    //         size : [],
    //         color : [],
    //         type : []
    //     }
    // ];

    const onClick_toggle_handler = ({id, values}) => {

        const active_prod_serv_card_details = document.getElementById(id);
        const paraActive = document.getElementById(id+"p")
        const toggleBtn = document.getElementById(`${id}toggle_btn`)

        if(active_prod_serv_card_details.classList.contains("active_prod_serv_card_details")){
            console.log("valuesssss active", values)

            active_prod_serv_card_details.classList.remove("active_prod_serv_card_details")
            paraActive?.classList.remove("active_prod_serv_card_details_para")
            toggleBtn?.classList.remove("closeBtn_active")
            setActiveDetails({})
        }
        else{
            console.log("valuesssss not active", values)


            active_prod_serv_card_details.classList.add("active_prod_serv_card_details")
            paraActive?.classList.add("active_prod_serv_card_details_para")
            toggleBtn?.classList.add("closeBtn_active")
            
            setActiveDetails(values)
        }
    };

    const services = useMemo(()=>{
       return data.filter((v)=>{
            return v.type_ === "product"
           }).map((v,i)=>{
                return <ServiceCard
                key={i}
                img={v.image.url}
                title={v.title}
                description={v.description}
                type={v.types}
                gender={v.gender}
                size={v.sizes}
                color={v.colors}
                values={v}
                onClick_toggle={onClick_toggle_handler}
                id={v.title+i}
                // activeDetailsToggle={activeDetailsToggle}
                // setActiveDetailsToggle={setActiveDetailsToggle}
                activeDetails={activeDetails}
            />
           })
    // },[productAndServices_data])
},[data, activeDetails])

    const products = useMemo(()=>{
       return data.filter((v)=>{
            return v.type_ === "service"
           }).map((v,i)=>{
                return <ServiceCard
                key={i}
                img={v.image}
                title={v.title}
                description={v.description}
                type={v.type}
                gender={v.gender}
                size={v.size}
                color={v.color}

                values={v}
                onClick_toggle={onClick_toggle_handler}
                id={v.title+i}
                activeDetails={activeDetails}
            />
           })
    // },[productAndServices_data])
},[data, activeDetails])
    return (
        <>
            <div className=" max-w-[96%] mx-auto flex flex-col col-span-12 px-6 rounded py-6 mt-5 h-max min-h-[80vh] relative overflow-hidden" >
                <div className="w-[70%] lg:w-[45%] aspect-square bg-orange-300 absolute z-10 bottom-[-8%] lg:bottom-[-50%] left-[-16%] rounded-full"></div>
                <div className="w-[50%] lg:w-[28%] aspect-square bg-orange-200 absolute z-0 bottom-[-9%] lg:bottom-[-40%] left-[36%] lg:left-[16%] rounded-full"></div>
                
                <h5 className="#222222 text-xl font-bold w-full text-center">Things You Need <span className="text-[#fa7436] text-xl font-bold"> To Know </span> </h5>

                <p className="text-gray-600 text-md mt-3 min-w-[240px] max-w-[70%] mx-auto">We provide other services except hair fixing. click on each servic to know more details.</p>

                <div className="w-full min-w-full max-w-full grid grid-cols-12 gap-x-4 relative z-10" style={{justifyContent:"space-between"}}>

                <h6 className="order-1 lg:order-1 col-span-12 lg:col-span-6 text-gray-600 font-semibold mt-8 border-b-2 border-orange-500 py-2 ml-auto w-[70%] text-start">Our Products</h6>

                <div className="order-2 lg:order-3 col-span-12 lg:col-span-6 grid grid-cols-12 overflow-x-auto gap-x-4 gap-y-3 mt-6 px-3 relative overflow-hidden">
                
                   {services}
                    
                </div>

                <h6 className="order-3 lg:order-2 col-span-12 lg:col-span-6 text-gray-600 font-semibold mt-8 border-b-2 border-orange-500 py-2 ml-auto w-[70%] text-start">Our Services</h6>

                
                <div className="order-4 lg:order-4  col-span-12 lg:col-span-6 grid grid-cols-12 overflow-x-auto gap-x-4 gap-y-3 mt-6 px-3" style={{ alignContent:"flex-start"}}>
                   

                {products}
                   
                    {/* <Service_card
                        img={patch1_}
                        title="New Patch"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, cumque optio reiciendis esse obcaecati, vitae veniam labore deleniti sint laboriosam consequatur in corrupti dolorem minima iusto eaque molestiae totam. Voluptatem ut maiores autem obcaecati asperiores enim? Sint, natus veritatis quia velit libero praesentium unde in voluptatem, et, odit cupiditate."
                    /> */}

                </div>


                </div>

            </div>
        </>
    )
};

export default Services;