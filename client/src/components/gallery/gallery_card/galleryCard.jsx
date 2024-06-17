


const GalleryCard = ( {values} ) => {
    return (
        <>
        <div className="col-span-6 md:col-span-4 xl:col-span-3 p-1 relative">
                    <img src={values.pic} className="w-full h-full relative z-0" alt="" />
                    <div className="py-2 px-5 absolute z-10 text-gray-400 font-bold text-sm lg:text-xl z-10 h-full w-full top-0 left-0 flex flex-col justify-center items-center bg-trasparent hover:bg-gray-800 hover:text-white opacity-0 hover:opacity-80 gap-y-6" >
                        <blockquote className="px-6 py-2 border-t-2 border-b-2 border-gray-400 hover:border-white" >Query For This Style</blockquote>
                        <div className="flex flex justify-center gap-x-3 w-full">
                            {
                                values.icons.map((v, i)=>{
                                    return <a href={v.url} key={i}>
                                    {v.icon}
                                </a>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
        </>
    )
};

export default GalleryCard