let Cart_items = [];

// Function to update the cart and save it to local storage
const updateCartAndLocalStorage = () => {
  // Convert the cart items to JSON string
  const cartItemsJSON = JSON.stringify(Cart_items);

  // Save the cart items to local storage
  localStorage.setItem("cartItems", cartItemsJSON);
};

// Function to load the cart from local storage
const loadCartFromLocalStorage = () => {
  const cartItemsJSON = localStorage.getItem("cartItems");

  // Parse the JSON string to convert it back to an array
  Cart_items = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
};

const BASE_URL = "https://fakestoreapi.com/products";
let filterto = "";
const products = document.querySelector(".products");

const getdata = async (filterto) => {
  const data = await fetch(BASE_URL);
  let Response = await data.json();

  if (filterto !== "" && filterto !== "All") {
    Response = Response.filter((value) => {
      return value.category === filterto;
    });
  }

  let productHTML = "";
  Response.forEach((value) => {
    let description = value.description;
    let title = value.title;
    productHTML += `
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
          <button class="cart-btn" data-product-id="${
            value.id
          }">Add to cart</button>
        </div>
      </div>`;
  });
  products.innerHTML = productHTML;

  // Attach event listener to "Add to cart" buttons
  const addToCartButtons = document.querySelectorAll(".cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.dataset.productId;
      const productToAdd = Response.find(
        (product) => product.id === parseInt(productId)
      );
      Cart_items.push(productToAdd);

      console.log("Product added to cart:", productToAdd);
      console.log("Cart items:", Cart_items);

      // Update the cart and save it to local storage
      updateCartAndLocalStorage();
    });
  });
};

getdata(filterto);

const dropDown = document.querySelector("#all");
dropDown.addEventListener("change", () => {
  filterto = dropDown.value;
  getdata(filterto);
});

// Load cart items from local storage when the page loads
loadCartFromLocalStorage();

const Modal = document.querySelector(".modal");
const CloseBtn = document.querySelector("#close");
const showmenuBtn = document.querySelector(".show_menu");
showmenuBtn.addEventListener("click", () => {
  Modal.classList.add("active");
});

CloseBtn.addEventListener("click", () => {
  Modal.classList.remove("active");
});
