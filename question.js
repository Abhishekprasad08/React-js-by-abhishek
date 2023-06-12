// Shopping cart class
class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the cart
    push(item) {
      this.items.push(item);
      console.log("Item added to the cart:", item);
      this.displayCart();
    }
  
    // Remove an item from the cart
    pop() {
      if (this.items.length === 0) {
        console.log("The cart is already empty.");
      } else {
        const removedItem = this.items.pop();
        console.log("Item removed from the cart:", removedItem);
      }
      this.displayCart();
    }
  
    // Remove the first item from the cart
    shift() {
      if (this.items.length === 0) {
        console.log("The cart is already empty.");
      } else {
        const removedItem = this.items.shift();
        console.log("First item removed from the cart:", removedItem);
      }
      this.displayCart();
    }
  
    // Add an item to the beginning of the cart
    unshift(item) {
      this.items.unshift(item);
      console.log("Item added to the beginning of the cart:", item);
      this.displayCart();
    }
  
    // Display the current shopping cart
    displayCart() {
      console.log("Shopping Cart:", this.items);
    }
  }
  
  // Example usage
  const cart = new ShoppingCart();
  
  cart.push("Apple");
  cart.push("Banana");
  cart.pop();
  cart.shift();
  cart.unshift("Orange");
  