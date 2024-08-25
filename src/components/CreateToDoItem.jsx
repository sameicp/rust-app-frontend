import axios from "axios"
import { useState } from "react";
import "../App.css"

// eslint-disable-next-line react/prop-types
function CreateToDoItem({setState}) {
    const [title, setTitle] = useState("");

    function createItem() {
        axios.post("http://127.0.0.1:8080/v1/item/create/" + title, {},
            {headers: {"token": "some_token"}}
         ).then(res => {
            setState(res.data);
         })
    }

    function handleChange(e) {
        setTitle(e.target.value)
    }
  return (
    <div className="inputContainer">
      <input
        type="text"
        id="name"
        placeholder="create todo item"
        value={title}
        onChange={handleChange}
      />
      <div className="actionButton" id="create-button" onClick={createItem}>
        Create
      </div>
    </div>
  );
}

export default CreateToDoItem