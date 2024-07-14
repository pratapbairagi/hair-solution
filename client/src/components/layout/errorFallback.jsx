
const ErrorFallback = ({error ={ message : " Unknown Error , need to refresh the page !"}, resetErrorBoundary=()=>null, containerCss="col-span-12 min-w-[100%]"}) => {
    return (
        <div className={`error ${containerCss} bg-white fixed z-30 top-0 left-0 w-full min-w-[100vw]  min-h-[100vh] flex flex-col justify-center items-center`}>
            <p className="text-xl lg:text-2xl  text-red-500 font-semibold">Something went wrong :</p>
            <pre className="text-gray-500 mt-2 p-2 text-sm lg:text-md">{error.message}</pre>
            <button className="border border-blue-300 px-8 py-0.5 mt-3 rounded-sm text-blue-300" onClick={()=> window.location.reload()}>Try Again</button>
        </div>
    )
}

export default ErrorFallback