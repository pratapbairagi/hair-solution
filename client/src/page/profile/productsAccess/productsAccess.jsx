import { useEffect } from "react";
import Table from "../../../components/table/table";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProductsDetails } from "../../../Redux/productSlice/productSlice";
import { NavLink, useNavigate } from "react-router-dom";


const ProductsAccess = () => {
    const { products, loading, success, message, error } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let x = getProductsfun()
        if (x === 0) {
            x()
        }
    }, []);

    function getProductsfun() {
        let x = 0;
        return function () {
            x++
            dispatch(fetchProductsDetails());
            return x
        }
    }

    const deleteDataHandler = ({ id }) => {
        dispatch((deleteProduct({ id: id })))
    }

    const selectDataToUpdate = ({ value }) => {
        navigate("/product/add", { state: value, })
    }
    return (
        <>
            <div className="w-full px-2 py-12 lg:p-8 h-max mt-12">
                <h5 className="font-bold text-gray-700 text-start px-1 lg:px-4 text-xl flex justify-start">Products
                    <NavLink to="/product/add" className="bg-orange-600 text-white h-max text-white px-2.5 py-0.5 text-sm lg:text-normal lg:px-4 lg:py-1 rounded-sm hover:bg-blue-500 ml-4 hover:bg-orange-500 ml-auto ">Add</NavLink>
                    <button onClick={() => navigate(-1)} className="bg-blue-600 text-white h-max text-white px-2.5 py-0.5 text-sm lg:text-normal lg:px-4 lg:py-1 rounded-sm hover:bg-blue-500 ml-4">Back</button>
                </h5>
                {loading ? <div className="w-full min-h-[70vh] flex justify-center items-center">
                    Loading...
                </div>
                    :
                    <>
                        <Table data={products} other={{ loading, success, message, error }} accessType="product" selectDataToUpdate={selectDataToUpdate} deleteDataHandler={deleteDataHandler} />
                    </>
                }
            </div>
        </>
    )
};

export default ProductsAccess;