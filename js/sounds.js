
export default function() {
    
    const audioFlorest = new Audio("audios/Floresta.wav")
    const audioRain= new Audio("audios/Chuva.wav")
    const audioCoffee = new Audio("audios/Cafeteria.wav")
    const audioFire= new Audio("audios/Lareira.wav")

  
    audioFlorest.loop = true;
    audioRain.loop = true;
    audioCoffee.loop = true;
    audioFire.loop = true;
  
    
   
   
    return {
      audioFlorest,
      audioRain,
      audioCoffee,
      audioFire,
     
    }
  }