import {  buttonStop,
    buttonPlay,
    buttonLower,
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFire,
    buttonSoundCoffeeDark,
    buttonSoundFireDark,
    buttonSoundFlorestDark,
    buttonSoundRainDark,
    buttonSunny,
    buttonMoon,
    buttonSum,
    lineRangeWhite,
    Root,
    lineRangeDark,
    FlorestRange,
    RainRange,
    CoffeeRange,
    FireRange,
    FlorestRangeDark,
    RainRangeDark,
    FireRangeDark,
    CoffeeRangeDark
    
 
   
} from './elements.js'

export default function({ controls, timer, sound }) {
  buttonSunny.addEventListener("click", function() {
    Root.style.setProperty('--lineRange', lineRangeWhite);
    
    buttonMoon.classList.remove("hide");
    buttonSunny.classList.add("hide");
    buttonSoundFlorest.classList.add("hide");
    buttonSoundRain.classList.add("hide");
    buttonSoundCoffee.classList.add("hide");
    buttonSoundFire.classList.add("hide");
    buttonSoundFlorestDark.classList.remove("hide");
    buttonSoundRainDark.classList.remove("hide");
    buttonSoundCoffeeDark.classList.remove("hide");
    buttonSoundFireDark.classList.remove("hide");
    controls.colorDarkMode()
   
    
  })
  
  buttonMoon.addEventListener("click", function() {
    Root.style.setProperty('--lineRange', lineRangeDark);
    buttonMoon.classList.add("hide");
    buttonSunny.classList.remove("hide");
    buttonSoundFlorest.classList.remove("hide");
    buttonSoundRain.classList.remove("hide");
    buttonSoundCoffee.classList.remove("hide");
    buttonSoundFire.classList.remove("hide");
    buttonSoundFlorestDark.classList.add("hide");
    buttonSoundRainDark.classList.add("hide");
    buttonSoundCoffeeDark.classList.add("hide");
    buttonSoundFireDark.classList.add("hide");
    controls.colorWhiteMode()
   
    

  })
  buttonPlay.addEventListener("click", function() {
      timer.countdown();
   })
  
  buttonStop.addEventListener("click", function() {
    timer.hold();
    buttonPlay.disabled= false;
   
  })
  
  buttonSum.addEventListener("click", function() {
    timer.moreFive();
   
  })
  buttonLower.addEventListener("click", function() {
    timer.minusFive();
   
  })
 
  buttonSoundFlorest.addEventListener("click", function() {
    
    
    if (sound.audioFlorest.paused) {
      sound.audioFlorest.volume= FlorestRange.value/100;
      sound.audioFlorest.play();
    } else {
      sound.audioFlorest.pause();
    }
    controls.changeColorFlorestWhite();
  

  })
  
  buttonSoundRain.addEventListener("click", function() {
   controls.changeColorRainWhite()

   if (sound.audioRain.paused) {
    sound.audioRain.volume= RainRange.value/100;
    sound.audioRain.play();
  } else {
    sound.audioRain.pause();
  }
 
 

  })

  buttonSoundCoffee.addEventListener("click", function() {
    controls.changeColorCoffeeWhite();
    
    if (sound.audioCoffee.paused) {
      sound.audioCoffee.volume= CoffeeRange.value/100;
        sound.audioCoffee.play();
      } else {
        sound.audioCoffee.pause();
      }
   
   })


   buttonSoundFire.addEventListener("click", function() {
    controls.changeColorFireWhite()
  
    if (sound.audioFire.paused) {
      sound.audioFire.volume= FireRange.value/100;
        sound.audioFire.play();
      } else {
        sound.audioFire.pause();
      }
     
   })

   buttonSoundFlorestDark.addEventListener("click", function(){
    controls.changeColorFlorestDark()
    if (sound.audioFlorest.paused) {
      sound.audioFlorest.volume= FlorestRangeDark.value/100;
      sound.audioFlorest.play();
    } else {
      sound.audioFlorest.pause();
    }
   })

   buttonSoundRainDark.addEventListener("click", function(){
    controls.changeColorRainDark()
  
    if (sound.audioRain.paused) {
      sound.audioRain.volume= RainRangeDark.value/100;
      sound.audioRain.play();
    } else {
      sound.audioRain.pause();
    }
   
   })

   buttonSoundCoffeeDark.addEventListener("click", function(){
    controls.changeColorCoffeeDark()
    
    if (sound.audioCoffee.paused) {
      sound.audioCoffee.volume= CoffeeRangeDark.value/100;
        sound.audioCoffee.play();
      } else {
        sound.audioCoffee.pause();
      }
   })
  
   buttonSoundFireDark.addEventListener("click", function(){
    controls.changeColorFireDark()
    if (sound.audioFire.paused) {
      sound.audioFire.volume= FireRangeDark.value/100;
        sound.audioFire.play();
      } else {
        sound.audioFire.pause();
      }
   
   })

   FlorestRange.addEventListener("change", function(){
    sound.audioFlorest.volume= this.value/100
   })
  
   RainRange.addEventListener("change", function(){
    sound.audioRain.volume= this.value/100
   })
  
   CoffeeRange.addEventListener("change", function(){
    sound.audioRange.volume= this.value/100
   })
  
   FireRange.addEventListener("change", function(){
    sound.audioFire.volume= this.value/100
   })
  

   FlorestRangeDark.addEventListener("change", function(){
    sound.audioFlorest.volume= this.value/100
   })


   RainRangeDark.addEventListener("change", function(){
    sound.audioRain.volume= this.value/100
   })

   CoffeeRangeDark.addEventListener("change", function(){
    sound.audioRange.volume= this.value/100
   })
  
   FireRangeDark.addEventListener("change", function(){
    sound.audioFire.volume= this.value/100
   })
  
}