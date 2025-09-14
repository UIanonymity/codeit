import { useEffect, useRef, useState } from "react";


function FileInput ({name, value, onChange}) {
    const [ preview, setPreview ] = useState();

    const inputRef = useRef();

const handleChange = (e) => {
    const nextValue = e.target.files[0]
    onChange(name, nextValue);
};

const handClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
};

//이미지 미리보기 
useEffect(() => {
    if(!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

/* ObjectURL를 해제하는 코드. 사용자가 업로드 변경하거나 취소하는 경우, 
이전의 사이드 이펙트를 정리함(메모리 정리) */
    return () => {
        setPreview();
        URL.revokeObjectURL(nextPreview)
    }

}, [value]);

return (
    <div>
        <img src={preview} alt="이미지 미리보기" />
        <input name="file" type="file" onChange={handleChange} ref={inputRef}/>
        {value && <button onClick={handClearClick}>X</button>}
    </div>

);
}

export default FileInput;