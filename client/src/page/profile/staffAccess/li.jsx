

const Li = ({first="", value=""}) => {
    return (
        <>
            <li className="w-full py-1 h-max flex flex-row justify-between">
                <h6 className="col-span-6 text-gray-400 text-[12px] text-start w-full h-max py-1">{first} : {value}</h6>
            </li>
        </>
    )
}

export default Li