function Markee(sentence, number) {
  let number_copy = number // solo es para validar la longitud del number + sentence.lengt
  // el problema está en que cuando hacemos shift(), el other_arr almacena valores undefined
  // descomentar las líneas 20,21,22
  let i = 0;
  let arr = sentence.split("");
  let other_arr = [];
  let timerIdMarkee = setInterval(() => {
    console.clear();
    other_arr.push(arr[i])
    console.log( " ".repeat(number) + other_arr.join(""));
    if (number != 0) number--;
    i++;
    if (number == 0) { other_arr.shift() };
    // console.log(other_arr);
    // console.log(other_arr.length);
    // console.log(i);
    if (i == (number_copy + sentence.length)) clearInterval(timerIdMarkee);
  }, 100);
}


table = [["", "", ""], ["", "", ""], ["", "", ""]];

function TicTacToe(row, column, value) {
  table[row][column] = `${value}`;
}
// [fila][columna]
function validateRow(table, value) {
  console.log(value);
  for (let i = 0; i < table.length; i++) {
    // filas
    if ([...new Set(table[i])].length == 1 && table[i][0] != "") return true
    else {
      // columnas
      for (let j = 0; j < table.length; j ++){
        if (table[0][j] == value && table[1][j] == value && table[2][j] == value && table[0][j] != "") return true;
      }
    }
  }
  if (table[2][0] == value && table[1][1] == value && table[0][2] == value && table[1][1] != "") return true;
  else if (table[0][0] == value && table[1][1] == value && table[2][2] == value && table[1][1] != "") return true;
  else return false;
}

function errorTic(row, column) {
  if (table[row][column] != "") return true;
  else if (row > table.length || column > table.length) return true;
}

function Loader(callback, ...arguments) {
  this.local ;
  array = ["|", "/", "-",  "\\'"];
  i = 0;
  let timerId = setInterval(()=> {
    if (i == (array.length-1)) i = 0; 
    console.clear();
    console.log(array[i]);
    i++;
    
  },300);
  setTimeout(() => { 
    clearInterval(timerId); 
    console.clear();
    this.local = callback(...arguments);
  }, 3000);
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
  let counter = 1;
  if (name == 'number formatter') Loader(numberFormatter); 
  if (name == "clock") Loader(Clock);
  if (name == "marquee")  Loader(Markee,args[0], args[1] ); 
 
  this.snippet = function(...argument){
    if (name == 'number formatter'){
     // await delay(3000);
      return numberFormatter(argument[0], args[0], args[1]);
    }
    this.play = function(column, row){
      if (name == 'tic tac toe'){
        
          console.log("It's o to run");
        }
    }
    if (name == "tic tac toe") {
      let validate = false;
      if (errorTic(argument[0], argument[1])) console.error("Invalid!");
      else {
        if (counter % 2 == 0) {
          TicTacToe(argument[0], argument[1], "0");
          console.log("its 0 run")
          validate = validateRow(table, "0");
          counter++;
        }
        else {
          TicTacToe(argument[0], argument[1], "X");
          console.log("its X run")
          validate = validateRow(table, "X");
          counter++;
        };
        if (validate) {
          console.log("{winner} has won!!!");
          table = [["", "", ""], ["", "", ""], ["", "", ""]];
          console.clear();
        }
      }
    }
  }
  // if (name == "clock") {
  //   this.execute = new Clock();
  //   this.execute();
  // }
  // if (name == "marquee") {
  //   this.execute = new Markee(args[0], args[1]);
  //   this.execute();
  // }  
}
