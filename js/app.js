// 'use strict';

// alert('Few people may know some pretty interesting facts about my life. I will list some off and you try and guess if they are true or false.');

// var correctAnswers = 0;

// /**
// * Question 1
// */
// do {
//   var snowFall = prompt('I once got stuck in a snow tunnel and no one could find me for 6 hours?\nYes or No').toUpperCase();

//   if(snowFall === 'NO') {
//     alert('Thats right.');
//     correctAnswers++;} else if(snowFall === 'YES') {
//     alert('Thats wrong');} else {
//     alert('Please use \'Yes\' or \'No\'.');
//   }
// } while (snowFall !== 'NO' && snowFall !== 'YES');

// /**
// * Question 2
// */
// do {
//   var skateBoard = prompt('I\'ve been skateboarding for more than half my life and haven\'t broken a bone?\nYes or No').toUpperCase();
//   if(skateBoard === 'NO') {
//     alert('Thats right.');
//     correctAnswers++;
//   } else if(skateBoard === 'YES') {
//     alert('Thats wrong');
//   } else {
//     alert('Please use \'Yes\' or \'No\'.');
//   }
// } while (skateBoard !== 'NO' && skateBoard !== 'YES');

// /**
// * Question 3
// */

// var swim = prompt('Do you think I can swim?\nYes or No').toUpperCase();
// if(swim === 'NO') {
//   alert('Thats right.');
//   correctAnswers++;
// } else if(swim === 'YES') {
// }


// /**
// * Question 7
// */
// function question7() {
//   var possibleAnswers = ['cookie', 'banana', 'avocado', 'coconut', 'rhubarb', 'chocolate peanut butter', 'peach','cherry'];
//   var possibleGuess;
//   var attempts = 6;
//   var flag = true;

//   do {
//     possibleGuess = prompt('Can you guess not only my favorite, but the best ice cream ever?\n' + attempts + ' attempts left').toLowerCase();
//     attempts--;
//     for(var i = 0; i < possibleAnswers.length; i++) {
//       if(possibleGuess === possibleAnswers[i]) {
//         alert('Thats right!');
//         flag = false;
//         break;
//       }
//     }
//   } while (flag && attempts > 0);

//   if (attempts >= 0) {
//     alert('You could have said:\n' + possibleAnswers);
//   }
// }

'use strict';

alert('Few people may know some pretty interesting facts about my life. I will list some off and you try and guess if they are true or false.');

var correctAnswers = 0;

/**
* Question 1
*/
do {
  var snowFall = prompt('I once got stuck in a snow tunnel and no one could find me for 6 hours?\nYes or No').toUpperCase();

  if(snowFall === 'NO') {
    alert('Thats right.');
    correctAnswers++;
  } else if(snowFall === 'YES') {
    alert('Thats wrong');
  } else {
    alert('Please use \'Yes\' or \'No\'.');
  }
} while (snowFall !== 'NO' && snowFall !== 'YES');

/**
* Question 2
*/
do {
  var skateBoard = prompt('I\'ve been skateboarding for more than half my life and haven\'t broken a bone?\nYes or No').toUpperCase();
  if(skateBoard === 'NO') {
    alert('Thats right.');
    correctAnswers++;
  } else if(skateBoard === 'YES') {
    alert('Thats wrong');
  } else {
    alert('Please use \'Yes\' or \'No\'.');
  }
} while (skateBoard !== 'NO' && skateBoard !== 'YES');

/**
* Question 3
*/
do {
  var swim = prompt('Do you think I can swim?\nYes or No').toUpperCase();
  if(swim === 'NO') {
    alert('Thats right.');
    correctAnswers++;
  } else if(swim === 'YES') {
    alert('Thats wrong');
  } else {
    alert('Please use \'Yes\' or \'No\'.');
  }
} while (swim !== 'NO' && swim !== 'YES');

/**
* Question 4
*/
do {
  var sunAllergy = prompt('My sun allergy is why I moved to Seattle.\nYes or No').toUpperCase();
  if(sunAllergy === 'NO') {
    alert('Thats right.');
    correctAnswers++;
  } else if(sunAllergy === 'YES') {
    alert('Thats wrong');
  } else {
    alert('Please use \'Yes\' or \'No\'.');
  }
} while (sunAllergy !== 'NO' && sunAllergy !== 'YES');

/**
* Question 5
*/
do {
  var clubTurkey = prompt('I once bowled a perfect game.\nYes or No').toUpperCase();
  if(clubTurkey === 'NO') {
    alert('Thats right.');
    correctAnswers++;
  } else if(clubTurkey === 'YES') {
    alert('Thats wrong');
  } else {
    alert('Please use \'Yes\' or \'No\'.');
  }
} while (clubTurkey !== 'NO' && clubTurkey !== 'YES');

alert('You got ' + correctAnswers + ' right answers.');


question6();
question7();

/**
* Question 6
*/
function question6() {
  var rightAnswer = 10;
  var counter = 0;
  var maxAttempts = 4;

  var userAnswer = parseInt(prompt('Can you guess the age of the first time I drove a car'));
  counter++;

  while(userAnswer !== rightAnswer && counter < maxAttempts) {
    counter++;
    if(userAnswer > rightAnswer) {
      userAnswer = parseInt(prompt('Good guess but suprisingly lower. Try again:'));
    } else if(userAnswer < rightAnswer) {
      userAnswer = parseInt(prompt('Whoa not that young. Try:'));
    } else {
      userAnswer = parseInt(prompt('Nope!. Try a number this time:'));
    }
  }

  if(counter === 1) {
    alert('First try!');
  } else if(counter === maxAttempts ) {
    alert('Sorry buddy, you ran out of tries. The right answer was ' + rightAnswer);
  } else {
    alert('You got it in ' + counter + ' attempts.');
  }
}

/**
* Question 7
*/
function question7() {
  var possibleAnswers = ['cookie', 'banana', 'avocado', 'coconut', 'rhubarb', 'chocolate peanut butter', 'peach','cherry'];
  var possibleGuess;
  var attempts = 6;
  var flag = true;

  do {
    possibleGuess = prompt('Can you guess not only my favorite, but the best ice cream ever?\n' + attempts + ' attempts left').toLowerCase();
    attempts--;
    for(var i = 0; i < possibleAnswers.length; i++) {
      if(possibleGuess === possibleAnswers[i]) {
        alert('Thats right!');
        flag = false;
        break;
      }
    }
  } while (flag && attempts > 0);
}


function {
  if (attempts >= 0) {
    alert('You could have said:\n' + possibleAnswers);

  }
}