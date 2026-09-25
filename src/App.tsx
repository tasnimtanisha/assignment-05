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
    <div className="min-h-screen bg-slate-50/30 pt-20">
      <Nav />

      <div className="flex flex-col align-center justify-between px-8 py-28 max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl flex-col lg:flex-row">Build Your Ideal</h2>
        <h2 className="font-bold text-5xl flex-col lg:flex-row bg-linear-to-r from-orange-500 to-violet-800 bg-clip-text text-transparent">
          Development Stack
        </h2>
        <p className="flex-col lg:flex-row pt-2 text-slate-600">
          Explore frontend, backend, database, and tooling options,<br />
          compare them side by side, and put together the stack that fits your <br />
          next project.
        </p>
        <div className="flex-col lg:flex-row pt-3 flex gap-2">
          <button className="bg-linear-to-r from-orange-400 to-rose-500 rounded-xl px-3 py-1 text-white font-medium">
            Explore Technologies
          </button>
          <button className="border-2 border-gray-400 rounded-xl px-9 py-1 text-slate-700 font-medium">
            Learn More
          </button>
        </div>
        <img src={Banner} alt="" className="ms-auto block h-auto -mt-80" />

        <h2 className="font-bold text-3xl pl-20 mt-12">
          Explore the{" "}
          <span className="bg-linear-to-r from-fuchsia-500 to-fuchsia-700 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="pl-20 pt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense fallback={<h2 className="text-center py-10">Loading......</h2>}>
        <div className="max-w-7xl mx-auto px-8 flex gap-8 items-start justify-between pb-20">
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

      <footer className="border-t border-gray-200 pt-10 pb-16 px-16 bg-white">
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
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