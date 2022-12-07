import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/global_context";
import Card from "../components/card";

export function BlukDelete() {
  const { tasks, setTask } = useContext(GlobalContext);
  console.log(tasks);
  const [checkeds, setcheckeds] = useState([]);
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    if (checked) {
      setcheckeds((prev) => {
        return [...prev, value];
      });
    } else {
      setcheckeds((prev) => {
        return prev.filter((e) => e !== value);
      });
    }

    console.log(`${value} is ${checked}${checkeds}`);
  };
  console.log(`${checkeds}`);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask((pre) => {
      var filteredArray = pre.filter(function (array_el) {
        return (
          checkeds.filter(function (anotherOne_el) {
            return anotherOne_el == array_el.id;
          }).length == 0
        );
      });

      console.log(filteredArray, "filters", checkeds);
      return filteredArray;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-24 pb-[45px] mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {tasks &&
              tasks.map((element) => {
                return (
                  <Card
                    key={`${element.id}`}
                    data={element}
                    handleChange={handleChange}
                  />
                );
              })}
          </div>
        </div>
        <div className="pb-[50px]">
          <button
            onSubmit={submitHandler}
            className=" flex items-center  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-auto"
          >
            Bluk Delete
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </section>
    </form>
  );
}
