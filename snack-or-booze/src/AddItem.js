import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import "./AddItem.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function AddItem({ setData }) {
  const INITIAL_STATE = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snacks",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const type = formData.type;
    delete formData.type;

    SnackOrBoozeApi.postItem(formData, type);
    history.push("/");
  };

  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <div id="selectDiv">
        <label htmlFor="type">Type to add:</label>
        <select
          id="type"
          name="type"
          onChange={handleChange}
          value={formData.value}
        >
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </select>
      </div>
      <div id="InputDiv">
        <input
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
        />
        <br />
        <input
          id="description"
          name="description"
          placeholder="Description"
          type="description"
          onChange={handleChange}
          value={formData.value}
        />
        <br />
        <input
          id="recipe"
          name="recipe"
          placeholder="Recipe"
          type="recipe"
          onChange={handleChange}
          value={formData.value}
        />
        <br />
        <input
          id="serve"
          name="serve"
          placeholder="Serve"
          type="serve"
          onChange={handleChange}
          value={formData.value}
        />
      </div>
      <div>
        <button>Add!</button>
      </div>
    </form>
  );
}

export default AddItem;
