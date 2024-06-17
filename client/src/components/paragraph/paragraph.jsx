

const Paragraph = ({pragraphClassName="", paragraphText="", paragraphTitle=""}) => {
    return (
        <>
            <p className={pragraphClassName}>{paragraphText}</p>
        </>
    )
};

export default Paragraph;