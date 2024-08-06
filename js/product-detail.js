document.addEventListener('DOMContentLoaded', function () {
  const productDetailContainer = document.getElementById('Detail Produk - AgriShop');
  // Ambil ID produk dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Data produk (dalam praktiknya, ini bisa diambil dari server)
  const products = {
    1: {
      name: 'Chrysanthemum Pompoms',
      image: 'images/Chrysanthemum Pompoms.jpg',
      price: 'Rp 10.000',
      description: 'Chrysanthemum Pompoms adalah bunga yang indah dengan kelopak berbentuk bola yang rapat. Bunga ini memiliki berbagai warna cerah dan cocok untuk dekorasi rumah atau taman Anda.',
      features: ['Tinggi tanaman: 30-60 cm', 'Warna bunga: Putih, Kuning, Merah Muda', 'Masa berbunga: Musim gugur hingga awal musim dingin', 'Perawatan: Mudah'],
    },
    2: {
      name: 'Chrysanthemum Maximum',
      image: 'images/Chrysanthemum Maximum.jpg',
      price: 'Rp 10.000',
      description: 'Chrysanthemum Maximum, juga dikenal sebagai Shasta Daisy, memiliki bunga putih besar dengan pusat kuning.',
      features: ['Tinggi tanaman: 60-90 cm', 'Warna bunga: Putih dengan pusat kuning', 'Masa berbunga: Pertengahan musim panas hingga awal musim gugur', 'Perawatan: Sedang'],
    },
    3: {
      name: 'Krisan Inodorum',
      image: 'images/Krisan Inodorum.jpg',
      price: 'Rp 10.000',
      description: 'Keindahan krisan inodorum berhasil menjadikannya salah satu jenis krisan paling banyak disukai.',
      features: ['Tinggi tanaman: 35-40 cm', 'Warna bunga: Putih bersih', 'Masa berbunga: 3-4 bulan', 'Perawatan: Sedang'],
    },
    4: {
      name: 'Naweswari Agrihorti',
      image: 'images/NAWESWARI AGRIHORTI.jpg',
      price: 'Rp 10.000',
      description: 'Naweswari Agrihorti, Varietas ini merupakan hasil silangan dari varietas Wastu Kania x Stroika, bentuk daun lonjong menjari dengan lekukan dalam dan gerigi sedang.',
      features: ['Tinggi tanaman: 99-106 cm', 'Warna bunga: ungu dengan pusat kuning', 'Masa berbunga: musim tanam, vaselife 10-14 hari', 'Perawatan: Sedang'],
    },
    2: {
      name: 'Chrysanthemum Maximum',
      image: 'images/Chrysanthemum Maximum.jpg',
      price: 'Rp 10.000',
      description: 'Chrysanthemum Maximum, juga dikenal sebagai Shasta Daisy, memiliki bunga putih besar dengan pusat kuning.',
      features: ['Tinggi tanaman: 60-90 cm', 'Warna bunga: Putih dengan pusat kuning', 'Masa berbunga: Pertengahan musim panas hingga awal musim gugur', 'Perawatan: Sedang'],
    },
    2: {
      name: 'Chrysanthemum Maximum',
      image: 'images/Chrysanthemum Maximum.jpg',
      price: 'Rp 10.000',
      description: 'Chrysanthemum Maximum, juga dikenal sebagai Shasta Daisy, memiliki bunga putih besar dengan pusat kuning.',
      features: ['Tinggi tanaman: 60-90 cm', 'Warna bunga: Putih dengan pusat kuning', 'Masa berbunga: Pertengahan musim panas hingga awal musim gugur', 'Perawatan: Sedang'],
    },
    2: {
      name: 'Chrysanthemum Maximum',
      image: 'images/Chrysanthemum Maximum.jpg',
      price: 'Rp 10.000',
      description: 'Chrysanthemum Maximum, juga dikenal sebagai Shasta Daisy, memiliki bunga putih besar dengan pusat kuning.',
      features: ['Tinggi tanaman: 60-90 cm', 'Warna bunga: Putih dengan pusat kuning', 'Masa berbunga: Pertengahan musim panas hingga awal musim gugur', 'Perawatan: Sedang'],
    },
  };

  // Fungsi untuk menampilkan detail produk
  function displayProductDetail(product) {
    const detailSection = document.getElementById('Detail Produk - AgriShop');
    detailSection.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="img-box">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="detail-box">
                            <h2>${product.name}</h2>
                            <p class="price">${product.price}</p>
                            <p class="description">${product.description}</p>
                            <ul class="features">
                                ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
                            </ul>
                            <div class="quantity">
                                <label for="quantity">Jumlah:</label>
                                <input type="number" id="quantity" name="quantity" min="1" value="1">
                            </div>
                            <div class="btn-box">
                                <a href="#" class="btn btn-primary">Tambah ke Keranjang</a>
                                <a href="#" class="btn btn-outline-primary">Beli Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    document.querySelector('.add-to-cart-btn').addEventListener('click', function (event) {
      event.preventDefault();
      addToCart(product);
    });

    document.querySelector('.buy-now-btn').addEventListener('click', function (event) {
      event.preventDefault();
      addToCart(product);
      window.location.href = 'cart.html';
    });
  }

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = parseInt(document.getElementById('quantity').value);
    const cartItem = { ...product, quantity: quantity };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.cart-count').textContent = cart.length;
  }

  if (productId && products[productId]) {
    displayProductDetail(products[productId]);
  } else {
    productDetailContainer.innerHTML = '<p>Produk tidak ditemukan.</p>';
  }

  updateCartCount();

  // Tampilkan detail produk jika ID ditemukan
  if (productId && products[productId]) {
    displayProductDetail(products[productId]);
  } else {
    document.getElementById('product-detail').innerHTML = '<p>Produk tidak ditemukan.</p>';
  }
});
