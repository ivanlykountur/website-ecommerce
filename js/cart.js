$(document).ready(function() {
    // Fungsi untuk menambah item ke keranjang
    function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    }
  
    // Fungsi untuk memperbarui jumlah item di keranjang
    function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      $('.cart-count').text(cart.length);
    }
  
    // Event listener untuk tombol "Beli Sekarang"
    $('.buy-now-btn').click(function() {
      let product = {
        id: $(this).data('id'),
        name: $(this).data('name'),
        price: $(this).data('price')
      };
      addToCart(product);
      window.location.href = 'cart.html';
    });
  
    // Fungsi untuk menampilkan item di halaman keranjang
    function displayCartItems() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let cartItemsContainer = $('#cart-items');
      cartItemsContainer.empty();
      cart.forEach(function(item) {
        cartItemsContainer.append(`
          <div class="cart-item">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
          </div>
        `);
      });
    }
  
    // Panggil fungsi untuk memperbarui jumlah item di keranjang dan menampilkan item di halaman keranjang
    updateCartCount();
    if (window.location.pathname.endsWith('cart.html')) {
      displayCartItems();
    }
  });
  