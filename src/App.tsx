import { useState, Suspense } from "react";
import Logo from "./assets/logo-text.png";
import Banner from "./assets/banner-stack.png";
import Technology from "./components/technology/Technology";
import YourStack from "./components/YourStack";
import type { TechType } from "./components/type";
import Nav from "./components/Nav";

const technologyFetch = async (): Promise<TechType[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const technologyPromise = technologyFetch();

function App() {
  const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

  return (
    <div className="min-h-screen bg-slate-50/30 pt-6 md:pt-4 overflow-x-hidden">
      <Nav />

      <div className="px-4 sm:px-8 py-8 md:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Build Your Ideal
            </h2>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-linear-to-r from-orange-500 to-violet-800 bg-clip-text text-transparent leading-tight">
              Development Stack
            </h2>
            <p className="pt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button className="bg-linear-to-r from-orange-400 to-rose-500 rounded-xl px-4 py-2 text-white font-medium text-sm sm:text-base">
                Explore Technologies
              </button>
              <button className="border-2 border-gray-400 rounded-xl px-6 py-2 text-slate-700 font-medium text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src={Banner} alt="Banner" className="w-full max-w-[280px] sm:max-w-md lg:max-w-full h-auto object-contain" />
          </div>

        </div>

        <div className="mt-10 lg:mt-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="pt-1 text-sm sm:text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
      </div>

      <Suspense fallback={<h2 className="text-center py-10">Loading......</h2>}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-8 items-start justify-between pb-20">
          <Technology
            technologyPromise={technologyPromise}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
          <YourStack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          />
        </div>
      </Suspense>

      <footer className="border-t border-gray-200 pt-10 pb-16 px-6 sm:px-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div>
            <img src={Logo} alt="" />
            <p className="pt-4 text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <ul className="flex gap-4 pt-4 text-sm font-medium text-slate-600">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-800 mb-3">PRODUCT</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-800 mb-3">COMPANY</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>About</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-800 mb-3">LEGAL</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;