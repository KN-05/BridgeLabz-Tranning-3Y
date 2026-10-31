// Q7: Mouse coordinates logger

const box = document.getElementById('box');
const coords = document.getElementById('coords');

// Show live clientX / clientY while moving inside the box
box.addEventListener('mousemove', (e) => {
  coords.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
});

// Double click -> drop a red dot at the click position
box.addEventListener('dblclick', (e) => {
  // clientX/Y are relative to the window, so subtract the box's position
  // to get the point inside the box.
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left - box.clientLeft;
  const y = e.clientY - rect.top - box.clientTop;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  box.appendChild(dot);
});
