import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddForm from './components/AddForm';
import SearchBar from './components/SearchBar';
import List from './components/List';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => setIsClicked(true);
  const [foods, setFoods] = useState(Foods);
  const [searchedString, setSearchedString] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [number, setNumber] = useState(0);

  const displayFoodList = (param1, param2) => {
    const foodClicked = foods.filter((food) => food.name === param1);
    console.log(param2);
    setFoodList([...foodList, ...foodClicked]);
  }

  const AddFood = (param) => {
    setFoods([...foods, param]);
  };

  let foodsToDisplay = [];
  if (searchedString !== '') {
    foodsToDisplay = foods.filter((food) =>
      food.name.toUpperCase().includes(searchedString.toUpperCase())
    );
    console.log(foodsToDisplay);
  }
  else {
    foodsToDisplay = foods;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickHandler}>Add New Food</button>
        {isClicked && <AddForm AddFood={AddFood} setIsClicked={setIsClicked} />}
        <SearchBar
          searchedString={searchedString}
          setSearchedString={setSearchedString}
        />
        <FoodBox foods={foodsToDisplay} displayFoodList={displayFoodList} number={number} setNumber={setNumber} />
        <List foodList={foodList} number={number}/>
      </header>
    </div>
  );
}

export default App;
