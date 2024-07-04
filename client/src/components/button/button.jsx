import "../button/addButton.css"

const Button = ({onclick_handler=()=>null}) => {
    return (
        <>
            <button onClick={(e)=> onclick_handler(e)} type="button" className="addbutton">
                <span className="button__text">Add Item</span>
                <span className="button__icon"><svg width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
        </>
    )
};

export default Button;