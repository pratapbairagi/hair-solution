import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const CancelOrderForm = () => {
    const { id } = useParams()

    const cancel_order_fun = async () => {
        try {
            const toastId = toast.loading("Please wait...", {
                position: "bottom-left"
            })
            if (!id) {

                return toast.update(toastId, {
                    render : "order not found or something went wrong !",
                    position : "bottom-left",
                    type : "error",
                    isLoading : false,
                    autoClose : "4000"
                })
            };
            const url = `https://hair-solution.vercel.app/api/app/order/cancel/${id}`;

            await axios.delete(url).then((res) => {
                if (res.data.success) {
                    toast.update(toastId, {
                        render: res.data.message,
                        position: "bottom-left",
                        type: "success",
                        isLoading: false,
                        autoClose: "4000"
                    })
                }
            })

        } catch (error) {
            return toast.error(error.response.data.message)  
        }
    }

    return (
        <>
            <div className="w-full flex min-h-[100vh] px-3 pt-[14vh] pb-[10vh] flex-wrap justify-center items-center bg-white">
                <ToastContainer position="bottom-left" />
                <button className="w-max rounded-sm py-1 px-4 text-sm font-semibold text-gray-100 bg-red-600 hover:bg-red-500 hover:text-white" onClick={cancel_order_fun}>Cancel Order</button>
            </div>
        </>
    )

};

export default CancelOrderForm;