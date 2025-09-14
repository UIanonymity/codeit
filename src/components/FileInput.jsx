function FileInput ({name, value, onChange}) {

const handleChange = (e) => {
    const nextValue = e.target.files[0]
    onChange(name, nextValue);
};
return (
<input name="file" type="file" onChange={handleChange}></input>
);
}

export default FileInput;