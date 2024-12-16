// MAGIC 8-BALL Practice

let actualVal = '';

let possibleVal = [
  'Don\'t think so',
  'In your dreams homie',
  'You tripping',
  'Ay, this one might happen',
  'Ehhhhh',
  'Stupid question',
  'Do you not get the concept?',
  '100%',
  'Turn up',
  'All day',
  '*sigh* I\'m just here so I won\'t get fined'
]

let randomVal = 10;
const answer = document.querySelector('.answer');

const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {

  randomVal = Math.floor(Math.random() * 8);
  answer.textContent = possibleVal[randomVal];

})


// Race Day Exercise!!!!

// Race Day Prompt:
// You are organizing a running race and need to assign race numbers and start times to participants. Runners are categorized based on the following rules:

// Runners are assigned a race number:

// If they registered early, they receive a number above 1000.
// If they registered late, they receive a number below 1000.
// Start times are assigned based on the runner's age and registration status:

// Adults (18 and older) who registered early will run at 9:30 am.
// Adults who registered late will run at 11:00 am.
// Youth (under 18) run at 12:30 pm, regardless of registration.
// Write a program that assigns race numbers and start times to runners based on these rules. Use control flow (e.g., if, else if, else) and variables to determine the race number and start time for a given runner.

let age = 0;
let arrival = '';


let submitButton = document.querySelector('.submit-button')
const ageInput = document.querySelector('.age');
const arrivalInput = document.querySelector('.arrival-time');
const yourRace = document.querySelector('.your-race');

submitButton.addEventListener('click', () => {
  age = parseInt(ageInput.value);

  let timeInput = arrivalInput.value;
  arrivalTime = parseInt(timeInput.replace(":", ""), 10);

  if (isNaN(age) || isNaN(arrivalTime)) {
    alert('Please fill in both fields!');
    return;
  }

  if (arrivalTime < 930) {
    arrival = 'early';
  } else {
    arrival = 'late';
  };
  
  if (arrival === 'early' && age >= 18) {
    yourRace.textContent = 'You will run at 9:30am';
  } else if (arrival === 'late' && age >= 18) {
    yourRace.textContent = 'You will run at 11:00am';
  } else if (age < 18) {
    yourRace.textContent = 'You will run with all the other little ones at 12:30';
  } 
  
})




// Rock Paper Scissors

let cpuMoveSet = ['paper', 'rock', 'scissors'];

let userMove = '';

let option = document.querySelectorAll('.option');

option.forEach(element => {
  element.addEventListener('click', (opt) => {
    userMove = opt.target.textContent;

    cpuMove = cpuMoveSet[Math.floor(Math.random() * 3)];

    switch(userMove) {
      case 'paper':
        if (cpuMove === 'paper') {
          console.log('retry');
        } else if (cpuMove ==='rock'){
          console.log('you win!');
        } else if (cpuMove === 'scissors') {
          console.log('try again, loser!')
        }
        break;
      case 'rock':
          if (cpuMove === 'paper') {
            console.log('try again, loser!');
          } else if (cpuMove ==='rock'){
            console.log('retry');
          } else if (cpuMove === 'scissors') {
            console.log('you win!')
          }
      break;
      case 'scissors':
          if (cpuMove === 'rock') {
            console.log('try again, loser!');
          } else if (cpuMove ==='scissors'){
            console.log('retry');
          } else if (cpuMove === 'paper') {
            console.log('you win!')
          }
      break;
    }
  })
})



// Training Days

const activities = {
  running: 30,
  cycling: 40,
  swimming: 50
}

const level = {
  beginner: 1,
  intermediate: 0.75,
  expert: 0.25
}

function getTrainingDays(act, lev) {

  if (act in activities && lev in level){
    let requiredTraining = activities[act] * level[lev];
    return 'You need ' + requiredTraining + ' days of training ' + act + ' at the ' + lev + ' level';
  } else if (!(act in activities) || !(lev in level)) {
    return 'Allowed activities: running, cycling, swimming \n Allowed levels: beginner, intermediate, expert.'
  } 
}

console.log(getTrainingDays('running', 'intermediate'));


// Secret Message Exercise - Arrays/Array Methods

const mysteryQuote = ['courage', 'the', 'with', 'change', 'accept', 'to', 'things', 'I'];

