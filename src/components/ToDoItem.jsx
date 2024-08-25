import axios from "axios";
import "../App.css"

// eslint-disable-next-line react/prop-types
function ToDoItem({setState, title, status}) {
    let button = status === "PENDING" ? "edit" : "delete"

    function sendRequest() {
        axios.post("http://127.0.0.1:8080/v1/item/" + button, {
            "title": title,
            status: status === "PENDING" ? "DONE" : "PENDING", 
        }, 
    {headers: {"token": "some_token"}})
    .then(res => setState(res.data))
    }

    return (
      <div className="itemContainer">
        <p>{title}</p>
        <button className="actionButton" onClick={sendRequest}>
          {button}
        </button>
      </div>
    );
}

export default ToDoItem;