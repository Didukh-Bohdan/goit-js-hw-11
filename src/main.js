// import iziToast from 'izitoast';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import 'izitoast/dist/css/iziToast.min.css';
// import { fetchData } from './pixabay-api';
// import { renderGallery, clearGallery, initializeLightbox, showError } from './render-functions';

// const searchForm = document.getElementById('searchForm');
// const loader = document.getElementById('loader');

// searchForm.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const searchTerm = document.getElementById('searchInput').value.trim();

//   if (searchTerm === '') {
//     showError('Please enter a search term.');
//     return;
//   }

//   clearGallery();
//   showLoader();

//   try {
//     const data = await fetchData(searchTerm);

//     if (data.hits.length === 0) {
//       showError('Sorry, there are no images matching your search query. Please try again.');
//     } else {
//       renderGallery(data.hits);
//     }
//   } catch (error) {
//     showError('An error occurred while fetching images. Please try again.');
//   } finally {
//     hideLoader();
//   }
// });

// function showLoader() {
//   loader.style.display = 'block';
// }

// function hideLoader() {
//   loader.style.display = 'none';
// }
