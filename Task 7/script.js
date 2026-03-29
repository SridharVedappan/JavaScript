let loadingDiv = document.querySelector(".loadingMessage");
let productsContainer = document.querySelector(".productLinks");
let searchInput = document.querySelector("#searchInput");
let lowBtn = document.querySelector("#lowToHigh");
let highBtn = document.querySelector("#highToLow");
let categoryFilter = document.querySelector("#categoryFilter");

let allProducts = [];

//Task 1: Loader
loadingDiv.style.display = "flex";

// Fetch products
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    loadingDiv.style.display = "none";
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch((error) => {
    loadingDiv.style.display = "none";
    productsContainer.innerHTML = "<p style='color:red'>Error loading data</p>";
  });

// Reusable function to display products
function displayProducts(products) {
  productsContainer.innerHTML = "";

  if (products.length === 0) {
    productsContainer.innerHTML = "<p style='color:red'>No products found</p>";
    return;
  }

  products.forEach((c) => {
    let div = document.createElement("div");

    div.innerHTML = `
    <h1>${c.title.slice(0, 20)}</h1>
    <img src="${c.image}" alt="${c.title}" />
    <p>${c.description.slice(0, 60)}...</p>
    <button>Price: $${c.price}</button>
    <button class="viewMoreBtn" data-id="${c.id}">View More</button>
  `;

    productsContainer.append(div);
  });
}

// Task 2: Search Filter
searchInput.addEventListener("input", function () {
  let value = searchInput.value.toLowerCase();
  let filtered = allProducts.filter((product) =>
    product.title.toLowerCase().includes(value),
  );
  displayProducts(filtered);
});

//  Task 3: Price Sorting

// Sort Low → High
lowBtn.addEventListener("click", function () {
  let sorted = [...allProducts].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
});

// Sort High → Low
highBtn.addEventListener("click", function () {
  let sorted = [...allProducts].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
});

//  Task 4: Category Filter
categoryFilter.addEventListener("change", function () {
  let category = categoryFilter.value;
  let filtered =
    category === ""
      ? allProducts
      : allProducts.filter((product) => product.category === category);
  displayProducts(filtered);
});

// Task 5: View Details
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("viewMoreBtn")) {
    let productId = e.target.dataset.id;
    localStorage.setItem("selectedProductId", productId);
    window.location.href = "product-details.html";
  }
});
