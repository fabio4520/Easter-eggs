function TicTacToe() {
}

function Loader() {
  array = ["|", "/", "-",  "\\'"];
  i = 0;
  let timerId = setInterval(()=> {
    if (i == (array.length-1)) i = 0; 
    console.clear();
    console.log(array[i]);
    i++;
    
  },300);
  setTimeout(() => { clearInterval(timerId); }, 3000);
}

function Clock() {
  console.log("dentro clock")
  let timerIdClock = setInterval(()=> {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.clear();
    console.log(time);
  },100);
  document.addEventListener('click', () => {
    setTimeout(() => { clearInterval(timerIdClock); },0);
    console.clear();
    console.log("Let's keep playing")
  });
}

function numberFormatter(number, limit, array) {
  if (number <= limit) return number + array[0];
  if ( number > limit && number <= limit**2 ) return parseInt(number/limit) + array[1];
  if ( number > limit**2) return (number/limit**2)%1 == 0? parseInt(number/limit**2) + array[2]:(number/limit**2).toFixed(2) + array[2]  ;
}

function EasterEgg(name, ...args) {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  this.execute;
  this.snippet = function(...argument){
   // Loader();
    if (name == 'number formatter'){
     // await delay(3000);
      return numberFormatter(argument[0], args[0], args[1]);
    }
    this.play = function(column, row){
      if (name == 'tic tac toe'){
        
          console.log("It's o to run");
        }
    }  
   
  }
  if (name == "clock" ){
    this.execute = new Clock();
    this.execute();
  }
  // switch (name) {
  //   case 'clock':
  //     Loader();
  //     // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
  //     //await delay(3000);
  //     this.execute = new Clock();
  //     this.execute();
  //     break;
  //   case 'marquee':
  //     console.log("marquee")
  //     break;
  // }
  
}
