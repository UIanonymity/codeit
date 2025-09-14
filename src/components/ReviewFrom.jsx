import { useState } from "react";

function ReviewForm() {
   const [ title, setTitle ] = useState('');
   const [calorie, setCalorie] = useState(0);
   const [content, setContent] = useState('');

   const handleTitleChange = (e) => {
    setTitle(e.target.value);
   };

    const handleCalorieChange = (e) => {
    const nextCalorie = Number(e.target.value) || 0;
    setCalorie(nextCalorie);
   };

   const handleContentChange = (e) => {
    setContent(e.target.value);
   };

    return( 
    <form>
        <input value={title} onChange={handleTitleChange}></input>
        <input value={calorie} type="number" onChange={handleCalorieChange} ></input>
        <input value={content} onChange={handleContentChange} ></input>
    </form>
    );
}

export default ReviewForm;