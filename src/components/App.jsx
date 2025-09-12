import FoodList from './FoodList';
import mockitems from '../mock.json';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(mockitems);
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a,b) => b[order] - a[order]);
  
  const handleNewestClink = () => setOrder('createdAt');
  const handlecalorieClink = () => setOrder('calorie');
  
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  return (
    <div> 
      <button onClick={handleNewestClink}>최신순</button>
      <button onClick={handlecalorieClink}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
