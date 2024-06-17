


const TextArea = ({ fieldsetClassName = "", labelClassName = "", labelText = "", labelHtmlFor = "#", textareaClassName = "", textareaText = "", textareaName = "", textareaDefaultValue = "", textareaOnchangeFun = () => "" }) => {
    return (
        <>
            <fieldset className="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1">
                <label htmlFor="#details" className="text-xs text-gray-500 font-semibold block text-start">Describe your requirement</label>
                <textarea onChange={(e)=> textareaOnchangeFun(e)} name={textareaName} rows="4" defaultValue={textareaDefaultValue} className="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100" />
            </fieldset>
        </>
    )
};

export default TextArea;