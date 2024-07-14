


const Input = ({ fieldsetClassName = "", labelClassName = "", labelText = "", labelHtmlFor = "#", inputType = "text", inputClassName = "", inputName = "", inputValue = "", inputDefaultValue = "", inputOnchangeFun = () => "" }) => {
    return (
        <>
            <fieldset className={fieldsetClassName}>
                <label htmlFor={labelHtmlFor} className={labelClassName}>{labelText}</label>
                <input onChange={(e) => inputOnchangeFun(e)} type={inputType} defaultValue={inputDefaultValue} name={inputName} className={inputClassName} />
            </fieldset>
        </>
    )
};

export default Input