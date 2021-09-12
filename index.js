// new CountdownTimer({
//    selector: '#timer-1',
//    targetDate: new Date('Jul 17, 2019'),
//  });

const refs = {
   startBtn: document.querySelector('.value');
   stopBtn: document.querySelector('.label');
   clockface: document.querySelector('.js-clockface');
   // dataValue: document.querySelector('span[data-value]');
}  

class Timer {
   constructor() {
      this.intervalId = null;
      this.isActive = false;
   }

   start() {
      if (this.isActive) {
         return;
      }

      const startTime = Date.now();
      this.isActive = true;

      this.intervalId = setInterval(() => {
         const currentTime = Date.now();
         const deltaTime = currentTime - startTime;
         const time = getTimeComponents(deltaTime);

         // updateClockface(time);
      }, 1000);
   },

   stop() {
      clearInterval(this.intervalId);
      this.isActive = false;
   }
}

const timer = new Timer();

refs.startBtn.addEventListener('click', () => {
   timer.start();
});

refs.stopBtn.addEventListener('click', () => {
   timer.stop();
});

function updateClockface({ hour, mins, secs }) {
   refs.clockface.textContent = '${hours}:${mins}:${secs}';
}

function getTimeComponents(time) {
   const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
   );
   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

   return { hours, mins, secs };
}