let removal = mysteryQuote.indexOf('accept');


mysteryQuote.splice(removal, 1, 'understand', 'the');

mysteryQuote.reverse();

;


console.log(mysteryQuote.join(' '));


//Birdsong Translator 

// Rules
// Only the vowels a, e, i, o, and u are stretched.
// For each vowel in the input string:
// Replace it with itself repeated 3 times.
// For example, a becomes aaa, e becomes eee.
// Ignore all other characters (non-vowels) but keep their positions intact.
// Instructions
// Write a function birdsongTranslator() that:
// Takes a string as input.
// Returns a string where all vowels are replaced as per the rules.
// Test your function with a sentence of your choice.

function birdSongTranslator(input) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let translated = '';
  let vowel = '';
  let consonant = '';

  for(let i=0; i<input.length; i++) {
    vowel = false;
    for(let j=0; j<vowels.length; j++) {
      
      if(input[i] === vowels[j]) {
        vowel = true;
      } 
    }
    vowel ? translated += input[i].repeat(3) : translated += input[i];
  }

  console.log(translated)
}

birdSongTranslator('killer')



// Exercise: Count Vowel Groups
// Write a function countVowelGroups(input) that counts how many consecutive vowel groups (a sequence of vowels) appear in the input string.

// For example:

// Input: "hello", Output: 1 (because the only vowel group is "e")
// Input: "aeiou", Output: 1 (one continuous vowel group)
// Input: "abcde", Output: 1 (only "e" is a vowel)
// Input: "apple", Output: 2 (the vowel groups are "a" and "e")
// Guidelines:
// A vowel group is a continuous sequence of vowels (e.g., "aei" is one group).
// When a new vowel group starts, increase the count.
// If a non-vowel is encountered, stop the current group and reset the flag that tracks whether you're in a group.


function vowelCounter(e) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let flag = false;
  let counter = 0;
  let isVowel = [];


  //figure out which letters are vowels

  for(let i=0; i<e.length; i++) {
    flag = false;

      for(let j=0; j<vowels.length; j++) {
        if(e[i] === vowels[j]){
          flag = true;
        } 
      }

      flag ? isVowel.push('yes') : isVowel.push('no');
  }

  // I have an array telling me which letter is a vowel

  if (isVowel.every(value => value === "no")) {
    counter = 0;
    console.log(counter);
    return;
  }  
  
  if(isVowel.every(value => value === "yes")) {
    counter = 1;
    console.log(counter);
    return;
  } 
  
  for(let i=0; i<isVowel.length - 1; i++) {
    if(isVowel[i] === "yes" && isVowel[i+1] === "yes" && i===0) {
      counter = 1;
    } else if(isVowel[i-1] === "no" && isVowel[i] === "yes" && isVowel[i+1] === "yes") {
      counter++;
    }

      console.log(counter);

  }

  
}

vowelCounter('uul3eudwaaaa')



// Exercise: Sentence Validator

// You are tasked with creating a function called isValidSentence that checks if a given sentence follows basic grammatical rules:

// It must start with a capital letter.
// It must end with a period (.).
// Every word in the sentence must be a valid word (non-empty and alphabetic).
// Instructions:

// Write a function isValidSentence(sentence) that returns true if the sentence meets the rules listed above.
// Use .every(), .startsWith(), and .endsWith() where appropriate.

let sentence = "Fuck all this bullshit, I am learning."


function isValidSentence(input) {
  let string = 'string';
  if (input[0] !== input[0].toUpperCase() || input[input.length - 1] !== '.') {
    return false;
  } 

  return input.split(' ').every(word => 
    word.type !== "string"
  )
}

console.log(isValidSentence(sentence))




// Exercise: Smoothie Maker
// Create a program that generates a random smoothie from three categories of ingredients: fruits, liquids, and extras. Each ingredient has a name and a price.

// Structure:

// Use a smoothieMaker object.
// Each category (fruits, liquids, extras) is represented as an array of objects with name and price.
// Random Selection:

// Create a method getRandomIngredient() that selects a random ingredient from a given array.
// Smoothie Generation:

// Add a generateSmoothie() method to randomly pick one ingredient from each category and return the smoothie details (name and total price).

