const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('ul');


const elem = ingredients.map(ingr => {  
  const liEl = document.createElement('li');
  liEl.textContent = ingr;
  liEl.classList.add('item');
  return liEl;
})

// const elem = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const ingr = ingredients[i];
//   const liEl = document.createElement('li');
//   liEl.textContent = ingr;
//   liEl.classList.add('item')

//   elem.push(liEl);

// }

ulEl.append(...elem)

console.log(ulEl)




