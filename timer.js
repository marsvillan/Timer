var app = new Vue({
  el: '.timer',
  data: {
    timer__seconds:"30",
    timer__minutes:"00",
    timer__hours:"12",
    timer_Finish:""
  },

  methods:{
    add_25:()=>{
      pauseTimer();
      time = 25 * 60;
      changeTimerTime();
    },
    add_15:()=>{
      pauseTimer();
      time = 15 * 60;
      changeTimerTime();
    },
    add_5:()=>{
      pauseTimer();
      time = 5 * 60;
      changeTimerTime();
    },

    AddHour:()=>{
      pauseTimer();
      time = time + 60 * 60;
      changeTimerTime();
    },
    AddMinute:()=>{
      pauseTimer();
      time = time + 60;
      changeTimerTime();
    },
    AddSecond:()=>{
      pauseTimer();
      time = time + 1;
      changeTimerTime();
    },
    DelHour:()=>{
      if (time >= 3600) {
      pauseTimer();
      time = time - 60 * 60;
      changeTimerTime();
      }
    },
    DelMinute:()=>{
      if (time >= 60){
      pauseTimer();
      time = time - 60;
      changeTimerTime();
      }
    },
    DelSecond:()=>{
      if (time>0){
      pauseTimer();
      time = time - 1;
      changeTimerTime();
      }
    },




    BtnReset: () => {
      pauseTimer();
      time = 0;
      changeTimerTime();
    },
    BtnPause: () => {
      pauseTimer();
    },
    BtnStart: () => {
        if (!nIntervId && time > 0) {
          nIntervId = setInterval(() => {
            if (time > 0) {
              time = time - 1;
              changeTimerTime();
            } else {
              clearInterval(nIntervId);
              nIntervId = null;
              app.timer_Finish="Time is up!";
            }
          }, 1000);
        }
    }
  }
});

let time = 0;
let nIntervId = null;

const numberConverter = (value) => {
  if (value < 10) {
    return `0${value}`;
    // return '0' + value;
  }
  return `${value}`;
  // return '' + value;
}

const changeTimerTime = () => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor((time - hours * 60 * 60) / 60);
  const seconds = time - hours * 60 * 60 - minutes * 60;
  
  app.timer__hours = numberConverter(hours);
  app.timer__minutes = numberConverter(minutes);
  app.timer__seconds = numberConverter(seconds);
  app.timer_Finish="";
}
const pauseTimer = () => {
  if (nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
  }
}
changeTimerTime();
