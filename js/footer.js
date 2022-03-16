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
    <p class = "footer-title">About Company</p>
    <p class = "info">Since the last two decades technology has drastically transformed  the lifestyles
            of human beings.  Technology has advanced to such a  point that anyone can accomplish anything 
            just by sitting in a room. The internet is a tool that may help a person in various aspects.
            For instance, if someone wishes to buy and view products, they can do so with the help of the internet.
            Today, there are very limited organizations which do not rely on technology and digitalisation. 
            Whether it's advertising, banking, or shopping, everything is going to be automated. 
            We are providing online clothes shopping  to ease the lives of local people. 
            We have introduced three types of users in this project: unregistered users, registered users, 
            and administrators. </p>
    <p class="info">Support E-Mail- stylishwearhelpsupport.com,
        customersupport@clothing.com</p>
    <p class="info">Telephone - 4448888, 57448899</p>

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