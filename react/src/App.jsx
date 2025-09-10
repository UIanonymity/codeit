import HandButton from './HandButton';
import Button from './Button';
// import { useState } from 'react';
// import { compareHand, generateRandomHand } from './utils';

// function getResult(me, other) {
//   const comparison = compareHand(me, other);
//   if (comparison > 0) return '승리';
//   if (comparison < 0) return '패배';
//   return '무승부';
// }



function App() {
//   const [ hand, setHand ] = useState(rock)
//   const [ otherhand, setOtherHand ] = useState(rock)
   const handleClick = (value) => console.log(value);
   const handleClearClick = () => console.log('처음부터');

//   const handleButtonClick = (nextHand) => {
  // hand의 값을 nextHand 로 바꿔 주세요
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
//   setHand(nextHand);                  
//   setOtherHand(generateRandomHand()); 
// };

//  const handleClearClick = () => {
//     // hand와 otherHand의 값을 'rock' 으로 바꿔주세요
//   };


  return (
   <div>
     <Button name="처음부터" onClick={handleClearClick} />

     {/* <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div> */}
      
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>

  );
}

export default App;