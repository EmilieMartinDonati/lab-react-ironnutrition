import React from 'react';
import {useState} from 'react';

const AddForm = ({ AddFood, setIsClicked }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);

  const handleSubmit = (event) => {
   event.preventDefault();
   const newFood = {name: name, image: image, calories: calories};
   AddFood(newFood);
   setName("");
   setImage("");
   setCalories(0);
   setIsClicked(false);
  }

  return (
    <>
      <h3>YAY</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="add image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="add number of calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddForm;
