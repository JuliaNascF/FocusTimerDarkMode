

import { 
    
    buttonSoundFlorest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFire,
    buttonSoundCoffeeDark,
    buttonSoundFireDark,
    buttonSoundFlorestDark,
    buttonSoundRainDark,
    Root,
    ballRangeWhite,
    ballRangeBlack,
    lineRangeWhite
  
 } from "./elements.js";
export default function Controls({
   isClicked,
   isDarkMode

  }) {
  
  
      
      function changeColorFlorestWhite() {
    
    document.getElementById("fill1").style.fill = "#02799D";
    document.getElementById("fill2").style.fill = "white";
    document.getElementById("FlorestRange").style.backgroundColor= "white"
    Root.style.setProperty('--ballRangeFlorest', ballRangeWhite);
    buttonSoundRain.disabled= true;
    buttonSoundCoffee.disabled= true;
    buttonSoundFire.disabled= true; 
    
      if(isClicked) {
        document.getElementById("fill1").style.fill = "#E1E1E6";
        document.getElementById("fill2").style.fill = "#323238";
        document.getElementById("FlorestRange").style.backgroundColor= "#323238"
        Root.style.setProperty('--ballRangeFlorest', ballRangeBlack);
       
        buttonSoundRain.disabled= false;
        buttonSoundCoffee.disabled= false;
        buttonSoundFire.disabled= false; 
     
        isClicked = false;
      } else {
        document.getElementById("fill1").style.fill = "#02799D";
        document.getElementById("fill2").style.fill = "white";
        document.getElementById("FlorestRange").style.backgroundColor= "white"
        Root.style.setProperty('--ballFlorest', ballRangeWhite);
        isClicked = true;}
    }
    function changeColorRainWhite() {
    
        document.getElementById("fill3").style.fill = "#02799D";
        document.getElementById("fill4").style.fill = "white";
        document.getElementById("RainRange").style.backgroundColor= "white"
        Root.style.setProperty('--ballRangeRain', ballRangeWhite);
        buttonSoundFlorest.disabled= true;
        buttonSoundCoffee.disabled= true;
        buttonSoundFire.disabled= true; 
          if(isClicked) {
            document.getElementById("fill3").style.fill = "#E1E1E6";
            document.getElementById("fill4").style.fill = "#323238";
            document.getElementById("RainRange").style.backgroundColor= "#323238"
            Root.style.setProperty('--ballRangeRain', ballRangeBlack);
            buttonSoundFlorest.disabled= false;
            buttonSoundCoffee.disabled= false;
            buttonSoundFire.disabled= false; 
            isClicked = false;
          } else {
            document.getElementById("fill3").style.fill = "#02799D";
            document.getElementById("fill4").style.fill = "white";
            document.getElementById("RainRange").style.backgroundColor= "white"
            Root.style.setProperty('--ballRangeRain', ballRangeWhite);
            isClicked = true;}
        }
      
        function changeColorCoffeeWhite() {
    
            document.getElementById("fill5").style.fill = "#02799D";
            document.getElementById("fill6").style.fill = "white";
            document.getElementById("CoffeeRange").style.backgroundColor= "white"
            Root.style.setProperty('--ballRangeCoffee', ballRangeWhite);
            buttonSoundFlorest.disabled= true;
            buttonSoundRain.disabled= true;
            buttonSoundFire.disabled= true;
              if(isClicked) {
                document.getElementById("fill5").style.fill = "#E1E1E6";
                document.getElementById("fill6").style.fill = "#323238";
                document.getElementById("CoffeeRange").style.backgroundColor= "#323238"
                Root.style.setProperty('--ballRangeCoffee', ballRangeBlack);
                buttonSoundFlorest.disabled= false;
                buttonSoundRain.disabled= false;
                buttonSoundFire.disabled= false; 
                isClicked = false;
              } else {
                document.getElementById("fill5").style.fill = "#02799D";
                document.getElementById("fill6").style.fill = "white";
                document.getElementById("CoffeeRange").style.backgroundColor= "white"
                Root.style.setProperty('--ballRangeCoffee', ballRangeWhite);
                isClicked = true;}
            }
            function changeColorFireWhite() {
    
                document.getElementById("fill7").style.fill = "#02799D";
                document.getElementById("fill8").style.fill = "white";
                document.getElementById("FireRange").style.backgroundColor= "white"
               Root.style.setProperty('--ballRangeFire', ballRangeWhite);
                buttonSoundFlorest.disabled= true;
                buttonSoundRain.disabled= true;
                buttonSoundCoffee.disabled= true;
                  if(isClicked) {
                    document.getElementById("fill7").style.fill = "#E1E1E6";
                    document.getElementById("fill8").style.fill = "#323238";
                    document.getElementById("FireRange").style.backgroundColor= "#323238"
                    Root.style.setProperty('--ballRangeFire', ballRangeBlack);
                    buttonSoundFlorest.disabled= false;
                    buttonSoundRain.disabled= false;
                    buttonSoundCoffee.disabled= false; 
                    isClicked = false;
                  } else {
                    document.getElementById("fill7").style.fill = "#02799D";
                    document.getElementById("fill8").style.fill = "white";
                    document.getElementById("FireRange").style.backgroundColor= "white"
                    Root.style.setProperty('--ballRangeFire', ballRangeWhite);
                    isClicked = true;}
                }
              
                function colorDarkMode(){

                  
                  document.body.style.backgroundColor= "black";
                  document.getElementById("timer").style.color="white"
                  document.getElementById("playFill").style.fill= "#C4C4CC"
                  document.getElementById("stopFill").style.fill= "#C4C4CC"
                  document.getElementById("sumFill").style.fill= "#C4C4CC"
                  document.getElementById("lowerFill").style.fill= "#C4C4CC"
                
                 
                }
                function colorWhiteMode(){
                  document.body.style.backgroundColor= "white";
                  document.getElementById("timer").style.color="black"
                  document.getElementById("playFill").style.fill= "#323238"
                  document.getElementById("stopFill").style.fill= "#323238"
                  document.getElementById("sumFill").style.fill= "#323238"
                  document.getElementById("lowerFill").style.fill= "#323238"
                 
                }

                function changeColorFlorestDark() {
    
                  document.getElementById("fillDark1").style.fill = "#0A3442";
                  document.getElementById("fillDark2").style.fill = "white";
                  Root.style.setProperty('--lineRange', lineRangeWhite);
                  buttonSoundRainDark.disabled= true;
                  buttonSoundCoffeeDark.disabled= true;
                  buttonSoundFireDark.disabled= true; 
                  
                    if(isClicked) {
                      document.getElementById("fillDark1").style.fill = "#29292E";
                      document.getElementById("fillDark2").style.fill = "#C4C4CC";
                      Root.style.setProperty('--lineRange', lineRangeWhite);
                      buttonSoundRainDark.disabled= false;
                      buttonSoundCoffeeDark.disabled= false;
                      buttonSoundFireDark.disabled= false; 
                   
                      isClicked = false;
                    } else {
                      document.getElementById("fillDark1").style.fill = "#0A3442";
                      document.getElementById("fillDark2").style.fill = "white";
                      Root.style.setProperty('--lineRange', lineRangeWhite);
              
                      isClicked = true;}
                  }
                  function changeColorRainDark() {
                    isDarkMode=true;
                      document.getElementById("fillDark3").style.fill = "#0A3442";
                      document.getElementById("fillDark4").style.fill = "white";
                      Root.style.setProperty('--lineRange', lineRangeWhite);
                      buttonSoundFlorestDark.disabled= true;
                      buttonSoundCoffeeDark.disabled= true;
                      buttonSoundFireDark.disabled= true; 
                        if(isClicked) {
                          document.getElementById("fillDark3").style.fill = "#29292E";
                          document.getElementById("fillDark4").style.fill = "#C4C4CC";
                          Root.style.setProperty('--lineRange', lineRangeWhite);
                          buttonSoundFlorestDark.disabled= false;
                          buttonSoundCoffeeDark.disabled= false;
                          buttonSoundFireDark.disabled= false; 
                          isClicked = false;
                        } else {
                          document.getElementById("fillDark3").style.fill = "#0A3442";
                          document.getElementById("fillDark4").style.fill = "white";
                          Root.style.setProperty('--lineRange', lineRangeWhite);
                          isClicked = true;}
                      }
                    
                      function changeColorCoffeeDark() {
                  
                          document.getElementById("fillDark5").style.fill = "#0A3442";
                          document.getElementById("fillDark6").style.fill = "white";
                          Root.style.setProperty('--lineRange', lineRangeWhite);
                          buttonSoundFlorestDark.disabled= true;
                          buttonSoundRainDark.disabled= true;
                          buttonSoundFireDark.disabled= true;
                            if(isClicked) {
                              document.getElementById("fillDark5").style.fill = "#29292E";
                              document.getElementById("fillDark6").style.fill = "#C4C4CC";
                              Root.style.setProperty('--lineRange', lineRangeWhite);
                              buttonSoundFlorestDark.disabled= false;
                              buttonSoundRainDark.disabled= false;
                              buttonSoundFireDark.disabled= false; 
                              isClicked = false;
                            } else {
                              document.getElementById("fillDark5").style.fill = "#0A3442";
                              document.getElementById("fillDark6").style.fill = "white";
                              Root.style.setProperty('--lineRange', lineRangeWhite);
                              isClicked = true;}
                          }
                          function changeColorFireDark() {
                  
                              document.getElementById("fillDark7").style.fill = "#0A3442";
                              document.getElementById("fillDark8").style.fill = "white";
                              Root.style.setProperty('--lineRange', lineRangeWhite);
                              buttonSoundFlorestDark.disabled= true;
                              buttonSoundRainDark.disabled= true;
                              buttonSoundCoffeeDark.disabled= true;
                                if(isClicked) {
                                  document.getElementById("fillDark7").style.fill = "#29292E";
                                  document.getElementById("fillDark8").style.fill = "#C4C4CC";
                                  Root.style.setProperty('--lineRange', lineRangeWhite);
                                  buttonSoundFlorestDark.disabled= false;
                                  buttonSoundRainDark.disabled= false;
                                  buttonSoundCoffeeDark.disabled= false; 
                                  isClicked = false;
                                } else {
                                  document.getElementById("fillDark7").style.fill = "#0A3442";
                                  document.getElementById("fillDark8").style.fill = "white";
                                  Root.style.setProperty('--lineRange',lineRangeWhite);
                                  isClicked = true;}
                              }
  
    return {
     changeColorFlorestWhite,
     changeColorRainWhite,
     changeColorFireWhite,
     changeColorCoffeeWhite,
     changeColorFlorestDark,
     changeColorRainDark,
     changeColorCoffeeDark,
     changeColorFireDark,
    colorDarkMode,
    colorWhiteMode
    }
  }