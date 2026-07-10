const products = [
  {
    id: "pocox8",
    image: "public/pocox8.webp",
    brand: "XIAOMI REDMI",
    name: "Xiaomi Poco X8 Pro",
    category: "Phones",
    oldPrice: 56000,
    price: 49999,
    range: "KSh 45,000 - KSh 54,000",
    description: "Fast AMOLED display, big battery and strong gaming performance for daily power users."
  },
  {
    id: "infinix-hot-70",
    image: "public/Infinix-Hot-70-Silver-Dancer-247x296.jpg.webp",
    brand: "INFINIX",
    name: "Infinix Hot 70 Silver Dancer",
    category: "Phones",
    oldPrice: 31000,
    price: 24999,
    range: "KSh 17,999 - KSh 25,000",
    description: "Affordable smartphone with a bright display, long battery life and clean silver finish."
  },
  {
    id: "nokia-235",
    image: "public/Nokia-235-4G-Black-247x296.jpg.webp",
    brand: "NOKIA",
    name: "Nokia 235 4G Black",
    category: "Phones",
    oldPrice: 8000,
    price: 6999,
    description: "Reliable 4G feature phone with classic keys, FM radio and dependable battery standby."
  },
  {
    id: "samsung-a37",
    image: "public/Samsung-Galaxy-A37-5G-2-247x296.jpg.webp",
    brand: "SAMSUNG",
    name: "Samsung Galaxy A37 5G",
    category: "Phones",
    oldPrice: 52000,
    price: 45999,
    description: "Slim 5G Galaxy phone with vivid display, capable camera system and all-day battery."
  },
  {
    id: "samsung-s26-plus",
    image: "public/Samsung-Galaxy-S26-Plus-Cobalt-Violet-247x296.jpg.webp",
    brand: "SAMSUNG",
    name: "Samsung Galaxy S26 Plus Cobalt Violet",
    category: "Phones",
    oldPrice: 169000,
    price: 154999,
    description: "Premium Galaxy flagship for sharp photos, smooth multitasking and a polished violet look."
  },
  {
    id: "iphone-16-white",
    image: "public/iPhone-16-White-247x296.jpg.webp",
    brand: "APPLE",
    name: "iPhone 16 White",
    category: "Phones",
    oldPrice: 112000,
    price: 99999,
    description: "Elegant iPhone with strong camera quality, smooth iOS performance and crisp OLED display."
  },
  {
    id: "iphone-17-air",
    image: "public/iPhone-17-Air-Space-Black-247x296.jpg.webp",
    brand: "APPLE",
    name: "iPhone 17 Air Space Black",
    category: "Phones",
    oldPrice: 176000,
    price: 164999,
    description: "Ultra-slim Apple phone in Space Black with flagship speed and a premium lightweight build."
  },
  {
    id: "iphone-17e",
    image: "public/iPhone-17e-Black-247x296.jpg.webp",
    brand: "APPLE",
    name: "iPhone 17e Black",
    category: "Phones",
    oldPrice: 128000,
    price: 119999,
    description: "Modern iPhone value model with fast performance, great photos and long software support."
  },
  {
    id: "macbook-air-m2",
    image: "public/MacBook-Air-M2-13-Inch-2-247x296.jpg.webp",
    brand: "APPLE",
    name: "MacBook Air M2 13 Inch",
    category: "Laptops",
    oldPrice: 128000,
    price: 114999,
    description: "Thin 13-inch laptop with M2 power, silent performance and excellent battery life."
  },
  {
    id: "sony-zv-1f",
    image: "public/Sony-ZV-1F-Vlog-Camera-2-247x296.jpg.webp",
    brand: "SONY",
    name: "Sony ZV-1F Vlog Camera",
    category: "Cameras",
    oldPrice: 91000,
    price: 81999,
    description: "Compact creator camera with 4K video, flip screen and clear built-in microphone."
  },
  {
    id: "sony-zv-1-ii",
    image: "public/Sony-ZV-1-II-Vlog-Camera-2-247x296.jpg.webp",
    brand: "SONY",
    name: "Sony ZV-1 II Vlog Camera",
    category: "Cameras",
    oldPrice: 142000,
    price: 129999,
    description: "Creator-focused Sony camera with wide-angle lens, strong autofocus and portable body."
  },
  {
    id: "ps5-slim",
    image: "public/PlayStation-5-Slim-Standard-Edition-1-247x296.jpg.webp",
    brand: "SONY PLAYSTATION",
    name: "PlayStation 5 Slim Standard Edition",
    category: "PlayStation",
    oldPrice: 93000,
    price: 84999,
    description: "PS5 Slim console with disc support, 1TB storage and fast next-generation gameplay."
  },
  {
    id: "dualsense-red",
    image: "public/PlayStation-5-DualSense-Wireless-Controller-Cosmic-Red-247x296.jpg.webp",
    brand: "SONY PLAYSTATION",
    name: "PlayStation 5 DualSense Wireless Controller Cosmic Red",
    category: "PlayStation",
    oldPrice: 14500,
    price: 11999,
    description: "Cosmic Red controller with haptic feedback, adaptive triggers and precise wireless play."
  },
  {
    id: "ps5-disc-drive",
    image: "public/PlayStation-Disc-Drive-For-PS5-2-247x296.jpg.webp",
    brand: "SONY PLAYSTATION",
    name: "PlayStation Disc Drive For PS5",
    category: "PlayStation",
    oldPrice: 26000,
    price: 21999,
    description: "Official detachable disc drive for compatible PS5 Slim Digital Edition consoles."
  },
  {
    id: "nba-2k25",
    image: "public/NBA-2K25-Play-Station-5-247x296.jpg.webp",
    brand: "2K SPORTS",
    name: "NBA 2K25 PlayStation 5",
    category: "PlayStation",
    oldPrice: 9800,
    price: 7999,
    description: "PS5 basketball game with modern rosters, sharp graphics and competitive local play."
  },
  {
    id: "airpods-pro-2",
    image: "public/Airpods-Pro-2-2-1-247x296.jpg.webp",
    brand: "APPLE",
    name: "AirPods Pro 2",
    category: "Accessories",
    oldPrice: 36000,
    price: 29999,
    description: "Premium wireless earbuds with active noise cancellation and clear Apple audio."
  },
  {
    id: "backbone-one",
    image: "public/Backbone-One-PlayStation-2nd-Gen-1-247x296.jpg.webp",
    brand: "BACKBONE",
    name: "Backbone One PlayStation 2nd Gen",
    category: "Accessories",
    oldPrice: 24000,
    price: 19999,
    description: "Mobile gaming controller with PlayStation styling for smooth phone gameplay."
  },
  {
    id: "apple-watch-se-3",
    image: "public/Apple-Watch-SE-3-Starlight-Aluminum-247x296.jpg.webp",
    brand: "APPLE",
    name: "Apple Watch SE 3 Starlight Aluminum",
    category: "Watches",
    oldPrice: 41000,
    price: 34999,
    description: "Lightweight Apple Watch for fitness tracking, notifications and everyday health features."
  }
];

