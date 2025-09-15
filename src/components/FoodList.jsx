import { useState } from 'react';
import './FoodList.css';
import FoodForm from './FoodForm';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete, onEdit }) {
  const { imgUrl, title, calorie, content, createdAt } = item;
  
  const handleDeleteClick = () =>onDelete(item.id);
  
  const handEditClick = () => {
    onEdit(item.id);
  }

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}(kcal)</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleDeleteClick}>삭제</button>
      <button onClick={handEditClick}>수정</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  const [editingId, setEditingId ] = useState(null);
  return (
  <ul>
    {items.map((item) => {
      if(item.id === editingId) {
        return(
        <li key={item.id}>
        <FoodForm />
      </li>
    );
  }
  return (
    <li key={item.id}>
      <FoodListItem item={item} onDelete={onDelete} onEdit={setEditingId}/>
    </li>
    );
  })}
  </ul>
  );
}

export default FoodList;
