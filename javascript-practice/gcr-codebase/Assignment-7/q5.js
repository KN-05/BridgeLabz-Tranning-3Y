// Q5: Image gallery with modal preview

const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const bigImage = document.getElementById('bigImage');

// 6 images (random photos from picsum.photos, so internet is needed)
for (let i = 1; i <= 6; i++) {
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/gallery${i}/300/200`;   // small version
  img.dataset.full = `https://picsum.photos/seed/gallery${i}/900/600`; // big version
  img.alt = `Image ${i}`;
  gallery.appendChild(img);
}

// Open modal when a thumbnail is clicked (event delegation on the grid)
gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    bigImage.src = e.target.dataset.full;
    overlay.classList.add('open');
  }
});

// Clicking the dark background closes the modal
overlay.addEventListener('click', () => {
  overlay.classList.remove('open');
});

// Clicking inside the modal must NOT reach the overlay, so stop the bubbling
modal.addEventListener('click', (e) => {
  e.stopPropagation();
});
