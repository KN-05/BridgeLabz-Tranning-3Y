// Q9: Shopping Cart Total (with coupon validation)
// Run with: node q9.js

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // coupon must look like SAVE20 or DISC10 (SAVE/DISC + 2 digits)
  applyCoupon(code) {
    const couponRegex = /^(SAVE|DISC)(\d{2})$/;
    const match = code.trim().toUpperCase().match(couponRegex);

    if (!match) {
      this.discountPercent = 0;
      return "Invalid coupon format. Use something like SAVE20 or DISC10.";
    }
    this.discountPercent = Number(match[2]); // the digits are the % discount
    return `Coupon applied: ${this.discountPercent}% off.`;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 150, 3);

console.log("Total before coupon: Rs." + cart.getTotal());

console.log(cart.applyCoupon("SAVE20"));
console.log("Final total: Rs." + cart.getFinalTotal());

console.log(cart.applyCoupon("HELLO5")); // invalid example
console.log("Final total: Rs." + cart.getFinalTotal());
