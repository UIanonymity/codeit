import { getFoods } from '../api';
import FoodList from './FoodList';
import { useEffect, useState } from 'react';

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

  const handleLoad = async () => {
    const foods = await getFoods(); 
    setItems(foods);
  };

/* useEffect 사용 안 하면 무한 호출에 갇히는 수가 있음 
페이지 처음 렌더링 될때 데이터 불러와서 보여주고 싶으면 useEffect.*/
  useEffect(() => {
    handleLoad();
}, []);

  return (
    <div> 
      <button onClick={handleNewestClink}>최신순</button>
      <button onClick={handlecalorieClink}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
