const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonSum = document.querySelector('.sum');
const buttonLower = document.querySelector('.lower');
const buttonSunny = document.querySelector(".sunny")
const buttonMoon = document.querySelector(".moon")
const buttonSoundFlorest = document.querySelector('.florest');
const buttonSoundRain = document.querySelector('.rain');
const buttonSoundCoffee = document.querySelector('.coffee');
const buttonSoundFire = document.querySelector('.fire');
const buttonSoundFlorestDark = document.querySelector('.florestDark');
const buttonSoundRainDark = document.querySelector('.rainDark');
const buttonSoundFireDark = document.querySelector('.fireDark');
const buttonSoundCoffeeDark = document.querySelector('.coffeeDark');
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const Root = document.querySelector(":root")
const FlorestRange= document.getElementById("FlorestRange");
const RainRange= document.getElementById("RainRange");
const CoffeeRange= document.getElementById("CoffeeRange");
const FireRange= document.getElementById("FireRange");
const FlorestRangeDark= document.getElementById("FlorestRangeDark");
const RainRangeDark= document.getElementById("RainRangeDark");
const CoffeeRangeDark= document.getElementById("CoffeeRangeDark");
const FireRangeDark= document.getElementById("FireRangeDark");
let isClicked = false;
let ballRangeWhite = '#FFFFFF'
let ballRangeBlack = '#323238'
let lineRangeWhite= '#FFFFFF'
let lineRangeDark= '#323238'



export {
  buttonStop,
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
  buttonSum,
  minutesDisplay,
  secondsDisplay,
  buttonSunny,
  buttonMoon,
  Root,
  isClicked,
  ballRangeWhite,
  ballRangeBlack,
  lineRangeWhite,
  lineRangeDark,
  FlorestRange,
  RainRange,
  CoffeeRange,
  FireRange,
 FlorestRangeDark,
 RainRangeDark,
 CoffeeRangeDark,
 FireRangeDark
}