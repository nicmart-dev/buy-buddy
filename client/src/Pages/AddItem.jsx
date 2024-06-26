import "./AddItem.scss";
import axios from "axios";
import { useState } from "react";
export default function AddItem() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form.name.value);
    async function postItem() {
      try {
        const response = await axios.post(
          "http://localhost:5050/shopping-list",
          {
            name: form.name.value,
            quantity: form.quantity.value,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    postItem();
    setItem("");
    setQuantity("");
  }
  return (
    <div className="page">
      <h1 className="page-heading">Add Shopping Item</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          What do you need to buy?
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="item name"
          onChange={handleChangeItem}
          value={item}
        />
        <label className="form__label" htmlFor="item">
          Quantity
        </label>
        <input
          className="form__input"
          type="text"
          name="quantity"
          id="quantity"
          placeholder="how many"
          onChange={handleChangeQuantity}
          value={quantity}
        />
        <button className="button" type="submit">
          confirm
        </button>
      </form>
    </div>
  );
}