const smoothieMaker = {
  _ingredients: {
    fruits: [
      {name: 'banana', price: 1},
      {name: 'blueberry', price: 2},
      {name: 'avocado', price: 3},
      {name: 'spinach', price: 0.5}
    ],

    liquids: [
      {name: 'milk', price: 2},
      {name: 'alternative milk', price: 6},
      {name: 'water', price: 0},
      {name: 'coconut water', price: 3}
    ],

    extras: [
      {name: 'protein powder', price: 5},
      {name: 'chia seeds', price: 1},
      {name: 'ginger', price: 0.2}
    ]
  },

  get fruits() {
    return this._ingredients.fruits;
  },

  get liquids() {
    return this._ingredients.liquids;
  },

  get extras() {
    return this._ingredients.extras;
  },

  set fruits(fruits) {
    this._ingredients.fruits = fruits;
  },
  set liquids(liquids) {
    this._ingredients.liquids = liquids;
  },
  set extras(extras) {
    this._ingredients.extras = extras;
  },

  addIngredientToCategory(catName, ingredientName, ingredientPrice)  {
    this._ingredients[catName].push({name: ingredientName, price: ingredientPrice})
  },

  getRandomIngredient(categoryName) {
    const categoryArray = this._ingredients[categoryName];
    const randomizer = Math.floor(Math.random() * categoryArray.length);

    const randomIngredient = categoryArray[randomizer];
    return randomIngredient;
  },

  generateSmoothie() {

    const fruit = this.getRandomIngredient('fruits');
    const liquid = this.getRandomIngredient('liquids');
    const extra = this.getRandomIngredient('extras');

    return `Your smoothie: ${fruit.name}, ${liquid.name}, and ${extra.name}. Total price is $${fruit.price + liquid.price + extra.price}`

  }

}

console.log(smoothieMaker.generateSmoothie());




// Exercise: Book Collection
// Create an object called bookCollection that stores information about a set of books. Each book should have a title, author, and price.

// Properties:

// The bookCollection object will have an array called books that holds book objects.
// Each book object will have title, author, and price properties.
// Methods:

// Add a book: Create a method to add a new book to the collection.
// Get total price: Create a method that calculates and returns the total price of all books in the collection.
// Get average price: Create a getter that calculates and returns the average price of all books in the collection.

let bookCollection = {
  _bookList: {
    book1: {
      title: 'book1',
      author: 'author',
      price: 10
    },

    book2: {
      title: 'book2',
      author: 'author',
      price: 30
    }
  },

  //Create Factory Function
  createBook(title, author, price) {
    return {
    title: title,
    author: author,
    price: price };
  },

  //Route Factory Function
  addBook(bookName, title, author, price) {
    const newBook = this.createBook(title, author, price);
    this._bookList[bookName] = newBook;
  },


  get titles() {
    let titleArray = [];
    for(let book in this._bookList) {
      titleArray.push(this._bookList[book].title);
    }
    return titleArray;
  },

  get prices() {
    let priceArray = [];
    for (let book in this._bookList) {
      priceArray.push(this._bookList[book].price);  
    }
    return priceArray;
  },

  // Total cost method
  totalCost() {
    const priceArray = this.prices;
    const titleArray = this.titles;
    return `Your total cost for ${titleArray[0]} and ${titleArray[1]} ${priceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`;
  }

}

console.log(bookCollection.totalCost())






//Last, self-practice. Writing out my favorite Broncos

let broncos = {
  _topAllTime: {
    vonMiller: {
      name: 'Von',
      surname: 'Miller',
      number: 58,
      position: 'OLB',
      rank: 2,
    }
  },

  _candidates: {

  },


  generateAllTime(playerTitle, name, surname, number, position, rank) {
    this._topAllTime[playerTitle] = {
      name: name, 
      surname: surname, 
      number: number, 
      position: position,
      rank: rank,
    }
  },

  generateCandidate(playerTitle, name, surname, number, position, rank) {
    this._candidates[playerTitle] = {
      name: name, 
      surname: surname, 
      number: number, 
      position: position,
      rank: rank,
    }
  },


  get bestBroncos() {
    let top5AllTime = [];
    for(let playerTitle in this._topAllTime) {
      if(this._topAllTime[playerTitle].rank <= 5) {
        top5AllTime.push(this._topAllTime[playerTitle])
      }  
    }
    return top5AllTime;
  }


}

