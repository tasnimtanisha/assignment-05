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
    // Add item if it's not already selected
    if (!selectedTech.some((item) => item.id === techItem.id)) {
      setSelectedTech((prev) => [...prev, techItem]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5 w-fit">
      {technology.map((tech) => {
        // Check if THIS specific technology is currently selected
        const isSelected = selectedTech.some((item) => item.id === tech.id);

        return (
          <div key={tech.id} className="p-5 container card bg-base-110 w-70 shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <img src={tech.icon} className="w-10" alt={tech.name} />
                <p className="px-3 bg-[#81a8e69b] rounded-2xl mt-2 text-white outline-1 outline-[#044bbde3]">
                  {tech.badge}
                </p>
              </div>
              <h2 className="text-xl font-bold">{tech.name}</h2>
              <p className="text-gray-400 text-sm">{tech.description}</p>
              <div className="flex justify-between gap-5 text-sm mt-3">
                <p className="bg-gray-300 text-gray-700 rounded px-2 py-0.5">
                  {tech.category}
                </p>
                <p className="text-gray-500">{tech.difficulty}</p>
                <p>{tech.rating}</p>
              </div>
              <div className="justify-end">
                <button
                  onClick={() => handleSelect(tech)}
                  className="bg-[#01030f] text-white w-full py-2 rounded-xl mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
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