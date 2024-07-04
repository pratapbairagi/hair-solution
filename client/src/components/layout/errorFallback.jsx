

const ErrorFallback = ({error ={ message : " Unknown Error , need to refresh the page !"}, resetErrorBoundary=()=>null}) => {
    return (
        <div className="error w-full min-h-[100vh] flex flex-col justify-center items-center">
            <p className="text-xl lg:text-2xl  text-red-500 font-semibold">Something went wrong :</p>
            <pre className="text-gray-500 mt-2">{error.message}</pre>
            <button className="border border-blue-300 px-8 py-0.5 mt-1 rounded-sm text-blue-300" onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}

export default ErrorFallback