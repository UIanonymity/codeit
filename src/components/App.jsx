import { getFoods } from '../api';
import FoodList from './FoodList';
import { useEffect, useState } from 'react';

const LIMIT = 10;

function App() {
  
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState('');
  const [hasNext, setHasNext] = useState(false);
// 오프셋이 아니라 커서를 사용하고 있어서 오류가 나고 있었음 api,App 파일 로직 맞춰서 수정 
  const [ isLoading, setIsLoading ] = useState(false);
  const [ LoadingError, setLoadingError ] = useState(null);
  const [search, setSearch] = useState('');
  
  const handleNewestClink = () => setOrder('createdAt');
  const handlecalorieClink = () => setOrder('calorie');
  
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  const handleLoad = async (options) => {
    let result;
    try {
    setIsLoading(true);
    setLoadingError(null);
    result = await getFoods(options);
  } catch (error) { setLoadingError(error); return; } 
  finally { setIsLoading(false); }

    const { foods, paging: { nextCursor }, } = result; 
    
    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems((prevItem) => [...prevItem, ...foods]);
      /* 삭제 함수 이용 후 불러오기가 작동될 때 삭제되기 이전의 값을 불러오게 됨
      prev 를 통해 스테이트 값을 내려 받아서 렌더링하도록 함 */
    }
    setCursor(nextCursor || '');
    setHasNext(!!nextCursor);
  };

   const handleLoadMore = () => {
    handleLoad({ 
      order,  cursor, search, limit: LIMIT
    });
  }

   const handleSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target['search'].value;
     setCursor('');  // 검색 시작 시 커서 초기화
    setSearch(value);
  };

  const sortedItems = items.sort((a,b) => b[order] - a[order]);


/* useEffect 사용 안 하면 무한 호출에 갇히는 수가 있음 
페이지 처음 렌더링 될때 데이터 불러와서 보여주고 싶으면 useEffect.*/
  useEffect(() => {
    handleLoad({ order, cursor: '', search, });
}, [order,search]); // 정렬기준이 바뀔 때 요청을 새로 보냄.
//  처음 렌더링 때 요청 두 번 보내는 것은 개발 모드에서 StrictMode 때문에 발생하는 정상 동작. 

  return (
    <div> 
      <button onClick={handleNewestClink}>최신순</button>
      <button onClick={handlecalorieClink}>칼로리순</button>
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">검색</button>
      </form>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    {hasNext && (
      <button disabled={isLoading} onClick={handleLoadMore}>
        더보기
        </button>
    )}
    {LoadingError?.message && <span>{LoadingError.message}</span>}
    </div>
  );
}

export default App;
