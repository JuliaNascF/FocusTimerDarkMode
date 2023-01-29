import { buttonPlay } from "./elements.js";


export default function Timer({
  minutesDisplay,
  secondsDisplay,
 
}) {

  let timerTimeout;
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent)
  
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }
  
  function moreFive() {
    minutes= minutesDisplay.textContent;
    minutes = Number(minutes);
    minutes +=5;
    seconds= secondsDisplay.textContent
    seconds= Number(seconds);
    updateDisplay(minutes,seconds);
    
  
    }

  function minusFive() {
      if(minutes <=5 ){
          clearTimeout(timerTimeout);
              updateDisplay(0,0);
           buttonPlay.disabled= false
           return  
      }
      
    minutes= minutesDisplay.textContent;
    minutes = Number(minutes);
    minutes -=5;
    seconds= secondsDisplay.textContent
    seconds= Number(seconds);
    updateDisplay(minutes,seconds);
   
    }
  
  function countdown() {
    buttonPlay.disabled= true;
    timerTimeout = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <=0;
      updateDisplay(minutes, 0);
      
      if(timerTimeout){
          clearTimeout(timerTimeout)
          
        }
        
        
        if( seconds <= 0 ) {
            seconds = 60;
            --minutes;
        }
        
        updateDisplay(minutes, String(seconds - 1));
        
        if (isFinished) {
            clearTimeout(timerTimeout);
            updateDisplay(0,0);
            buttonPlay.disabled= false;
            return  
      }
      countdown()
     
    }, 1000)
    
  }
  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
    return
  }

  function hold() {
    clearTimeout(timerTimeout);
  }

  return {
    countdown,
    moreFive,
    minusFive,
    updateDisplay,
    hold,
    reset,
  }
}
