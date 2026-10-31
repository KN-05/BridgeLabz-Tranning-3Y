// Q6: Real-time table filter using the input event

const search = document.getElementById('search');
const rows = document.querySelectorAll('#tbody tr');
const noResults = document.getElementById('noResults');

search.addEventListener('input', () => {
  // lower-case both sides so the search is case-insensitive
  const query = search.value.trim().toLowerCase();
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase(); // name + branch + cgpa
    const match = text.includes(query);
    row.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  // show the message only when nothing matched
  noResults.style.display = visibleCount === 0 ? 'table-row' : 'none';
});
