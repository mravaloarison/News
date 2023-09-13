import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import NewsComponent from "./NewsComponent";

function App() {
  return (
    <div>
      <header className="lg:px-8 lg:py-5 p-4 bg-blue-600 text-slate-50">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-2">
            <div className="w-7 h-7 border"></div>
            <p className="text-2xl font-light">Latest News</p>
          </div>
          <a href="/" className="text-gray-300 flex gap-2 items-center">
            <p>Github</p>
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
          </a>
        </div>
      </header>
      <NewsComponent />
      <footer>
        <div>

        </div>
      </footer>
    </div>
  );
}

export default App;
