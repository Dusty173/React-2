import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";

function AddItem({ setData }) {
  const INITIAL_STATE = { item: "", name: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [item, setItem] = useState("Snacks");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value, item: item }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);
  };

  const getSelected = () => {
    const selected = document.getElementById("item");
    setItem(selected.value);
  };

  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <div id="selectDiv">
        <label htmlFor="item">Type to add:</label>
        <select id="item" name="item" onChange={getSelected}>
          <option value="Snack">Snack</option>
          <option value="Drink">Drink</option>
        </select>
      </div>
      <div id="textInputDiv">
        <input
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          value={formData.name}
        />
      </div>
      <div>
        <button>Add!</button>
      </div>
    </form>
  );
}

export default AddItem;
