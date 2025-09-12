import HandIcon from "./HandIcon.jsx";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
  <button onClick={handleClick}>
    <HandIcon value={value} />
  </button>
  );
}

export default HandButton;
