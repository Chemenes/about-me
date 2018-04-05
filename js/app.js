'use strict';

alert('Few people may know some pretty interesting facts about my life. I will list some off and you try and guess if they are true or false.');

var snowFall = prompt('I once got stuck in a snow tunnel and no one could find me for 6 hours?');
console.log('I once got stuck in a snow tunnel and noone could find me for 6 hours?' + snowFall);
alert('This is false, although i did get stuck in a snow tunnel it only took about 5 minutes to get me out.');

var skateBoard = prompt('I\'ve been skateboarding for more than half my life and haven\'t broken a bone?');
console.log('I\'ve been skateboarding for more than half my life and haven\'t broken a bone?' + skateBoard); 
alert('This is true, my ankles have been twisted so much they can do a 360 but not one broken bone!');

var swim = prompt('I can swim');
console.log('I can swim' + swim);
alert('I can swim! Although i cannot stay afloat in deep water.');

var sunAllergy = prompt('My sun allergy is why I moved to Seattle');
console.log('My sun allergy is why I moved to Seattle' + sunAllergy);
alert('False! I love the sun, even though Seattle hides it away. I have no allergies but can\'t stand tomatoes');

var clubTurkey = prompt ('I once bowled a perfect game');
console.log('I once bowled a perfect game' + clubTurkey);
alert('Sadly wrong! I did bowl a 290, so close but so far');


alert('One last game to play, can you guess the age for the first time I drove a car');

function question6() {
  var rightAnswer = 10;
  var counter = 0;
  var maxAttempts = 4;

  while(counter < maxAttempts) {
    console.log('rightAnswer');
    //parseInt parses a string and returns a number
    //make sure a user inputs 8 and not '8' or eight
    var userAnswer = parseInt(prompt('Can you guess the age of the first time I drove a car'));
    if(userAnswer) {
      counter++;
      alert('your input was not a number, try again');
    } else if (userAnswer === 10) {
      counter++;
      alert('You got it! Could barely reach the pedal but made it happen.');
    } else if (userAnswer < 10) {
      counter++;
      alert('Nope! That is way too young, but close.');
    } else if (userAnswer > 10) {
      counter++;
      alert('Too high,its acutally pretty young.');
    }
  }
}

question6();


function question7() {
  var possibleAnswers = ['cookie','banana', 'avocado', 'coconut', 'rhubarb','chocolate peanut butter','peach','cherry'];
  var possibleGuess = prompt('Can you guess not only my favorite but the best ice cream ever?').toLowerCase();
  var counter = 0;
  var correct = false;
  var maxAttempts = 6;

 
  for(var i = 0; i < possibleAnswers.length; i++) {
    if (possibleGuess === possibleAnswers[i]) {
      alert('Correct! these are all the possible answers. Cookie, Banana, Avocado, Coconut, Rhubarb, Chocolate Peanut Butter, Peach, Cherry');
      break;
    }
  }
  if(correct) {
    alert('Avocado');
    correct++;
  } else {
    counter++;
    console.log('No way!');
  }
}

question7();

alert('Nope! Alot younger than you think');


