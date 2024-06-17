


const OrderInvoice = ({values, type_="", id=""}) => {
    return (
        <>
            <div id={id} className=" grid grid-cols-12 border col-span-12 pt-6 pb-12 max-w-[400px] min-w-[280px] mx-auto">
                <div className="text-lg font-bold tex-nowrap font-semibild text-gray-800 col-span-6 px-3 py-2 text-start">Company Logo</div>
                <div className="text-md tex-nowrap font-semibild text-gray-400 col-span-6 py-2 pr-3 text-start  flex flex-col">
                    <div className=" text-end">
                        <span className="text-xs font-normal">{values?.name}</span>
                    </div>
                    <div className="text-end">
                        <span className="text-xs font-normal">{values?.number}</span>
                    </div>
                    <div className="text-end">
                        <span className="text-xs font-normal">{ Date.now().toLocaleString()}</span>
                    </div>
                </div>

                <h6 className="text-center col-span-12 mt-10 text-bold text-gray-800">Order Summary</h6>

                <table border="2" className="col-span-12 mt-6 bodrer-b px-2">
                    <tr className="text-xs border-b text-gray-700">
                        <th className="py-2 max-w-[20%]">Order</th>
                        <th className="max-w-[20%]">Title</th>
                        <th className="max-w-[20%]">Type</th>
                        <th className="max-w-[20%]">Color</th>
                        <th className="max-w-[20%]">Size</th>
                    </tr>
                    <br />
                    <tr className=" text-xs text-gray-500">
                        <th  className="font-normal text-wrap text-center max-w-[20%]">{type_}</th>
                        <th className="font-normal text-wrap text-center max-w-[20%]">{values?.product}</th>

                        <th className="font-normal text-wrap text-center max-w-[20%]">{values?.type}</th>
                        <th className="font-normal text-wrap text-center max-w-[20%]">{values?.color}</th>
                        <th className="font-normal text-wrap text-center max-w-[20%]">{values?.size}</th>
                    </tr>
                </table>

                <p className="col-span-12 px-6 text-xs flex flex-col text-gray-500 mt-14 text-justify border-t">
                    <span className="w-full text-start py-2 font-semibold">Additional Info.</span>
                    {values?.details}
                </p>

            </div> 
        </>
    )
};

export default OrderInvoice