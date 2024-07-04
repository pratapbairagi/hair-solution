import { useEffect, useState } from "react";
import salonWithWigs from "./images/unblured.jpeg";
import logo from "./images/pixelcut-export.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from "../../Redux/userSlice/userSlice";
import SignUp from "./signUp";
import SignIn from "./signIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Auth = () => {
  const dispatch = useDispatch()
  const [showSignUp, setShowSignUp] = useState(true);
  const {success, error, message, loading} = useSelector(state=> state.user);

  const [createForm, setCreateForm] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    specialist: "",
    experience: "",
    password: "",
    confirmPassword: ""
    // image: ""
  })

  useEffect(() => {
    let toastId = null;

    if (loading) {
        toastId = toast.loading("Please wait...", {
            position: "bottom-left"
        });

    }

    if (success && message) {
        toast.update(toastId, {
            render: message,
            position: "bottom-left",
            type: "success",
            isLoading: false,
            autoClose: "4000"
        })
    }

    if (error && message) {
        toast.update(toastId, {
            render: message,
            position: "bottom-left",
            type: "error",
            isLoading: false,
            autoClose: "4000"
        })
    }

    return () => {
        if (toastId) {
            toast.dismiss(toastId);
        }
    };

}, [error, success, message, loading])



  const fieldsetClassName = "col-span-12 lg:col-span-6 md:px-2 flex flex-col  mt-2 md:mt-4 gap-y-1 gap-x-4";
  const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
  const inputClassName = "block text-sm px-2 py-1 text-gray-400 rounded-sm bg-gray-100";

  const formInputHandler = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value.toLowerCase()
    })

  };

  const submit_register_handler = (e) => {
    e.preventDefault()
    dispatch(userRegister({ data: createForm }))
  }

  const submit_login_handler = (e) => {
    e.preventDefault()
    dispatch(userLogin({ data : { email: createForm.email, password: createForm.password } }))
  }

  return (
    <section className="bg-white">
           <ToastContainer/>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 mt-16 lg:mt-12">

          <img
            alt=""
            src={salonWithWigs}

            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <NavLink className="block text-white border" to="/">
              <span className="sr-only">Home</span>

              <img src={logo} className="w-[90px] absolute z-70 bottom-[85vh] right-4" alt="" />
            </NavLink>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome To <span className="text-orange-500"> SA Uni Hair </span>
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-6 py-6 sm:px-12 lg:col-span-7 lg:px-10 lg:py-10 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-[100vw] w-[100%] px-2 ">
            <div className="relative -mt-16 block lg:hidden">

              <NavLink
                className="inline-flex size-20 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} className="w-[100%] " alt="" />

              </NavLink>

              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome To <span className="text-orange-500"> SA Uni Hair </span>
              </h1>

            </div>
            {showSignUp ?
              <SignUp setShowSignUp={setShowSignUp} submit_register_handler={submit_register_handler} formInputHandler={formInputHandler} createForm={createForm} fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
              :
              <SignIn setShowSignUp={setShowSignUp} submit_login_handler={submit_login_handler} formInputHandler={formInputHandler} createForm={createForm} fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />
            }
          </div>
        </main>
      </div>
    </section>
  )
};

export default Auth;