
const Login = () => {
  return (
    <>
        <div className="w-full h-auto flex-col lg:px-25 md:px-15 px-10 flex items-center justify-around p-2">
            <img  className="h-25" src="./photos/logo.png"/>
            <div className="lg:w-100 md:w-110 w-full h-150 border border-[#1c1c1c] py-10 px-7 md:px-10 bg-[#2e2e2e] rounded-2xl flex flex-col items-center justify-start">
                <div className="flex items-center border active:border-[#969696] border-[#747474] hover:border-[#969696] w-full md:px-5 px-3 rounded-lg h-10 bg-[#4f4f4f] justify-around">
                 <span><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="25" height="25" fill="#969696">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                 </svg></span>
                 <input type="text"spellCheck="false" className="w-full px-3 focus:outline-none text-[#e3e3e3] h-full" placeholder="Username, Phone, or Email" />
                </div>
                <div className="flex mt-3 mb-3 items-center border active:border-[#969696] border-[#747474] hover:border-[#969696] w-full md:px-5 px-3 rounded-lg h-10 bg-[#4f4f4f] justify-around">
                  <span><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="25" height="25" fill="#969696">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg></span>
                 <input type="text"spellCheck="false" className="w-full px-3 focus:outline-none text-[#e3e3e3] h-full" placeholder="Password" />
                </div>
                <div className="text-[#e3e3e3] mb-3 w-full flex items-center justify-between text-sm ">
                    <label className="flex gap-1" htmlFor="remember">
                        <input type="checkbox" id="remember" class="remember"/>
                        Remember me
                    </label>
                    <a href="#" className="underline hover:text-[#b4b4b4]">Forgot Password?</a>
                </div>
                <button className="w-full mb-3 p-5 border border-t-red-500 hover:text-white border-l-red-700 border-b-red-700 border-r-red-700 bg-[linear-gradient(to_bottom,#c90a17,#8f0710)] hover:-translate-y-0.5 transform transition-all duration-200 hover:bg-[linear-gradient(to_bottom,#fa0718,#8f0710)] cursor-pointer rounded-[10px] font-bold text-[#dbd9d9] text-2xl">Login</button>
                <div className="flex mb-3 w-full items-center justify-around">
                    <hr className="h-0.5 border border-[#6e6e6e] w-1/3"/>
                    <span className="text-[#6e6e6e]">OR</span>
                    <hr className="h-0.5  border border-[#6e6e6e] w-1/3"/>
                </div>
                <button className="w-full flex items-center justify-center gap-2  mb-3 p-5 hover:text-white bg-[linear-gradient(to_bottom,#878787,#3b3b3b)] hover:-translate-y-0.5 transform transition-all duration-200 hover:bg-[linear-gradient(to_bottom,#b3b1b1,#3b3b3b)] cursor-pointer rounded-[10px] font-bold text-[#dbd9d9] text-lg">
                    <img className="h-6" src="./photos/apple_logo_32.png" alt="" />
                    <span>Login with apple</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 mb-3 p-5 hover:text-white bg-[linear-gradient(to_bottom,#878787,#3b3b3b)] hover:-translate-y-0.5 transform transition-all duration-200 hover:bg-[linear-gradient(to_bottom,#b3b1b1,#3b3b3b)] cursor-pointer rounded-[10px] font-bold text-[#dbd9d9] text-lg">
                    <img className="h-6" src="./photos/logo-google.svg" alt="" />
                    <span>Login with Google</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 mb-3 p-5 hover:text-white bg-[linear-gradient(to_bottom,#878787,#3b3b3b)] hover:-translate-y-0.5 transform transition-all duration-200 hover:bg-[linear-gradient(to_bottom,#b3b1b1,#3b3b3b)] cursor-pointer rounded-[10px] font-bold text-[#dbd9d9] text-lg">
                    <img className="h-6" src="./photos/logo-facebook.svg" alt="" />
                    <span>Login with Facebook</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Login

