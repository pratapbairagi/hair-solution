import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClient } from "../../../Redux/clientSlice/clientSlice";


const PurchaseAccess = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { client, loading, success, error, message } = useSelector(state => state.client)

    useEffect(() => {
        if (id) {
            dispatch(getClient({ id }))
        }
    }, [id]);

    return (
        <>
            <div className="w-full px-2 pt-10 lg:p-8 h-max mt-14 border">
                <h5 className="font-bold text-gray-700 text-start px-1.5 lg:px-4 text-xl flex justify-start">
                    Purchase History
                    <NavLink to="/purchase/add" className="bg-orange-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm hover:bg-orange-500 ml-auto">Add</NavLink>
                    <button onClick={() => navigate(-1)} className="bg-blue-600 h-max text-white text-sm px-2.5 py-0.5 lg:px-4 py-1 rounded-sm  hover:bg-blue-500 ml-4">Back</button>
                </h5>
                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div>
                    :
                    <>
                        {/* <Suspense fallback={<h6>...</h6>}> */}
                        <ClientTable data={client.productsPurchased} other={{ loading, success, message, error }} accessType="purchase" selectDataToUpdate={selectDataToUpdate} deleteDataHandler={deleteDataHandler} />
                        {/* </Suspense> */}
                    </>
                }
            </div>
        </>
    )
};

export default PurchaseAccess