import { useState } from "react";
import FileInput from './FileInput';
import { createFood } from './../api';

const INTIAL_VALUES = {
        title: '',
        calorie: 0,
        content: '',
        imgFile: null,
    };

function FoodForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittingError, setSubmittingError ] = useState(null);
    const [values, setValues] = useState(INTIAL_VALUES);

    const handleChange = (name, value) => {
        setValues(prevValues => ({
      ...prevValues,
      [name]: name === "calorie" ? Number(value) || 0 : value
    }));
    }

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value)
    
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imgFile', values.imgFile);
    formData.append('title', values.title);
    formData.append('calorie', values.calorie);
    formData.append('content', values.content); 

    try{
        setSubmittingError(null);
        setIsSubmitting(true);
        await createFood(formData);
    } catch(error) {
        setSubmittingError(error);
        return;
    } finally {
        setIsSubmitting(false);
    }

    setValues(INTIAL_VALUES);
  };

   console.log("imgFile in state:", values.imgFile);


    return( 
    <form style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '600px' }}>
        <input  name="title" value={values.title} onChange={handleInputChange}></input>
        <input  name="calorie" value={values.calorie} type="number" onChange={handleInputChange} ></input>
        <input  name="content" value={values.content} onChange={handleInputChange} ></input>
        <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
        <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>확인</button>
        {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
    );
}

export default FoodForm;