import axios from "axios";
import { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import CreateToDoItem from "./components/CreateToDoItem";
import "./App.css"
 
function App() {
  const [state, setState] = useState(null);

  function getItems() {
    axios
      .get("http://127.0.0.1:8080/v1/item/get", {
        headers: { token: "some_token" },
      })
      .then((res) => {
        setState(res.data);
      });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {state === null && <div>Loading...</div>}
      {state !== null && (
        <div className="App">
          <div className="mainContainer">
            <div className="header">
              <p>complete tasks: {state.done_item_count}</p>
              <p>pending tasks: {state.pending_item_count}</p>
            </div>
            <h1>Done Items</h1>
            {state.done_items.map((item, index) => (
              <ToDoItem
                title={item.title}
                status={item.status}
                setState={setState}
                key={index}
              />
            ))}
            <h1>Pending Items</h1>
            {state.pending_items.map((item, index) => (
              <ToDoItem
                title={item.title}
                status={item.status}
                setState={setState}
                key={index}
              />
            ))}

            <CreateToDoItem setState={setState} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;