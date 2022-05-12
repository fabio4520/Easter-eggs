function TicTacToe() {
}

function Loader() {
  array = ["|", "/", "-", "\'"];
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

function numberFormatter() {
  if (number <= limit) return number + array[0];
  if ( number > limit && number <= limit**2 ) return parseInt(number/limit) + array[1];
  if ( number > limit**2) return (number/limit**2)%1 == 0? parseInt(number/limit**2) + array[2]:(number/limit**2).toFixed(2) + array[2]  ;
}

function EasterEgg() {
}
