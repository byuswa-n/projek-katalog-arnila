document.addEventListener("DOMContentLoaded", function () {
  const searchTrigger = document.getElementById("search-trigger");
  const searchModal = document.getElementById("search-modal");
  const closeSearch = document.getElementById("close-search");
  const searchInputField = document.getElementById("search-input-field");
  const tombolCari = document.querySelector("#search-modal button");

  if (searchTrigger && searchModal) {
    searchTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah halaman lompat/refresh
      searchModal.style.setProperty("display", "block", "important"); // PAKSA MODAL MUNCUL
      if (searchInputField) {
        searchInputField.focus(); // Kursor otomatis aktif di kotak ketik
      }
    });
  }

  if (closeSearch && searchModal) {
    closeSearch.addEventListener("click", function () {
      searchModal.style.display = "none";
    });
  }

  function saringProduk() {
    let kataKunci = searchInputField.value.toLowerCase().trim();
    let semuaProduk = document.querySelectorAll(".category-card");

    semuaProduk.forEach(function (produk) {
      let tagJudul = produk.querySelector(".category-link");
      if (tagJudul) {
        let namaProduk = tagJudul.textContent.toLowerCase();
        if (namaProduk.includes(kataKunci)) {
          produk.style.setProperty("display", "block", "important");
        } else {
          produk.style.setProperty("display", "none", "important");
        }
      }
    });
    if (searchModal) {
      searchModal.style.display = "none";
    }
  }

  if (searchInputField) {
    searchInputField.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        saringProduk();
      }
    });
  }

  if (tombolCari) {
    tombolCari.addEventListener("click", function (event) {
      event.preventDefault();
      saringProduk();
    });
  }

  const accountTrigger = document.getElementById("account-trigger");
  const accountModal = document.getElementById("account-modal");
  const closeAccount = document.getElementById("close-account");

  const cartTrigger = document.getElementById("cart-trigger");
  const cartModal = document.getElementById("cart-modal");
  const closeCart = document.getElementById("close-cart");

  if (accountTrigger && accountModal) {
    accountTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      accountModal.style.setProperty("display", "block", "important");
    });
    closeAccount.addEventListener("click", function () {
      accountModal.style.display = "none";
    });
  }

  if (cartTrigger && cartModal) {
    cartTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      cartModal.style.setProperty("display", "block", "important");
    });
    closeCart.addEventListener("click", function () {
      cartModal.style.display = "none";
    });
  }
});
