// var dice = {
//   sides: 60,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }



//Prints dice roll to the page

function printNumber(number) {
  document.getElementById('spin');
  spin.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

// var dice2 = Math.random()
// console.log(dice2);
// y=Math.floor ( dice2*10 );

// if (y<6)
// {
//   console.log(y);
// }