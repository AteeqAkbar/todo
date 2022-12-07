import React, { createContext, useState } from "react";
export const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      name: "Task1",
      desc: " Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine.",
    },
    {
      id: 2,
      name: "Task2",
      desc: " Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine.",
    },
    {
      id: 3,
      name: "Task3",
      desc: " Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine.",
    },
    {
      id: 4,
      name: "Task4",
      desc: " Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine.",
    },
  ]);
  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTask,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
