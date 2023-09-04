import Header from "./Header";
import { netFlix_background } from "../utils/Logo";
import { useState } from "react";

const Login = () => {
    const [signUpForm,setSignUpForm] = useState(true);

    const toggleSignUpForm = () =>{
       setSignUpForm(!signUpForm)
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src={netFlix_background} alt='netFlix_background'/>
            </div>
            <form className="absolute rounded-lg bg-opacity-80 bg-black text-white w-4/12 my-36 p-12 mx-auto right-0 left-0">
                <h1 className="font-bold text-2xl my-4">
                    {signUpForm ? "Sign In" : "Sign Up"}
                </h1>
                {!signUpForm && <input className="p-4 my-4 w-full rounded-md bg-gray-800"
                type="text" placeholder="Full Name"/>}
                <input className="p-4 my-4 w-full rounded-md bg-gray-800"
                type="text" placeholder="Email Address"/>
                 <input className="p-4 my-4 w-full rounded-md bg-gray-800"
                type="password" placeholder="Password"/>
                <button className="p-4 my-6 bg-red-600 w-full font-bold text-xl rounded-md">
                    {signUpForm ? "Sign In" : "Sign Up Now"}
                </button>
                <p className="py-2 text-gray-500 text-xl">{signUpForm ? "New to Netflix?" : "Already Registered?" }
                <a className="px-2 text-white" onClick={toggleSignUpForm} href="#">{signUpForm ? "Sign Up Now" : "Sign In Now"}</a></p>
                <p className="py-2 text-gray-500">{signUpForm ? "This page is protected by Google reCAPTCHA to ensure you're not a bot." : ""} 
                <a className="text-blue-800 text-lg font-bold" href="#">{signUpForm ? "Learn more." : ""}</a></p>
            </form>
        </div>
    )
}
export default Login;