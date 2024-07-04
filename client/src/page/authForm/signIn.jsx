import Input from "../../components/input/input";


const SignIn = ({ submit_login_handler = () => "", formInputHandler = () => "", createForm = {}, fieldsetClassName = "", labelClassName = "", inputClassName = "", setShowSignUp }) => {
    return (
        <>
            <form id="login" action="#" className="mt-4 grid grid-cols-12 gap-2">

                <Input inputOnchangeFun={formInputHandler} inputName="email" inputType="email" inputDefaultValue={createForm.email} labelHtmlFor="email" labelText="Email" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
                
                <Input inputOnchangeFun={formInputHandler} inputName="password" inputType="password" inputDefaultValue={createForm.password} labelHtmlFor="#password" labelText="Password" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                <div className="col-span-12 px-2 mt-4">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                        />

                        <span className="text-xs text-gray-500 text-start">
                            I want to receive emails about events, product updates and company announcements.
                        </span>
                    </label>
                </div>

                <div className="col-span-12 mt-3">
                    <p className="text-sm text-gray-500">
                        By creating an account, you agree to our
                        <a href="#" className="text-gray-700 underline mx-2"> terms and conditions </a>
                        and
                        <a href="#" className="text-gray-700 underline ml-2">privacy policy</a>.
                    </p>
                </div>

                <div className="col-span-12 sm:flex sm:items-center sm:gap-4 mt-6">
                    <button onClick={submit_login_handler}
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Log In
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Don't have an account?
                        <button onClick={() => setShowSignUp(true)} className="text-gray-700 underline ml-2">Sign Up</button>.
                    </p>
                </div>
            </form>
        </>
    )
};

export default SignIn;