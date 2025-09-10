const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const cartBtn = document.getElementById("cart_btn");

const addToProduct = () => {
  const productEl = product.value.trim();
  const quantityEl = parseInt(quantity.value);
  const createList = document.createElement("li");
  const listItem = document.getElementById("product-list");

  if (!productEl || isNaN(quantityEl) || quantityEl <= 0) {
    return;
  }
  addProductCart(productEl, quantityEl);
  createList.innerHTML = `

   <div>
     <span>Name: ${productEl}</span>
     <span>Quantity: ${quantityEl}</span>
   </div>
   
  `;
  listItem.appendChild(createList);
  product.value = "";
  quantity.value = "";
};

const getCart = () => {
  let cart = {};
  const cartJson = localStorage.getItem("cart");
  if (cartJson) {
    cart = JSON.parse(cartJson);
  }
  return cart;
};

const addProductCart = (product, quantity) => {
  if (!product || isNaN(quantity) || quantity <= 0) {
    return;
  }
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }
  console.log("cart", cart);
  const cartJson = JSON.stringify(cart);
  localStorage.setItem("cart", cartJson);
};

const renderingProduct = (name, qty) => {
  const createList = document.createElement("li");
  const listItem = document.getElementById("product-list");
  createList.innerHTML = `
        <div>
          <span>Name: ${name}</span>
          <span>Quantity: ${qty}</span>
        </div>
      `;
  listItem.appendChild(createList);
};

const displayStoreProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(quantity);
    renderingProduct(product, quantity);
  }
};

displayStoreProduct();

cartBtn.addEventListener("click", addToProduct);
