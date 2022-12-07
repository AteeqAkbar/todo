import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../contexts/global_context";

export default function CreateTask() {
  const { tasks, setTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const input = useRef();
  const inputDesc = useRef();

  const inputHandler = () => {
    const inputValue = input.current.value;
    const inputDescValue = inputDesc.current.value;

    if (inputValue) {
      setTask((prev) => {
        return [
          { id: Date.now(), name: inputValue, desc: inputDescValue },
          ...prev,
        ];
      });
      console.log(tasks);
      navigate("/list-tasks");
    } else {
      input.current.focus();
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            ADD TASK...
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please Add task and description...
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
          <div className="relative sm:mb-0 flex-grow w-full">
            <label for="full-name" className="leading-7 text-sm text-gray-400">
              Task
            </label>
            <input
              ref={input}
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative sm:mb-0 flex-grow w-full">
            <label for="full-name" className="leading-7 text-sm text-gray-400">
              Description
            </label>
            <input
              ref={inputDesc}
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={inputHandler}
            className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Add...
          </button>
        </div>
      </div>
    </section>
  );
}
