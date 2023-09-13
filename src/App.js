import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import NewsComponent from "./NewsComponent";

function App() {
  return (
    <div>
      <header className="lg:px-8 lg:py-5 p-4 bg-blue-600 text-slate-50">
        <div className="flex justify-between">
          <a href="/" className="flex justify-center items-center text-xl font-semibold">
            <span className="px-2.5 py-1.5 border border-white rounded-bl">Latest</span>
            <span className="px-2.5 py-1.5 border border-white bg-white text-blue-600 rounded-tr">News</span>
          </a>
          <a href="https://github.com/mravaloarison/News" target="_blank" rel="noopener noreferrer" className="text-gray-300 flex gap-2 items-center">
            <p>Github</p>
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
          </a>
        </div>
      </header>
      <NewsComponent />
      <footer className="w-full flex justify-center items-center">
        <div className="p-8 text-xs text-gray-400">
          © Latest News 2023, by Mami.
        </div>
      </footer>
    </div>
  );
}

export default App;
