// const API_KEY = '42306432-61ab7fb6a7e28dda5f126fb86';

import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const apiKey = '42306432-61ab7fb6a7e28dda5f126fb86';
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const loader = document.getElementById('loader');
const gallery = document.getElementById('gallery');
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term'
        });
        return;
    }

    loader.style.display = 'block';
    gallery.innerHTML = '';

    // Make API 
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';

            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }

            data.hits.forEach(image => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <a href="${image.largeImageURL}" data-lightbox="gallery">
                        <img src="${image.webformatURL}" alt="${image.tags}">
                    </a>
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                `;
                gallery.appendChild(card);
            });

            // Refresh the lightbox 
            lightbox.refresh();
        })
        .catch(error => {
            loader.style.display = 'none';
            console.error('Error fetching data:', error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching data. Please try again.'
            });
        });
});