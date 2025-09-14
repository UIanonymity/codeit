function SearchBar({ search, setSearch, setCursor }) { 
    const handleSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target['search'].value;
     setCursor('');  // 검색 시작 시 커서 초기화
    setSearch(value);
  };
  return(
    <form onSubmit={handleSearchSubmit}>
         <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">검색</button>
      </form>
  );
}

export default SearchBar;