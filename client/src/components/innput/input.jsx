import "./input.css"

const Input = ({type="text", value="", placeholder="", defaultValue="", name="", onchannge_handler=()=> null}) => {

    return (
        <>
            <input name={name} type={type} placeholder={placeholder} onChange={(e)=>onchannge_handler(e)} defaultValue={defaultValue}  className="border text-xs lg:text-sm rounded px-3 md:px-4 xl:px-5 py-3 md:py-2 xl:py-3 w-full" />
        </>
    )
};
export default Input;