const money = new Intl.NumberFormat("en-KE", {
  maximumFractionDigits: 0
});

const productGrid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const categoryButtons = document.querySelectorAll(".category-button");
const cartPanel = document.querySelector("#cartPanel");
const overlay = document.querySelector("#overlay");
const openCart = document.querySelector("#openCart");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartTotalTop = document.querySelector("#cartTotalTop");
const cartTotalPanel = document.querySelector("#cartTotalPanel");
const cartCount = document.querySelector("#cartCount");
const checkoutButton = document.querySelector("#checkoutButton");

let activeCategory = "All";
let cart = JSON.parse(localStorage.getItem("mbarakCart") || "{}");

function formatKsh(value) {
  return `KSh ${money.format(value)}`;
}

function discountPercent(product) {
  return Math.max(0, Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100));
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const searchMatch = [product.name, product.brand, product.category, product.description]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return categoryMatch && searchMatch;
  });

  productGrid.innerHTML = filtered
    .map((product) => {
      const priceClass = product.range ? "price range" : "price";
      const priceText = product.range || formatKsh(product.price);

      return `
        <article class="product-card">
          <div class="image-wrap">
            <span class="discount-badge">-${discountPercent(product)}%</span>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div>
            <p class="product-brand">${product.brand}</p>
            <h2 class="product-name">${product.name}</h2>
          </div>
          <p class="description">${product.description}</p>
          <div class="price-row">
            <span class="old-price">${formatKsh(product.oldPrice)}</span>
            <span class="${priceClass}">${priceText}</span>
          </div>
          <button class="add-button" type="button" data-add="${product.id}">Add to cart</button>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = filtered.length > 0;
}

function saveCart() {
  localStorage.setItem("mbarakCart", JSON.stringify(cart));
}

function cartEntries() {
  return Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === id),
      quantity
    }))
    .filter((entry) => entry.product);
}

function cartTotal() {
  return cartEntries().reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
}

function cartQuantity() {
  return cartEntries().reduce((sum, entry) => sum + entry.quantity, 0);
}

function renderCart() {
  const entries = cartEntries();
  const total = cartTotal();

  cartItems.innerHTML = entries.length
    ? entries
        .map(
          ({ product, quantity }) => `
            <article class="cart-item">
              <img src="${product.image}" alt="${product.name}" />
              <div>
                <h3>${product.name}</h3>
                <p>${formatKsh(product.price)}</p>
                <div class="quantity-row">
                  <button class="qty-button" type="button" data-decrease="${product.id}">-</button>
                  <strong>${quantity}</strong>
                  <button class="qty-button" type="button" data-increase="${product.id}">+</button>
                  <button class="remove-button" type="button" data-remove="${product.id}">Remove</button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">Your cart is empty.</p>';

  cartTotalTop.textContent = formatKsh(total);
  cartTotalPanel.textContent = formatKsh(total);
  cartCount.textContent = cartQuantity();
  checkoutButton.href = buildCheckoutLink(entries, total);
}

function buildCheckoutLink(entries, total) {
  if (!entries.length) {
    return "https://wa.me/254728882223";
  }

  const lines = entries.map(({ product, quantity }) => `- ${product.name} x${quantity}: ${formatKsh(product.price * quantity)}`);
  const message = [`Hello Mbarak Electronics, I want to order:`, ...lines, `Total: ${formatKsh(total)}`].join("\n");
  return `https://wa.me/254728882223?text=${encodeURIComponent(message)}`;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function updateQuantity(id, change) {
  cart[id] = (cart[id] || 0) + change;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  saveCart();
  renderCart();
}

function openCartPanel() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("show");
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
  openCartPanel();
});

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) updateQuantity(increase.dataset.increase, 1);
  if (decrease) updateQuantity(decrease.dataset.decrease, -1);
  if (remove) {
    delete cart[remove.dataset.remove];
    saveCart();
    renderCart();
  }
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
openCart.addEventListener("click", openCartPanel);
closeCart.addEventListener("click", closeCartPanel);
overlay.addEventListener("click", closeCartPanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCartPanel();
});

renderProducts();
renderCart();
