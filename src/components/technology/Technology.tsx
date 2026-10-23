import React, { use } from 'react';
import type { TechType } from '../type';

interface TechnoProps {
  technologyPromise: Promise<TechType[]>;
  selectedTech: TechType[];
  setSelectedTech: React.Dispatch<React.SetStateAction<TechType[]>>;
}

const Technology = ({ technologyPromise, selectedTech, setSelectedTech }: TechnoProps) => {
  const technology = use(technologyPromise);

  const handleSelect = (techItem: TechType) => {
    if (!selectedTech.some((item) => item.id === techItem.id)) {
      setSelectedTech((prev) => [...prev, techItem]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {technology.map((tech) => {
        const isSelected = selectedTech.some((item) => item.id === tech.id);

        return (
          <div key={tech.id} className="p-5 container card bg-base-100 w-full shadow-sm border border-gray-100 rounded-3xl bg-white">
            <div>
              <div className="flex justify-between items-start">
                <img src={tech.icon} className="w-10 object-contain" alt={tech.name} />
                <p className="px-3 bg-[#81a8e69b] rounded-2xl mt-2 text-white text-xs outline-1 outline-[#044bbde3]">
                  {tech.badge}
                </p>
              </div>
              <h2 className="text-xl font-bold mt-2">{tech.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
              
              <div className="flex justify-between gap-2 text-xs sm:text-sm mt-3 flex-wrap">
                <p className="bg-gray-200 text-gray-700 rounded px-2 py-0.5">
                  {tech.category}
                </p>
                <p className="text-gray-500">{tech.difficulty}</p>
                <p className="font-semibold">{tech.rating}</p>
              </div>

              <div className="justify-end">
                <button
                  onClick={() => handleSelect(tech)}
                  className="bg-[#01030f] text-white w-full py-2 rounded-xl mt-5 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                  disabled={isSelected}
                >
                  {isSelected ? "Selected" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Technology;