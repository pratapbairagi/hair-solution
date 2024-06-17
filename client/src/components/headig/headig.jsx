


const Heading = ({ headingClassName = "", headingText = "", headigSpan1Text="", headingSpan1ClassName="" }) => {
    return (
        <>
            <h6 className={headingClassName}>{headingText} <span className={headingSpan1ClassName}>{headigSpan1Text}</span></h6>

        </>
    )
};

export default Heading;