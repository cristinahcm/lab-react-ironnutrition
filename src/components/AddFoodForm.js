import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [isActive, setActive] = useState(true);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFood((prevValue) => {
      const newList = [...prevValue];
      newList.unshift({
        name: name,
        calories: calories,
        image: image,
        servings: servings,
      });
      return newList;
    });
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <>
      <form className={isActive ? 'Show' : 'Hide'} onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={handleNameInput} />

        <label>Image</label>
        <Input value={image} type="text" onChange={handleImageInput} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCaloriesInput} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServingsInput} />

        <button type="submit">Create</button>
      </form>
      <div>
        <button className="button is-info" onClick={() => setActive(!isActive)}>
          {' '}
          {isActive ? 'Hide' : 'Show Form'}{' '}
        </button>
      </div>
    </>
  );
}

export default AddFoodForm;