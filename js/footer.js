const createFooter = () => {
    let footer=document.querySelector('footer');

    footer.innerHTML = `<footer>
    <div class="footer-content">
        <img src="img/logo.jpeg" class = "logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class = "category-title"> Men </li>
                <li><a href="#" class="footer-link">T-shirts</a></li>
                <li><a href="#" class="footer-link">Hoodies</a></li>
                <li><a href="#" class="footer-link">Shirts</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Trousers</a></li>
                <li><a href="#" class="footer-link">Shoes</a></li>
                <li><a href="#" class="footer-link">Sportswear</a></li>
                <li><a href="#" class="footer-link">Joggers</a></li>
          </ul>
          <ul class="category">
            <li class = "category-title"> Women </li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Hoodies</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Sportswear</a></li>
            <li><a href="#" class="footer-link">Joggers</a></li>
            <li><a href="#" class="footer-link">Dresses</a></li>
        </ul>
       </div>
    </div>
    <p class = "footer-title">About STYLISHWEAR</p>
    <p class = "info"> STYLISHWEAR, a newly launched online clothing website, knows the 
    fashion industry can be a dirty place, thereby supporting eco-friendly standards. 
    The brand wants the customers to look and feel as clean as possible with its high-quality
     apparel for both men and women including hoodies & sweatshirts, dresses, 
     trousers and the comfiest tees among others. The clothes are made from organic and 
     sustainably grown cotton, biodegradable modal and alpaca fibre and they are all crafted 
     from non-toxic dyes. 
 </p>
    <p class="info">Support E-Mail- stylishwearhelpsupport.com,
        customersupport@clothing.com</p>
    <p class="info">Contact Number - 4244589, 57448899</p>
    <p class="info">Rue Des Forges, Port Louis</p>

    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & Services</a>
            <a href="#" class="social-link">Privacy Page</a>
       </div>
       <div>
        <a href="#" class="social-link"><i class="fa fa-instagram" ></i></a>
        <a href="#" class="social-link"><i class="fa fa-facebook" ></i></a>
        <a href="#" class="social-link"><i class="fa fa-twitter" ></i></a>
    </div>
    </div>
    <p class="footer-credit">STYLISHWEAR, Best Apparels Clothing Store</p>
</footer>
`;
}
createFooter();