import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";



const VerifyAccount = () => {
    const { token } = useParams();
    const [verifyAccount, setVefifyAccount] = useState("loading")

    // Define verifyFun as an async function
    const verifyFun = async () => {
        if (token) {
            const url = `https://hair-solution.vercel.app/api/app/verify-account/${token}`;
            try {
                const response = await axios.get(url);
                if (response.data.success) {
                    setVefifyAccount("success")
                } else {
                    setVefifyAccount("failed")
                }
            } catch (err) {
                setVefifyAccount("failed")
            }
        }
    };

    // useEffect to trigger the API call when component mounts or token changes
    useEffect(() => {
        verifyFun();
    }, [token]);

    return (
        <>
            <div className="w-full h-max min-h-[100vh] flex flex-col justify-center items-center">
                {
                    verifyAccount === "loading" ? <h6 className="w-full text-center">Loading...</h6>
                        :
                        verifyAccount === "failed" ? <h6 className="w-full">Verification failed !</h6>
                            :
                            <h6 className="w-full">Account verified successfully !</h6>
                }
            </div>
        </>
    )
};

export default VerifyAccount