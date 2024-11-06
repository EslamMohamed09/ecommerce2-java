const headerContent = `
  <div class="left-header">
  
    <div class="logo">
      <img src="img/buyhome.png" alt="">
      <h2>ecommerce</h2>
    </div>

    <div id="asidebutton">
      <i class="fas fa-bars"></i>
    </div>

  </div>

  <div class="right-header">

    <div class="theme-toggler" id="theme-toggler">
      <i class="fas fa-adjust active" id="icon"></i>
      <i class="far fa-moon" id="icon"></i>
    </div>

    <div class="profile">
      <div class="info">
        <p>Hey, <b>eslam</b></p>
        <small>admin</small>
      </div>
      <img src="img/eslam.jpg" id="profile-img" alt="">
      <div class="drop-menu d-flex-c-st-st">
        <a href="#" class="drop-link">update profile</a>
        <a href="logout.php" class="drop-link">logout <i class="fas fa-sign-out-alt" id="icon"></i></a>
      </div>
    </div>

  </div> <!-- End Right Header -->

  <div class="small-menu">

    <a href="#" class="small-menu-link">
      <i class="fa-solid fa-layer-group" id="icon"></i>
      <span>categories</span>
    </a>

    <a href="#" class="small-menu-link">
      <i class="fas fa-cart-plus" id="icon"></i>
      <span>add product</span>
    </a>

    <a href="#" class="small-menu-link">
      <i class="fas fa-store-alt" id="icon"></i>
      <span>products</span>
    </a>

    <button class="small-menu-link" id="asidebutton2">
      <i class="fas fa-bars" id="icon"></i>
      <span>menu</span>
    </button>

  </div>`;