const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas"
];

let l = ingredients.length;

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < l) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (let j = 0; j < l; j++) {
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let k = l - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
