import { useState } from "react";

function FoodForm() {
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

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        title, calorie, content,
    });
   }

    return( 
    <form>
        <input  name="title" value={values.title} onChange={handleTitleChange}></input>
        <input  name="calorie" value={values.calorie} type="number" onChange={handleCalorieChange} ></input>
        <input  name="content" value={values.content} onChange={handleContentChange} ></input>
        <button type="submit" onClick={handleSubmit}>확인</button>
    </form>
    );
}

export default FoodForm;