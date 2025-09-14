import { useState } from "react";
import FileInput from './FileInput';

function FoodForm() {
    const [values, setValues] = useState({
        title: '',
        calorie: 0,
        content: '',
        imgFile: null,
    });

    const handleChange = (name, value) => {
        setValues(prevValues => ({
      ...prevValues,
      [name]: name === value ? Number(value) || 0 : value
    }));
    }

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value)
    
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); 
    };
   

    return( 
    <form style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '600px' }}>
        <input  name="title" value={values.title} onChange={handleInputChange}></input>
        <input  name="calorie" value={values.calorie} type="number" onChange={handleInputChange} ></input>
        <input  name="content" value={values.content} onChange={handleInputChange} ></input>
        <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>확인</button>
    </form>
    );
}

export default FoodForm;