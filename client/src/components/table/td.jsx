

const Td = ({ header = "", value = "", extraClass = "" }) => {
    return (
        <td className={` grid grid-cols-12 w-full lg:w-auto p-3 text-gray-800 text-end lg:text-center border border-b block lg:table-cell relative lg:static capitalize }`}>
            <span className="lg:hidden col-span-3 w-max top-0 left-0 px-2 py-1 h-full flex justify-center flex-row items-center text-xs font-bold uppercase">{header}</span>
           <span className=" col-span-9 pl-3 lg:pl-0 lg:max-w-full lg:text-center  text-end word-wrap break-words"> {value} </span>
        </td>
    )
};

export default Td;