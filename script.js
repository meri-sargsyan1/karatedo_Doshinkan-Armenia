const productData = [
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'vardan' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'vardan'},
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' },
  { img: 'anna.jpg', name: 'Anna' }
  // Ավելացրու որքան ուզես
];

const productGrid = document.getElementById('productGrid');
const loadMoreBtn = document.getElementById('loadMore');

let productsPerPage = 8;
let currentIndex = 0;

function renderProducts() {
  const nextProducts = productData.slice(currentIndex, currentIndex + productsPerPage);

  nextProducts.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <span class="new">Новое</span>
      <img src="images/${product.img}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">Цена ${product.price} долларов</div>
    `;
    productGrid.appendChild(card);
  });

  currentIndex += productsPerPage;

  if (currentIndex >= productData.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', renderProducts);

// Սկզբում բեռնել 8 հատ
renderProducts();

