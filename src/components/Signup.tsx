import welcome from "../assets/welcome.jpg"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase/setup"
import { useState } from "react"
import EmailSignup from "./EmailSignup.tsx"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

  const [emailSignup,setEmailSignup] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const googleSignin = async() =>{
    try{
      await  signInWithPopup(auth,googleProvider)
      setTimeout(()=>{
        auth?.currentUser !== null && navigate("/main")
      },2000)
      auth?.currentUser !== null && toast.success("LoggedIn succesfully")
    }catch(err){
      console.error(err)
      const error:any = err
      toast.error(error)
    }
  }

  const login = async() =>{
    try{
     const data = await signInWithEmailAndPassword(auth,email,password)
     setTimeout(()=>{
      data?.user?.emailVerified && navigate("/main")
     },2000)
     data?.user?.emailVerified && toast.success("LoggedIn succesfully")
    }catch(err){
      console.error(err)
    }
  }
  

  return (
    <>
    <ToastContainer autoClose={3000}/>
     <div
  style={{
    backgroundImage: `url(${welcome})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  }}
  className="flex items-center justify-center"
>
  <div className="bg-white w-full max-w-3xl rounded-md p-6 shadow-lg">
  {/* Quora Title */}
  <h1 className="text-red-700 text-5xl font-bold font-serif text-center">
    Quora
  </h1>
  <h1 className="text-center font-semibold text-gray-600 mt-2 text-sm">
    A place to share knowledge and better understand the world
  </h1>

  {/* Login + Signup Section */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 px-2">
    {/* Signup Left */}
    <div className="flex flex-col items-start">
      <p className="text-zinc-500 text-xs w-64">
        By continuing you indicate that you agree to Quora’s{" "}
        <span className="text-cyan-700">Terms of Service</span> and{" "}
        <span className="text-cyan-700">Privacy Policy.</span>
      </p>

      <div
        onClick={googleSignin}
        className="cursor-pointer flex p-2 border items-center w-64 rounded-md mt-4"
      >
        <img src={google} className="w-5 h-5 ml-2" />
        <h1 className="ml-6">Continue with Google</h1>
      </div>

      <div className="cursor-pointer flex p-2 border items-center w-64 rounded-md mt-3">
        <img src={facebook} className="w-5 h-5 ml-2 rounded-full" />
        <h1 className="ml-6">Continue with Facebook</h1>
      </div>

      <h1
        onClick={() => setEmailSignup(true)}
        className="text-center text-xs font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full cursor-pointer p-1"
      >
        Sign up with email
      </h1>
    </div>

    {/* Login Right */}
    <div>
      <h1 className="text-md font-semibold">Login</h1>
      <hr className="w-64 mt-1" />

      <label className="mt-4 block font-medium text-xs">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="border p-2 w-64 mt-1 rounded-md text-sm"
      />

      <label className="mt-4 block font-medium text-xs">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
        className="border p-2 w-64 mt-1 rounded-md text-sm"
      />

      <div className="flex items-center justify-between mt-3 w-64">
        <h1 className="text-zinc-400 text-xs hover:underline cursor-pointer">
          Forgot password?
        </h1>
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  </div>


    <hr className="mt-8" />
    <h1 className="text-sm text-center mt-3 text-zinc-600">
      About · Careers · Privacy · Terms · Contact · Languages · Your · Ad ·
      Choices · Press© Quora, Inc. 2024
    </h1>
  </div>

  {emailSignup && <EmailSignup setEmailSignup={setEmailSignup} />}
</div>
    </>
   
  )
}

export default Signup
