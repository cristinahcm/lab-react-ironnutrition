import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);

  const handleDelete = (index) => {
    const newFoodsArr = [...foodsArr];
    console.log(newFoodsArr[index]);
    console.log(foodsArr.length);
    newFoodsArr.splice(index, 1);
    console.log(newFoodsArr.length);
    setFoodsArr(newFoodsArr);
  };

  return (
    <div className="App">
      <AddFoodForm foods={foodsArr} setFoods={setFoodsArr} />
      <Search foods={foodsArr} setFoods={setFoodsArr} />
      <h1>Food List</h1>
      <div className="foodList">
        {foodsArr.map((food, index) => {
          return (
            <FoodBox food={food} handleDelete={handleDelete} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;