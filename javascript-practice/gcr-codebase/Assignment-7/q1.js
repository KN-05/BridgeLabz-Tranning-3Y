// Q1: Product list manager using event delegation

const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

// keeps track of the <li> that is currently being edited (only one at a time)
let editingLi = null;

// Build a new <li> for a product
function createItem(name) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="name"></span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  // textContent is used so that user input is never treated as HTML
  li.querySelector('.name').textContent = name;
  return li;
}

// Add a product from the input box
function addProduct() {
  const value = input.value.trim();
  if (value === '') return; // ignore empty input
  list.appendChild(createItem(value));
  input.value = '';
  input.focus();
}

// Switch an item to edit mode (text -> input box)
function startEdit(li) {
  // if some other item is being edited, save it first
  if (editingLi && editingLi !== li) saveEdit(editingLi);

  const span = li.querySelector('.name');
  const field = document.createElement('input');
  field.type = 'text';
  field.className = 'edit-field';
  field.value = span.textContent;
  span.replaceWith(field);
  field.focus();

  li.querySelector('.edit').textContent = 'Save';
  editingLi = li;
}

// Save the edit (input box -> text)
function saveEdit(li) {
  const field = li.querySelector('.edit-field');
  if (!field) return;

  const span = document.createElement('span');
  span.className = 'name';
  // if the user left it empty, keep the old value
  span.textContent = field.value.trim() || field.defaultValue;
  field.replaceWith(span);

  li.querySelector('.edit').textContent = 'Edit';
  if (editingLi === li) editingLi = null;
}

addBtn.addEventListener('click', addProduct);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addProduct();
});

// EVENT DELEGATION: a single listener on the parent <ul>
// handles clicks for every Edit / Delete button, even for items added later.
list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('delete')) {
    if (editingLi === li) editingLi = null;
    li.remove();
  } else if (e.target.classList.contains('edit')) {
    if (editingLi === li) saveEdit(li); // button acts as "Save"
    else startEdit(li);
  }
});

// Press Enter inside the edit box to save
list.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('edit-field')) {
    saveEdit(e.target.closest('li'));
  }
});

// Clicking anywhere outside the item being edited auto-saves it
document.addEventListener('click', (e) => {
  if (editingLi && !editingLi.contains(e.target)) {
    saveEdit(editingLi);
  }
});
