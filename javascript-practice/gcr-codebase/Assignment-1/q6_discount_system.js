const totalPurchase = 6500;

let discountPercent;
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const finalPrice = Math.round(totalPurchase - (totalPurchase * discountPercent) / 100);

console.log(`Original Total     : ₹${totalPurchase}`);
console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Final Price        : ₹${finalPrice}`);
