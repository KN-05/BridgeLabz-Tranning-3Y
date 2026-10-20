"use strict";
// ============================================================
// Q8 – Dynamic Discount Evaluator
// Run: node q8_discount_evaluator.js
// Rules: electronics 10% | fashion 5% | cart value > 50000 -> extra 5% overall
// ============================================================

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

function evaluateCart(cartItems, title) {
  console.log(`\n========== ${title} ==========`);

  // Loop + conditionals: work out the category discount for each item
  const pricedItems = [];
  for (const product of cartItems) {
    let discountRate = 0;
    if (product.category === "electronics") {
      discountRate = 0.10;
    } else if (product.category === "fashion") {
      discountRate = 0.05;
    }
    const finalPrice = product.price * (1 - discountRate);
    pricedItems.push({ ...product, discountRate, finalPrice });
    console.log(
      `${product.item.padEnd(8)} ${product.category.padEnd(12)} ` +
      `₹${product.price} - ${discountRate * 100}% = ₹${finalPrice}`
    );
  }

  // reduce(): original cart value and total after item discounts
  const originalTotal = cartItems.reduce((sum, p) => sum + p.price, 0);
  let finalTotal = pricedItems.reduce((sum, p) => sum + p.finalPrice, 0);

  // Extra 5% if the ORIGINAL cart value is above 50000
  let extraDiscountApplied = false;
  if (originalTotal > 50000) {
    finalTotal = finalTotal * 0.95;
    extraDiscountApplied = true;
  }

  console.log("------------------------------------------");
  console.log(`Original cart total  : ₹${originalTotal}`);
  console.log(`Extra 5% (> ₹50000)  : ${extraDiscountApplied ? "APPLIED" : "not applied"}`);
  console.log(`FINAL TOTAL          : ₹${finalTotal.toFixed(2)}`);
  console.log(`You saved            : ₹${(originalTotal - finalTotal).toFixed(2)}`);
}

evaluateCart(cart, "GIVEN CART");

// Larger cart to demonstrate the extra 5% overall discount
evaluateCart([...cart, { item: "Phone", category: "electronics", price: 30000 }], "BIGGER CART (extra discount test)");
