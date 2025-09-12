import { getFoods } from '../api';
import FoodList from './FoodList';
import { useState } from 'react';

function App() {
  
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a,b) => b[order] - a[order]);
  
  const handleNewestClink = () => setOrder('createdAt');
  const handlecalorieClink = () => setOrder('calorie');
  
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  const handleLoadClick = async () => {
    const foods = await getFoods(); 
    setItems(foods);
  }

  return (
    <div> 
      <button onClick={handleNewestClink}>최신순</button>
      <button onClick={handlecalorieClink}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
