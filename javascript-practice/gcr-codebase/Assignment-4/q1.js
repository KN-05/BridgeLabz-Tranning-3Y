// Q1: E-Commerce Product Manager
// Run with: node q1.js

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // reduce the price by the given percentage
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // nicely formatted string for printing
  getDetails() {
    return `#${this.id} | ${this.name} | Rs.${this.price.toFixed(2)} | ${this.category}`;
  }
}

// array of products
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Headphones", 1500, "Electronics"),
  new Product(3, "Notebook", 80, "Stationery"),
  new Product(4, "Office Chair", 7200, "Furniture"),
  new Product(5, "Pen Pack", 120, "Stationery"),
  new Product(6, "Smart Watch", 3999, "Wearables"),
];

console.log("All products:");
products.forEach((p) => console.log(p.getDetails()));

// apply 10% discount on the laptop
products[0].applyDiscount(10);
console.log("\nAfter 10% discount on the Laptop:");
console.log(products[0].getDetails());

// filter products costing more than 1000
const expensiveProducts = products.filter((p) => p.price > 1000);
console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((p) => console.log(p.getDetails()));
