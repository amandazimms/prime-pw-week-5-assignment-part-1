console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Amanda',
  lastName: 'Zimmerman',
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ['tortellini', 'dark chocolate', 'sharp cheddar']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log('my full name:', fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('first fave food:', me.favThreeFoods[0]);
console.log('last fave food:', me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('shoe count:', me.shoeCount);
me.shoeCount++;
console.log('new shoe count:', me.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'green';
console.log('the new me, now with favorite color!:', me);


//6 - edabit challenge using Objects I decided to try: 
//https://edabit.com/challenge/5qYYauQwYwxz3nd9R
//Online Shopping

//Create a function that determines whether a shopping order is eligible for free shipping.
//An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

//examples
//freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
//freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
//freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

let annabelsOrder = {
  "Moby Dick": 9.99,
  "Catch 22": 14.99
}

let josiesOrder = {
  "Advanced Algebra": 99.99,
  "Linear Algebra": 49.99,
  "Calc 3": 199.99
}

function isFreeShippingElligible( order ) {
  let total = 0; //set a variable total and initialize at 0
  for (const bookPrice in order) { //loop through all the properties on each order
    total += order[bookPrice]; //add each price (the value of the property?) to the total
  }

  if (total > 50) {
    return true;
  } else {
    return false;
  }
}
console.log('result for isFreeShippingElligible(josiesOrder):', isFreeShippingElligible(josiesOrder));
console.log('result for isFreeShippingElligible(annabelsOrder):', isFreeShippingElligible(annabelsOrder));