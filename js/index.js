import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js";
import Events from "./events.js";
import { 
    buttonStop,
    buttonPlay,
    buttonSum,
    buttonLower,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFire,
    minutesDisplay,
    secondsDisplay,
    isClicked,
 } from "./elements.js";

 const sound = Sound();
 

const controls = Controls({
  buttonPlay,
  buttonSum,
  buttonLower,
  buttonStop,
  isClicked,
  sound,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({ controls, timer, sound });