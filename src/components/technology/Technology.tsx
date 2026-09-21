import React,{use} from 'react';
import type { TechType } from '../type';
// import { FaReact } from "react-icons/fa"
interface TechnoProps {
    technologyPromise: Promise<TechType[]>
}

const Technology = ({technologyPromise}:TechnoProps) => {

    const technology = use(technologyPromise)
    console.log(technology)
    return (
        <div className="grid grid-cols-3 gap-0">
            {technology.map((technology)=>{
                return<div className=" container mx-auto card bg-base-110 w-60 shadow-sm">
  <figure>

  </figure>
        {/* <FaReact/> */}
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p></p>
    <div className="divider"/>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                // <div key={technology.id}>{technology.name}</div>
            })}
            
        </div>
    );
};

export default Technology;