// Step 1: Restaurant list with menus and prices
const restaurants = [
  {
    name: "Campus Café",
    cuisine: "South Indian",
    menu: [
      { item: "Idli", price: 30 },
      { item: "Dosa", price: 40 },
      { item: "Upma", price: 35 }
    ]
  },
  {
    name: "Burger Hub",
    cuisine: "Fast Food",
    menu: [
      { item: "Veg Burger", price: 60 },
      { item: "Fries", price: 40 },
      { item: "Coke", price: 30 }
    ]
  },
  {
    name: "Tandoori Treats",
    cuisine: "North Indian",
    menu: [
      { item: "Paneer Tikka", price: 120 },
      { item: "Butter Naan", price: 25 },
      { item: "Dal Makhani", price: 90 }
    ]
  }
];

// Step 2: Cart setup
let cart = [];

// Step 3: Show restaurant list
function showRestaurants() {
  let output = "<h2>Available Restaurants</h2><ul>";
  restaurants.forEach((r, index) => {
    output += `<li><strong>${r.name}</strong> - ${r.cuisine} 
      <button onclick="showMenu(${index})">View Menu</button></li>`;
  });
  output += "</ul><button onclick='viewCart()'>View Cart</button>";

  document.getElementById("restaurant-list").innerHTML = output;
}

// Step 4: Show menu for selected restaurant
function showMenu(index) {
  const selected = restaurants[index];
  let menuHTML = `<h2>${selected.name} - Menu</h2><ul>`;
  selected.menu.forEach((food, i) => {
    menuHTML += `<li>${food.item} - ₹${food.price} 
      <button onclick="addToCart('${food.item}', ${food.price})">Add to Cart</button></li>`;
  });
  menuHTML += "</ul><button onclick='showRestaurants()'>Back to Restaurants</button> <button onclick='viewCart()'>View Cart</button>";

  document.getElementById("restaurant-list").innerHTML = menuHTML;
}

// Step 5: Add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  alert(`${item} added to cart!`);
}

// Step 6: View cart and total
function viewCart() {
  if (cart.length === 0) {
    document.getElementById("restaurant-list").innerHTML = "<h2>Your cart is empty</h2><button onclick='showRestaurants()'>Back to Restaurants</button>";
    return;
  }

  let cartHTML = "<h2>Your Cart</h2><ul>";
  let total = 0;
  cart.forEach(entry => {
    cartHTML += `<li>${entry.item} - ₹${entry.price}</li>`;
    total += entry.price;
  });
  cartHTML += `</ul><h3>Total: ₹${total}</h3><button onclick='showRestaurants()'>Back to Restaurants</button>`;
  document.getElementById("restaurant-list").innerHTML = cartHTML;
}cartHTML += `</ul><h3>Total: ₹${total}</h3>
  <button onclick='placeOrder()'>Place Order</button>
  <button onclick='showRestaurants()'>Back to Restaurants</button>`;function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
cartHTML += `</ul><h3>Total: ₹${total}</h3>
  <button onclick='placeOrder()'>Place Order</button>
  <button onclick='showRestaurants()'>Back to Restaurants</button>`;
  document.getElementById("restaurant-list").innerHTML = `
    <h2>Order Placed Successfully! 🎉</h2>
    <p>Thank you for ordering with ByteBites.</p>
    <button onclick='startOver()'>Order Again</button>
  `;

  cart = []; // Clear the cart
}

function startOver() {
  showRestaurants();
}function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("restaurant-list").innerHTML = `
    <h2>Order Placed Successfully! 🎉</h2>
    <p>Thank you for ordering with ByteBites.</p>
    <button onclick='startOver()'>Order Again</button>
  `;

  cart = []; // Clear the cart
}

function startOver() {
  showRestaurants();
}