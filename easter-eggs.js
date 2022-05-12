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
}

function numberFormatter() {
}

function EasterEgg() {
}
