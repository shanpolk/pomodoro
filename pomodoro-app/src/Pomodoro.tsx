import {FC, useState} from 'react';

const Pomodoro: FC = () => {
   let [time, setTime] = useState(30);

   function handleTime() {
      let timeInterval = setInterval(startTimer, 1000)
      function startTimer() {
         if(time === -1) {
            clearInterval(timeInterval)
         } else {
            setTime(time--);
         }
      }
   }

   
   return ( 
   <div data-test="pomodoro-app">
      <h1 data-test='timer'>{time}</h1>
      <button data-test='play-button' onClick={() => handleTime()}>Play</button>
   </div> );
};

export default Pomodoro;