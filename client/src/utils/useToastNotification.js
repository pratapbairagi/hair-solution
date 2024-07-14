import { useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const useToastNotifications = ({loading, success, error, message}) => {
    useEffect(() => {
        let toastId = null;

        if (loading) {
            toastId = toast.loading("Please wait...", {
                position: "bottom-left",
                autoClose: 5000
            });
        }

        if (success && message) {
            toast.success(message, {
                position: "bottom-left",
                isLoading: false,
                autoClose: 4000
            });
        }

        if (error && message) {
            toast.error(message, {
                position: "bottom-left",
                isLoading: false,
                autoClose: 4000
            });
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [loading, success, error, message]);
};

export default useToastNotifications;