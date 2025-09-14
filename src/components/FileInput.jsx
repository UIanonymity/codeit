import { useRef } from "react";


function FileInput ({name, value, onChange}) {
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
}

return (
    <div>
        <input name="file" type="file" onChange={handleChange} ref={inputRef}></input>
        {value && <button onClick={handClearClick}>X</button>}
    </div>

);
}

export default FileInput;