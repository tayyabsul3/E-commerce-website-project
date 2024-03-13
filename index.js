const BASE_URL = "https://fakestoreapi.com/products";

// let filterto = "electronics";

// // Function to handle input changes
// function handleInput(input) {
//   filterto = input.value;
// }

// // Get the search button element
// const searchBtn = document.querySelector(".searchbutton");

// // Add event listener for the click event on the search button
// searchBtn.addEventListener("click", () => {
//   getdata(filterto)
//   console.log(filterto); // Log the value of the global variable "filterto"
// });



// const dropDown = document.querySelector("#all");

// dropDown.addEventListener("click",()=>{
  
// })

const getdata = async () => {
  const data = await fetch(BASE_URL);
   let response = await data.json();
  const products = document.querySelector(".products");
  // response = response.filter((value) => {
  //   return value.category != `${filterto}` ;
  //  });
 
  console.log(response);
  let product = "";
  response.forEach((value) => {
let description = value.description;
let title = value.title;
    product += `
    <div class="product">
 <div class="product_image">
     <img src="${value.image}" alt="">
 </div>
 <h2 class="product_title">
 ${title.length > 30 ? title.substring(0,30).concat("   ...more") : title}
 </h2>
 <h4 class="product_category">
 
 ${value.category}
 </h4>
 <p class="product_description">
 ${description.length > 20 ? description.substring(0,50).concat("....more") : description }
 </p>
 <div class="price_addtocart">
 <h3 class="price">
 $
 ${value.price}</h3>
 <a href="">Add to cart</a>
 </div>
 </div> 
    
    `;

    products.innerHTML = product;
  });
};

getdata();



// {
//     "id": 29,
//     "title": "Mid-Century Modern Wooden Dining Table",
//     "price": 24,
//     "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
//     "images": [
//         "https://i.imgur.com/DMQHGA0.jpeg",
//         "https://i.imgur.com/qrs9QBg.jpeg",
//         "https://i.imgur.com/XVp8T1I.jpeg"
//     ],
//     "creationAt": "2024-03-12T21:36:58.000Z",
//     "updatedAt": "2024-03-12T21:36:58.000Z",
//     "category": {
//         "id": 3,
//         "name": "Un nuevo nombre",
//         "image": "https://i.imgur.com/Qphac99.jpeg",
//         "creationAt": "2024-03-12T21:36:58.000Z",
//         "updatedAt": "2024-03-12T23:57:05.000Z"
//     }
// }
