let cart;

const loadCartFromLocalStorage = () => {
  const cartItemsJSON = localStorage.getItem("cartItems");

  // Parse the JSON string to convert it back to an array
  let Cart_items = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  cart = Cart_items;
  console.log("Tayyab");
};
loadCartFromLocalStorage();

let product = "";
cart.forEach((value) => {
  let description = value.description;
  let title = value.title;

  product += `
    <div class="product">
      <div class="product_image">
        <img src="${value.image}" alt="">
      </div>
      <h2 class="product_title">
        ${
          title.length > 30
            ? title.substring(0, 30).concat("   ...more")
            : title
        }
      </h2>
      <h4 class="product_category">
        ${value.category}
      </h4>
      <p class="product_description">
        ${
          description.length > 20
            ? description.substring(0, 50).concat("....more")
            : description
        }
      </p>
      <div class="price_addtocart">
        <h3 class="price">$ ${value.price}</h3>
       <div>
       
       <button  class="delete-cart-btn cart-btn">Remove item</button>
       <button  class="quantity-cart-btn cart-btn">QTY:1</button>
       </div>
      </div>
    </div>`;
});

const products = document.querySelector(".products");
products.innerHTML = product; // Moved outside the loop
console.log(cart);
