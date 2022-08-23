const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = document.querySelector('.gallery');
const elements = images.map((image) => `<li><img src="${image.url} alt="${image.alt} width=500px"></li>`);

imgEl.insertAdjacentHTML('beforeend', elements);

imgEl.style.cssText = `display: flex; flex-wrap: wrap; list-style: none; gap: 50px`;


console.log(imgEl)

// for (const image of images) {
//   const imgEl = document.querySelector('.gallery');
//   imgEl.insertAdjacentHTML("afterbegin",
//     `<li><img src="${image.url} alt="${image.alt}"></li>`
//   );
  
//   imgEl.style.cssText = 'display: flex; flex-wrap: wrap; list-style: none; gap: 50px'
//   const photoEl = document.querySelector('img');
//   photoEl.style.cssText = 'width: 500px'

//   console.log(imgEl)
// };


