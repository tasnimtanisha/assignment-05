// import { useEffect,useState } from "react";
import Logo from "./assets/logo-text.png";
import Banner from "./assets/banner-stack.png"
import Technology from "./components/technology/Technology"
import { Suspense } from "react";
import type { TechType } from "./components/type";

const technologyFetch = async():Promise<TechType[]> =>{
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data
}
const technologyPromise = technologyFetch();

function App() {
  
  return (
    <>
    <nav className="flex justify-around p-4 px-0  " >
      <img src={Logo} alt= "" />
      <ul className="flex gap-4 items-center pt-2 ">
        <li className="text-pink-500">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="justify-self-end flex gap-3">
        <button>Sign In</button>
      <button className="bg-pink-500 text-white px-3 py-1 rounded-2xl">Sign Up</button>
      </div>
      </nav>
      <div className="flex flex-col align-center justify-between px-8 py-28">
        <h2 className="font-bold text-5xl pl-20">Build Your Ideal</h2>
        <h2 className="font-bold text-5xl pl-20 bg-gradient-to-r from-orange-500 to-violet-800 bg-clip-text text-transparent">Development Stack</h2>
        <p className="pl-20 pt-2">Explore frontend, backend,database,and tooling options,<br />compare them side by side, and put together the stack that fits your <br />next project.</p>
        <div className="pl-20 pt-3 flex gap-2">
        <button className="bg-gradient-to-r from-orange-400 to-rose-500 rounded-xl px-3 py-1 text-white">Explore Technologies</button>
        <button className="border-2 border-gray-500 rounded-xl px-9 py-1">Learn More</button>
        </div>
        <img src={Banner} alt="" className="ms-auto block h-auto -mt-80"/>

        <h2 className="font-bold text-3xl pl-20">Explore the <span className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent">Technologies</span></h2>
        <p className="pl-20 pt-2">Pick one technology per category to build your ideal stack.</p>
      </div>
        <Suspense fallback={<h2>Loading......</h2>}>
      <Technology technologyPromise={technologyPromise}/>
        </Suspense>
    
        <div className="p-4">
          <img src={Logo} alt= "" />
          <p className="pt-4">Curated tools, technologies, and resources for devolopers building<br/>modern software.</p>
          <ul className="flex gap-4 pt-4">
            <li>GitHub</li>
            <li>Twetter</li>
            <li>Linkedin</li>
          </ul>
        </div>

        <div>
          <h2 className="flex justify-center -mt-38 font-bold">PRODUCT</h2>
          <ul className="pl-149 pt-3">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

       <div>
          <h2 className="flex justify-center pl-115 -mt-26 font-bold">COMPANY</h2>
          <ul className="pl-205 pt-3">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div> 

        <div>
          <h2 className="flex justify-end pr-45 font-bold -mt-27">LEGAL</h2>
          <ul className="pl-259 pt-3">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        
    </>
  )
}
export default App
