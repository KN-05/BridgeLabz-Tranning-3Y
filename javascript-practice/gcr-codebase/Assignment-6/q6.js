// Q6: Fake Store product fetcher (works in Node and in the browser)
const API_URL = "https://fakestoreapi.com/products";
const ERROR_MESSAGE = "Failed to load products. Please try again.";

// bonus: build product cards (only runs in the browser)
function showCards(products) {
  const container = document.getElementById("products");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("p");
    title.textContent = product.title;

    const price = document.createElement("strong");
    price.textContent = "$" + product.price;

    card.append(image, title, price);
    container.appendChild(card);
  });
}

async function loadProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const products = await response.json();

    products.forEach((product) => {
      console.log("Product: " + product.title);
      console.log("Price: $" + product.price);
      console.log("Image: " + product.image + "\n");
    });

    if (typeof document !== "undefined") showCards(products);
  } catch (error) {
    console.log(ERROR_MESSAGE);
    if (typeof document !== "undefined") {
      document.getElementById("message").textContent = ERROR_MESSAGE;
    }
  }
}

loadProducts();
