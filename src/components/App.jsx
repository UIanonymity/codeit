import { getFoods } from '../api';
import FoodList from './FoodList';
import { useEffect, useState } from 'react';

const LIMIT =10;

function App() {
  
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState('');
  const [hasNext, setHasNext] = useState(false);
// 오프셋이 아니라 커서를 사용하고 있어서 오류가 나고 있었음 api,App 파일 로직 맞춰서 수정 

  const sortedItems = items.sort((a,b) => b[order] - a[order]);
  
  const handleNewestClink = () => setOrder('createdAt');
  const handlecalorieClink = () => setOrder('calorie');
  
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  const handleLoad = async (options) => {
    const { foods, paging } = await getFoods(options); 
    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems([...items, ...foods]);
    }
     setCursor(paging.nextCursor || '');
    setHasNext(!!paging.nextCursor);
  };

   const handleLoadMore = () => {
    handleLoad({ order,  cursor, limit:LIMIT });
  }

/* useEffect 사용 안 하면 무한 호출에 갇히는 수가 있음 
페이지 처음 렌더링 될때 데이터 불러와서 보여주고 싶으면 useEffect.*/
  useEffect(() => {
    handleLoad({ order, cursor: '', limit: LIMIT });
}, [order]); 

  return (
    <div> 
      <button onClick={handleNewestClink}>최신순</button>
      <button onClick={handlecalorieClink}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button disabled={!hasNext} onClick={handleLoadMore}>더보기</button>
    </div>
  );
}

export default App;
