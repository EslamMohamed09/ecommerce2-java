const headerContent = `
  <div class="top-nav d-flex-r-bt-c">
    <div class="left-block">
      <div class="d-flex-r-st-c" id="currency-select">
        <select>
          <option value="EN">EN / USD</option>
          <option value="DE">DE / EURO</option>
          <option value="EG">EG / POUND</option>
        </select>
      </div>
    </div>
    <div class="right-block">
      <ul class="d-flex-r-st-c">
        <li><a href="/pages/customerprofile.html">my account</a></li>
        <li><a href="/pages/cart.html">my cart</a></li>
        <li><a href="/pages/checkout.html">checkout</a></li>
        <li><button id="login-btn">login</button></li>
        <button id="open-mHeader"><i class="fas fa-bars"></i></button>
      </ul>
    </div>
  </div>

  <div id="main-header" class="main-header">

    <div class="middle-nav d-flex-r-bt-c">
      <h2 class="web-title"><a href="/index.html">shopping</a></h2>
      <form class="search-form d-flex-r-bt-c">
        <input type="search" placeholder="search">
        <button class="search-btn"><i class="fas fa-search"></i></button>
      </form>
      <div class="buttons d-flex-r-st-c">
        <a href="/pages/favourite.html" class="service-button like-icon d-flex-r-c-c">
          <i class="far fa-heart"></i>
          <div class="value"><span>84</span></div>
        </a>
        <a href="/pages/cart.html" class="service-button cart-icon d-flex-r-c-c">
          <i class="fas fa-shopping-cart"></i>
          <div class="value"><span></span></div>
        </a>
        <a href="#" class="service-button d-flex-r-c-c">
          <i class="fas fa-lock"></i>
          <div class="value"><span>125</span></div>
        </a>
      </div>
    </div>

    <div class="bottom-nav">
      <nav>
        <ul class="d-flex-r-st-c">
          <li><a href="/pages/category.html?id=1" target="_blank">electronics</a></li>
          <li><a href="/pages/category.html?id=2" target="_blank">laptops</a></li>
          <li><a href="/pages/category.html?id=30" target="_blank">watches</a></li>
          <li><a href="/pages/category.html?id=66" target="_blank">shoes</a></li>
        </ul>
      </nav>
    </div>

  </div>

  <div class="login-drawer d-flex-c-st-c" id="login-drawer">

    <form class="signin d-flex-c-st-c">

      <div class="drawer-header d-flex-r-bt-c">
        <h4>login</h4>
        <button id="close-login-drawer-btn"><i class="fas fa-times"></i></button>
      </div>

      <div class="input-boxes d-flex-c-st-c">

        <div class="input-box d-flex-r-st-c">
          <i class="fa fa-envelope" id="icon"></i>
          <input type="text" name="email" placeholder="Your Email or Phone number">
        </div>

        <div class="input-box d-flex-r-st-c pass-col">
          <i class="fa fa-key" id="icon"></i>
          <div class="pass-input d-flex-r-bt-c">
            <input type="password" name="password" maxlength="25" pattern=".{5,25}" title="Password can't be less than 5 characters or more than 25" placeholder="Write your password" autocomplete="off" required/>
            <div class="passeye" onclick="eyeFunction(this)">
              <i class="fa fa-eye" style="display:none;"></i>
              <i class="fa fa-eye-slash"></i> 
            </div>
          </div>
        </div>

        <input type="submit" class="btn4" name="login" value="login">

        <a href="reset_password.php" class="forget-password">forget your password ?</a>

        <a href="login.php" class="btn4-trans">create account</a>

      </div>

    </form>

  </div>
`;