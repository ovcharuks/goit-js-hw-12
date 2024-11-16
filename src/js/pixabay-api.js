import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { handleSuccess } from './render-functions.js';
import { refs } from '../main.js';

const pixabayURL = 'https://pixabay.com/api/';
const APIKey = '47074953-ce587c3b0a52a629055965741';

export function fetchImages(value) {
  return fetch(
    `${pixabayURL}?key=${APIKey}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
        });
        return;
      }

      const markup = handleSuccess(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);

      const library = new SimpleLightbox('.gallery a', {
        captionDelay: 300,
        captionsData: 'alt',
      });

      library.refresh();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}

