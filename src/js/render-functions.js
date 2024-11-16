export function handleSuccess(data) {
    return data
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item">
          <article class="card">
      <a class="card-link" href="${largeImageURL}"><img class="card-image" src="${webformatURL}" alt="${tags}"/></a>        <div class="card-container">
            <div class="card-item">
              <p class="card-text">Likes</p>
              <p class="card-number">${likes}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Views</p>
              <p class="card-number">${views}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Comments</p>
              <p class="card-number">${comments}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Downloads</p>
              <p class="card-number">${downloads}</p>
            </div>
          </div>
          </article>
            </li>`;
        }
      )
      .join('');
  }
  