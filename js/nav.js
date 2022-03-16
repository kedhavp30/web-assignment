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
        <a href="#"><i class="fa fa-shopping-cart" ></i></a>
      </div>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">About Us</a></li>
        <li class="link-item"><a href="#" class="link">Contact Us</a></li>
      </ul>
    `;
  }
  
  createNav();