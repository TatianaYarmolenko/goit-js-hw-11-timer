import refs from './refs.js'

const targetTime = new Date('July 01,2021 03:24:00')

class Timer  {
   constructor({onTick}) {
       this.onTick = onTick
   }
   start(){
   
       setInterval(() => {
       const currentTime = Date.now()
       const deltaTime = targetTime - currentTime;
       const leftTime = this.getTimeComponents(deltaTime)
       this.onTick(leftTime)   
       
       }, 1000);  
    
   } 
   getTimeComponents(time) {

       const days = Math.floor(time / (1000 * 60 * 60 * 24));
       const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
       const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
       const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
       return { days, hours, mins, secs };
       
   }

   pad(value) {
       return String(value).padStart(2, '0');
   }  
}

const timer = new Timer({onTick: updateTimer});

timer.start()

function updateTimer ({ days, hours, mins, secs }) {
   refs.day.textContent = `${-days}`;
   refs.hour.textContent = `${-hours}`;
   refs.min.textContent = `${-mins}`;
   refs.sec.textContent = `${-secs}`;
}