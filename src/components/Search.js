import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const filter = (searchedFood) => {
    if (!searchedFood) {
      props.setFoods(props.foods);
    } else {
      props.setFoods((prevValue) => {
        return prevValue.filter((food) =>
          food.name.toLowerCase().includes(searchedFood.toLowerCase())
        );
      });
    }
  };

  function searchHandler(e) {
    setSearch(e.target.value);
    filter(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <form>
      <Divider>Search Food</Divider>

      <label>Name</label>
      <Input value={search} type="text" onChange={searchHandler} />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;