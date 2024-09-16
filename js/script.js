// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Saat navbar discroll animasi berubah warna
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
})

// Cari Produk
 document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      searchProduct();
  }
});

function showDetails(title, price, description, imageSrc) {
  document.getElementById('detail-image').src = imageSrc;
  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-price').textContent = 'Harga: ' + price;
  document.getElementById('detail-description').textContent = description;

  const orderButton = document.getElementById('order-button');
    orderButton.onclick = function() {
        orderNow(title, price);
    };
    
  document.getElementById('product-details').style.display = 'block';
}

function hideDetails() {
  document.getElementById('product-details').style.display = 'none';
}

function searchProduct() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
      const productName = product.dataset.name.toLowerCase();
      if (productName.includes(searchInput)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}

function filterProducts(category) {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
      const productCategory = product.dataset.category;
      if (category === 'all' || productCategory === category) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}

// Pesan link ke Whatsapp
function orderNow(productName, productPrice) {
  const message = `Halo, saya tertarik untuk memesan ${productName} dengan ${productPrice}.`;
  const whatsappUrl = `https://wa.me/6281275095971?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Perhitungan volume geladak bawah kapal
function calculateVolume() {
  // Get input values
  const length = parseFloat(document.getElementById('lengthVol').value);
  const breadth = parseFloat(document.getElementById('breadthVol').value);
  const height = parseFloat(document.getElementById('heightVol').value);

  // Validasi inputs
  if (isNaN(length) || isNaN(breadth) || isNaN(height) || length <= 0 || breadth <= 0 || height <= 0) {
      document.getElementById('resultVolume').innerText = 'Mohon masukkan nilai yang valid!';
      return;
  }

  // Calculate Volume with Block Coefficient
  const blockCoefficient = 0.70;
  const volume = length * breadth * height * blockCoefficient;

  // Display result
  document.getElementById('resultVolume').innerText = `Volume di Bawah Geladak Utama: ${volume.toFixed(2)} m³`;
}

// Perhitungan volume geladak atas kapal
function calculateVolumeAbove() {
  // Get input values
  const length = parseFloat(document.getElementById('lengthAbove').value);
  const breadth = parseFloat(document.getElementById('breadthAbove').value);
  const height = parseFloat(document.getElementById('heightAbove').value);

  // Validate inputs
  if (isNaN(length) || isNaN(breadth) || isNaN(height) || length <= 0 || breadth <= 0 || height <= 0) {
      document.getElementById('resultVolumeAbove').innerText = 'Mohon masukkan nilai yang valid!';
      return;
  }

  // Calculate Volume
  const volume = length * breadth * height;

  // Display result
  document.getElementById('resultVolumeAbove').innerText = `Volume di Atas Geladak Utama: ${volume.toFixed(2)} m³`;
}

// Perhitungan Gross Tonnage dibawah 24 meter
function calculateGrossTonnage() {
  // Get input values for below deck
  const totalVolume1 = parseFloat(document.getElementById('totalVolume1').value);

  // Get input values for above deck
  const totalVolume2 = parseFloat(document.getElementById('totalVolume2').value);


  // Validate inputs
  if (isNaN(totalVolume1) || isNaN(totalVolume2) ||
      totalVolume1 <= 0 || totalVolume2 <= 0 ) {
      document.getElementById('resultGrossTonnage').innerText = 'Mohon masukkan nilai yang valid!';
      return;
  }

  // Calculate Gross Tonnage
  const grossTonnage = (totalVolume1 + totalVolume2) * 0.25;

  // Display result
  document.getElementById('resultGrossTonnage').innerText = `Gross Tonnage: ${grossTonnage.toFixed(2)}`;
}

// Perhitungan Gross Tonnage diatas 24 meter
function calculateGrossTonnage1() {
  // Get input values for below deck
  const totalVolume3 = parseFloat(document.getElementById('totalVolume3').value);

  // Get input values for above deck
  const totalVolume4 = parseFloat(document.getElementById('totalVolume4').value);


  // Validate inputs
  if (isNaN(totalVolume3) || isNaN(totalVolume4) ||
      totalVolume3 <= 0 || totalVolume4 <= 0 ) {
      document.getElementById('resultGrossTonnage1').innerText = 'Mohon masukkan nilai yang valid!';
      return;
  }

  // Calculate Gross Tonnage
  const grossTonnage = (0.2 + 0.02 * Math.log10(totalVolume3 + totalVolume4)) * (totalVolume3 + totalVolume4);

  // Display result
  document.getElementById('resultGrossTonnage1').innerText = `Gross Tonnage: ${grossTonnage.toFixed(2)}`;
}


const products = [
  {
      id: 1,
      name: "Kapal Ikan CV. Bintang Mumbul Wibowo",
      image: "img/Pekalongan/Galangan Bintang Mumbul Wibowo/19-min.jpg",
      Type: "Kapal Ikan",
      Capacity: "310 GT",
      price: "Langsung ke WA",
      Panjang: "30m",
      LOA: "36m",
      Material: "Kayu Bengkirai & Laban",
      Lebar: "9,5m",
      Tinggi: "4,5m",
      thumbnails: ["img/Pekalongan/Galangan Bintang Mumbul Wibowo/19-min.jpg", "img/Pekalongan/Galangan Bintang Mumbul Wibowo/21.png", "img/Pekalongan/Galangan Bintang Mumbul Wibowo/22.png", "img/Pekalongan/Galangan Bintang Mumbul Wibowo/23.png" ],
      whatsappNumber: "+6285742866600" 
  },
  {
    id: 2,
    name: "Kapal Ikan CV. Bintang Mumbul Wibowo",
    image: "img/Pekalongan/Galangan Bintang Mumbul Wibowo/18.1.jpg",
    Type: "Kapal Ikan",
    Capacity: "310 GT",
    price: "Langsung ke WA",
    Panjang: "30m",
    LOA: "36m",
    Material: "Kayu Bengkirai & Laban",
    Lebar: "9,5m",
    Tinggi: "4,5m",
    thumbnails: ["img/Pekalongan/Galangan Bintang Mumbul Wibowo/18.1.jpg", "img/Pekalongan/Galangan Bintang Mumbul Wibowo/biru 1.png", "img/Pekalongan/Galangan Bintang Mumbul Wibowo/biru 2.png", ],
    whatsappNumber: "+6285742866600"
  },

  {
    id: 3,
    name: "Kapal Ikan CV. Wiwik",
    image: "img/Pekalongan/Galangan Wiwik/9.jpg",
    Type: "Kapal Ikan Cakalang",
    Capacity: "134 GT",
    price: "Langsung ke WA",
    Panjang: "28,5m",
    LOA: "36m",
    Material: "Kayu Bengkirai",
    Lebar: "8,5m",
    Tinggi: "9m",
    thumbnails: ["img/Pekalongan/Galangan Wiwik/9.jpg", "img/Pekalongan/Galangan Wiwik/6.jpg", "img/Pekalongan/Galangan Wiwik/coklat 1.png" ],
    whatsappNumber: "+6281215660056" 
  },

  {
    id: 4,
    name: "Kapal Ikan CV. Wiwik",
    image: "img/Pekalongan/Galangan Wiwik/5.jpg",
    Type: "Kapal Ikan Cakalang",
    Capacity: "154 GT",
    price: "Langsung ke WA",
    Panjang: "30m",
    LOA: "35m",
    Material: "Kayu Bengkirai",
    Lebar: "9,5m",
    Tinggi: "9m",
    thumbnails: ["img/Pekalongan/Galangan Wiwik/5.jpg", "img/Pekalongan/Galangan Wiwik/1.jpg", "img/Pekalongan/Galangan Wiwik/coklat 2.png" ],
    whatsappNumber: "+6281215660056"
  },

  {
    id: 5,
    name: "Kapal Ikan CV. Berkah Mandiri",
    image: "img/Batang/CV. Berkah Mandiri/12.jpg",
    Type: "Kapal Ikan",
    Capacity: "310 GT",
    price: "Langsung ke WA",
    Panjang: "30m",
    LOA: "36m",
    Material: "Kayu",
    Lebar: "9,5m",
    Tinggi: "4,5m",
    thumbnails: ["img/Batang/CV. Berkah Mandiri/12.jpg", "img/Batang/CV. Berkah Mandiri/biru 1.png", "img/Batang/CV. Berkah Mandiri/biru 2.png", "img/Batang/CV. Berkah Mandiri/biru 3.png", ],
    whatsappNumber: "+6281274518495"
  },

  {
    id: 6,
    name: "Kapal Ikan CV. Berkah Mandiri",
    image: "img/Batang/CV. Berkah Mandiri/17.jpg",
    Type: "Kapal Ikan",
    Capacity: "310 GT",
    price: "Langsung ke WA",
    Panjang: "30m",
    LOA: "36m",
    Material: "Kayu",
    Lebar: "9,5m",
    Tinggi: "4,5m",
    thumbnails: ["img/Batang/CV. Berkah Mandiri/17.jpg", "img/Batang/CV. Berkah Mandiri/18.jpg", "img/Batang/CV. Berkah Mandiri/merah 1.png", "img/Batang/CV. Berkah Mandiri/merah 2.png", "img/Batang/CV. Berkah Mandiri/merah 3.png", ],
    whatsappNumber: "+6281274518495"
  },

  {
    id: 7,
    name: "Kapal Ikan CV. NoMarine",
    image: "img/Batang/Galangan NoMarine/4.jpg",
    Type: "Kapal Ikan",
    Capacity: "30-35 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu",
    Lebar: "5m",
    Tinggi: "1,6-2m",
    thumbnails: ["img/Batang/Galangan NoMarine/4.jpg", "img/Batang/Galangan NoMarine/3.jpg", "img/Batang/Galangan NoMarine/kuning 1.png", ],
    whatsappNumber: "+6281274518495"
  },

  {
    id: 8,
    name: "Kapal Ikan CV. NoMarine",
    image: "img/Batang/Galangan NoMarine/5.jpg",
    Type: "Kapal Ikan",
    Capacity: "30-35 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu",
    Lebar: "5m",
    Tinggi: "1,6-2m",
    thumbnails: ["img/Batang/Galangan NoMarine/5.jpg", "img/Batang/Galangan NoMarine/1.jpg", "img/Batang/Galangan NoMarine/kuning 2.png", ],
    whatsappNumber: "+6281274518495"
  },

  {
    id: 9,
    name: "Kapal Ikan CV. Soyo Mandiri",
    image: "img/Rembang/CV. Soyo Mandiri/3.jpg",
    Type: "Kapal Ikan",
    Capacity: "30 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu Penggireng",
    Lebar: "6,5m",
    Tinggi: "6m",
    thumbnails: ["img/Rembang/CV. Soyo Mandiri/3.jpg", "img/Rembang/CV. Soyo Mandiri/4.jpg", "img/Rembang/CV. Soyo Mandiri/model 1.png", "img/Rembang/CV. Soyo Mandiri/model 2.png" ],
    whatsappNumber: "+6288980217263"
  },

  {
    id: 10,
    name: "Kapal Ikan CV. Soyo Mandiri",
    image: "img/Rembang/CV. Soyo Mandiri/4.jpg",
    Type: "Kapal Ikan",
    Capacity: "30 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu Penggireng",
    Lebar: "6,5m",
    Tinggi: "6m",
    thumbnails: ["img/Rembang/CV. Soyo Mandiri/4.jpg", "img/Rembang/CV. Soyo Mandiri/3.jpg", "img/Rembang/CV. Soyo Mandiri/model 1.png", "img/Rembang/CV. Soyo Mandiri/model 3.png" ],
    whatsappNumber: "+6288980217263"
  },

  {
    id: 11,
    name: "Kapal Ikan CV. Tambah Barokah",
    image: "img/Rembang/CV. Tambah Barokah/2.jpg",
    Type: "Kapal Ikan",
    Capacity: "35-60 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu Penggireng",
    Lebar: "6,5m",
    Tinggi: "6m",
    thumbnails: ["img/Rembang/CV. Tambah Barokah/2.jpg", "img/Rembang/CV. Tambah Barokah/5.jpg", "img/Rembang/CV. Tambah Barokah/model 1.png", "img/Rembang/CV. Tambah Barokah/model 2.png" ],
    whatsappNumber: "+62882007040358"
  },

  {
    id: 12,
    name: "Kapal Ikan CV. Tambah Barokah",
    image: "img/Rembang/CV. Tambah Barokah/5.jpg",
    Type: "Kapal Ikan",
    Capacity: "35-60 GT",
    price: "Langsung ke WA",
    Panjang: "15m",
    LOA: "20m",
    Material: "Kayu Penggireng",
    Lebar: "6,5m",
    Tinggi: "6m",
    thumbnails: ["img/Rembang/CV. Tambah Barokah/5.jpg", "img/Rembang/CV. Tambah Barokah/4.jpg", "img/Rembang/CV. Tambah Barokah/model 1.png", "img/Rembang/CV. Tambah Barokah/model 3.png" ],
    whatsappNumber: "+62882007040358"
  }

  // Tambahkan produk lainnya di sini
];

function showProductList() {
  document.getElementById('productList').style.display = 'block';
  document.getElementById('product-detail').style.display = 'none';
  document.getElementById('judul').style.display = 'block'
  document.getElementById('searchInput').style.display = 'block'
  document.getElementById('tombol').style.display = 'block'
  document.getElementById('filter').style.display = 'block'
}

function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  
  if (product) {
      document.getElementById('mainImage').src = product.image;
      document.getElementById('productName').textContent = product.name;
      document.getElementById('productType').textContent = product.Type;
      document.getElementById('productCapacity').textContent = product.Capacity;
      document.getElementById('productPrice').textContent = product.price;
      document.getElementById('productPanjang').textContent = product.Panjang;
      document.getElementById('productLOA').textContent = product.LOA;
      document.getElementById('productMaterial').textContent = product.Material;
      document.getElementById('productLebar').textContent = product.Lebar;
      document.getElementById('productTinggi').textContent = product.Tinggi;

      // Clear and add new thumbnails
      const thumbnailContainer = document.getElementById('thumbnailImages');
      thumbnailContainer.innerHTML = '';
      product.thumbnails.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.classList.add('thumbnail');
          img.onclick = () => changeImage(src);
          thumbnailContainer.appendChild(img);
      });

     // Buat link WhatsApp dinamis berdasarkan produk
     const whatsappLink = `https://wa.me/${product.whatsappNumber}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}%20(${product.price}).%20Berikut%20gambar%20produk%20yang%20saya%20pilih:%20${encodeURIComponent(product.image)}`;
      document.getElementById("whatsappLink").href = whatsappLink;

      document.getElementById('productList').style.display = 'none';
      document.getElementById('product-detail').style.display = 'block';
      document.getElementById('judul').style.display = 'none'
      document.getElementById('searchInput').style.display = 'none'
      document.getElementById('tombol').style.display = 'none'
      document.getElementById('filter').style.display = 'none'
     
  }
}

function changeImage(src) {
  document.getElementById('mainImage').src = src;
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("DetailKapal").style.display = "block";
  document.querySelector(".tablink").classList.add("active");
});


