const headerContent = `
  <div class="top-bar d-flex-r-bt-c">
    <div class="left-block d-flex-r-st-c">

      <div class="logo-holder">
        <a href="#" class="logo-title"><img src="../admin/inc/images/logo.png" alt="" class="web-brand"></a>
      </div>

      <div class="selects">
        <div class="currency-select-holder d-flex-r-st-c">
          
          <div class="select-box" onclick="currencyToggleOptions(this)">
            <div class="selected">
              <div class="flag">
                <img src="../admin/inc/images/currency/usd.png" alt="UK">
              </div>
              <span>EN / USD</span>
            </div>
            <span class="arrow"><i class="fas fa-chevron-down"></i></span>
          </div>
      
          <div class="options">
            <div class="option" onclick="currencySelectOption('EN', 'EN / USD', '../admin/inc/images/currency/usd.png', this)">
              <div class="flag"><img src="../admin/inc/images/currency/usd.png" alt="UK"></div>
              <span>EN / USD</span>
            </div>
            <div class="option" onclick="currencySelectOption('DE', 'DE / EURO', '../admin/inc/images/currency/germany.png', this)">
              <div class="flag"><img src="admin/inc/images/currency/germany.png" alt="DE"></div>
              <span>DE / EURO</span>
            </div>
            <div class="option" onclick="currencySelectOption('EG', 'EG / POUND', '../admin/inc/images/currency/egy.png', this)">
              <div class="flag"><img src="admin/inc/images/currency/egy.png" alt="EG"></div>
              <span>EG / POUND</span>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="right-block">
      <ul class="d-flex-r-st-c">
        <li><a href="/pages/customerprofile.html">my account</a></li>
        <li><a href="/pages/checkout.html">checkout</a></li>
        <li><button id="login-btn">login</button></li>
        <button class="open-btn">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </ul>
    </div>

  </div>

  <div class="main-header">

    <div class="middle-bar d-flex-r-bt-c">

      <div class="logo-holder">
        <a href="#" class="logo-title"><img src="admin/inc/images/logo.png" alt="" class="web-brand"></a>
      </div>

      <form class="search-form d-flex-r-bt-c">
        <div class="custom-select-wrapper">
          <div class="custom-select">
            <div class="select-trigger">All</div>
            <div class="options">
              <div class="option" data-value="all">All</div>
              <div class="option" data-value="electronics">Electronics</div>
              <div class="option" data-value="fashion">Fashion</div>
              <div class="option" data-value="books">Books</div>
              <div class="option" data-value="home">Home</div>
            </div>
          </div>
          <input type="hidden" name="category" value="all">
        </div>

        <input type="search" placeholder="search your favourite product">
        <button class="search-btn"><i class="fas fa-search"></i></button>
      </form>

      <div class="services-buttons d-flex-r-st-c">
        <a href="#" class="service-button d-flex-r-c-c">
          <i class="fa-solid fa-code-compare"></i>
          <div class="value"><span>125</span></div>
        </a>

        <a href="/pages/favourite.html" class="service-button like-button d-flex-r-c-c">
          <i class="far fa-heart"></i>
          <div class="value"><span>84</span></div>
        </a>

        <a href="/pages/cart.html" class="service-button cart-button d-flex-r-c-c">
          <i class="fas fa-shopping-cart"></i>
          <div class="value"><span></span></div>
        </a>
      </div>
      
    </div>

    <div class="bottom-bar">

      <div class="selects">
        <div class="currency-select-holder d-flex-r-st-c">
          
          <div class="select-box" onclick="currencyToggleOptions(this)">
            <div class="selected">
              <div class="flag">
                <img src="../admin/inc/images/usd.png" alt="UK">
              </div>
              <span>EN / USD</span>
            </div>
            <span class="arrow"><i class="fas fa-chevron-down"></i></span>
          </div>
      
          <div class="options">
            <div class="option" onclick="currencySelectOption('EN', 'EN / USD', '../admin/inc/images/usd.png', this)">
              <div class="flag"><img src="admin/inc/images/usd.png" alt="UK"></div>
              <span>EN / USD</span>
            </div>
            <div class="option" onclick="currencySelectOption('DE', 'DE / EURO', '../admin/inc/images/germany.png', this)">
              <div class="flag"><img src="admin/inc/images/germany.png" alt="DE"></div>
              <span>DE / EURO</span>
            </div>
            <div class="option" onclick="currencySelectOption('EG', 'EG / POUND', '../admin/inc/images/egy.png', this)">
              <div class="flag"><img src="admin/inc/images/egy.png" alt="EG"></div>
              <span>EG / POUND</span>
            </div>
          </div>

        </div>
      </div>

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