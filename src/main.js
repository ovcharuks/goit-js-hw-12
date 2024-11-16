import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.state.value.trim();

  refs.gallery.innerHTML = '';

  if (!inputValue) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'bottomRight',
    });
    return;
  }

  refs.loader.style.display = 'inline-block';
  fetchImages(inputValue)
    .then(() => {
      refs.loader.style.display = 'none';
    })
    .catch(error => {
      refs.loader.style.display = 'none';
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'bottomRight',
      });
      console.error(error);
    });

  refs.form.reset();
}


fetch('https://pixabay.com/api/?key=47074953-ce587c3b0a52a629055965741');

// const list = document.querySelector('.todo-list');
// const params = new URLSearchParams({
//     _limit: 10,
//     _page: 3,
// })
// console.log(params.toString());

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error('Ooops!');
//     }
//     return response.json();
//   })
//   .then(data => list
//     .insertAdjacentHTML('beforeend', createMarkup(data)) )

//   .catch(error => 
//     list.insertAdjacentHTML("beforeend", `
//     <li>
//     <p>${error}</p>
//     </li>
//     `)
//   )

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ title, completed }) => `
// <li class="list-item">
// <input type="checkbox" ${completed && 'checked'}/>
// <p>${title}</p>
// </li>
//             `
//     )
//     .join("");
// }
