import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

// const WINS = {
//   rock: 'scissor',
//   scissor: 'paper',
//   paper: 'rock',
// };

// function GetResult(left, right) {
//   if (WINS[left] === right) return '승리';
//   else if (left === WINS[right]) return '패배';
//   return '무승부'}

// function handleClick() {
//   console.log('가위 바위 보!');
// }

// const me = 'rock'
// const other = 'scissor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <>
   <App/>
    {/* <h1>가위바위보</h1>
    <h2>{GetResult(me, other)}</h2> 
    <button onClick={handleClick}>가위</button> 
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button> */}
   </>
  </StrictMode>
)
