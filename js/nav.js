const createNav = () => {
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
      <div class="nav">
      <img src="img/logo.jpeg " alt="logo" class="brand-logo">
      <div class="nav-items">
        <div class="search">
          <input type="text" class="search-box" placeholder="Search products">
          <button class="search-btn">search</button>
        </div>
        <a href="#"><i class="fa fa-user" ></i></a>
        <a href="../cart.html"><i class="fa fa-shopping-cart" ></i></a>
      </div>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="../index.html" class="link">Home</a></li>
        <li class="link-item"><a href="../searchproduct.html?gender=female" class="link">Women</a></li>
        <li class="link-item"><a href="../searchproduct.html?gender=male" class="link">Men</a></li>
        <li class="link-item"><a href="../searchproduct.html" class="link">Category</a></li>
        <li class="link-item"><a href="../aboutus.html" class="link">About Us</a></li>
      </ul>
    `;
  }
  
  createNav();