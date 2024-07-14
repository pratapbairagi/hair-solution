

const FeatureCells = ({title="", value=""}) =>{
    return <>
    <span className="flex flex-wrap max-w-[100%] overflow-x-auto gap-x-2 w-full mt-4 gap-y-2 text-nowrap">
                      <span className="text-xs md:text-sm lg:text-md text-gray-400">{title} : </span>  {value}
                    </span>
    </>
}

export default FeatureCells