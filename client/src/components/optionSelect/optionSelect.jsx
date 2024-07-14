

const OptionSelect = ({ fieldsetClassName = "", labelHtmlFor = "#", labelClassName = "", labelText = "", inputDefaultValue = "", id="", inputName = "", inputClassName = "", selectOptionFun = () => "", values = [] }) => {
    return (
        <>
            <fieldset className={fieldsetClassName}>
                <label htmlFor={labelHtmlFor} className={labelClassName}>{labelText}</label>
                <select onChange={(e) => selectOptionFun(e)} defaultValue={inputDefaultValue} name={inputName} className={inputClassName} id={id}>
                    {values?.map((v, i) => {
                        return <option key={i} value={v.title ? v.title : v}>{ v.title ? v.title : v}</option>
                    })}
                </select>

            </fieldset>
        </>
    )
};

export default OptionSelect;