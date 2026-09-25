import React from 'react';
import type { TechType } from './type';

interface YourStackProps {
  selectedTech: TechType[];
  setSelectedTech: React.Dispatch<React.SetStateAction<TechType[]>>;
}

const YourStack = ({ selectedTech, setSelectedTech }: YourStackProps) => {
  // Remove single item
  const handleRemoveOne = (id: string | number) => {
    setSelectedTech((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all items
  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm w-[300px] h-fit">
      <h3 className="text-2xl font-bold text-slate-800">Your Stack</h3>
      <p className="text-slate-400 text-sm mb-6 mt-1">
        {selectedTech.length} {selectedTech.length === 1 ? 'Technology' : 'Technologies'} Selected
      </p>

      <div className="flex flex-col gap-3 min-h-[120px]">
        {selectedTech.length === 0 ? (
          <p className="text-sm text-gray-400 py-6 text-center italic">
            No technologies selected yet.
          </p>
        ) : (
          selectedTech.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-slate-200/60 rounded-2xl bg-white shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-400 capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleRemoveOne(item.id)}
                className="text-slate-400 hover:text-slate-600 p-1 text-xl leading-none transition-colors"
                aria-label={`Remove ${item.name}`}
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>

      {selectedTech.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-6 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-semibold rounded-2xl text-sm transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;