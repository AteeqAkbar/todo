import { useContext } from "react";
import { GlobalContext } from "../contexts/global_context";
import Card from "../components/card";

export function ListTasks() {
  const { tasks, setTask } = useContext(GlobalContext);

  
  console.log(tasks);
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
    
            {tasks &&
              tasks.map((element) => {
                return <Card key={`${element.id}`} data={element} />;
              })}
     
        </div>
      </div>
    </section>
  );
}
