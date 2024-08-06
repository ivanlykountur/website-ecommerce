const flowers = [
    { name: "Chrysanthemum Pompoms", image: "images/Chrysanthemum Pompoms.jpg", url: "produk/Chrysanthemum Pompoms.html" },
    { name: "Anggrek", image: "images/anggrek.jpg", url: "produk/anggrek.html" },
    { name: "Tulip", image: "images/tulip.jpg", url: "produk/tulip.html" },
    { name: "Lili", image: "images/lili.jpg", url: "produk/lili.html" },
    { name: "Kamboja", image: "images/kamboja.jpg", url: "produk/kamboja.html" },
    { name: "Melati", image: "images/melati.jpg", url: "produk/melati.html" },
    { name: "Daisy", image: "images/daisy.jpg", url: "produk/daisy.html" }
];

// Fungsi pencarian tanaman
function searchFlowers(event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = flowers.filter(flower => flower.name.toLowerCase().includes(query));
    displayResults(results);
}

// Fungsi untuk menampilkan hasil pencarian
function displayResults(results) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (results.length > 0) {
        results.forEach(flower => {
            const flowerItem = document.createElement("div");
            flowerItem.className = "flower-item";
            flowerItem.innerHTML = `
                <a href="${flower.url}">
                    <img src="${flower.image}" alt="${flower.name}" />
                    <h5>${flower.name}</h5>
                </a>
            `;
            productList.appendChild(flowerItem);
        });
    } else {
        productList.innerHTML = "<p>Tanaman tidak ditemukan.</p>";
    }
}
