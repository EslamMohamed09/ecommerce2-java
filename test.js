function renderCategoryProducts(){
    let categoryProductsHtml = categoryProducts.map((product) => {

      let imageHtml = product.image.slice(0,2).map((imageSrc) => `<img src="${imageSrc}" alt="${product.title}">`).join('');

      let colorHtml = product.colors && product.colors.length > 0 
        ? `<ul class="colors-holder d-flex-r-st-c">
              ${product.colors.slice(0,5).map((proColor) =>
                `<li class="circle-outer"><div class="color-circle" style="background-color:${proColor};"></div></li>`
              ).join('')}
          </ul>`
        :'';

      let truncateTitle = product.title.split(" ").slice(0,3).join(" ");

      let filterDescription = product.description ? product.description.replace(/[-:,]/g, "") :
                              product.aboutThisItem ? product.aboutThisItem.replace(/[-:,]/g, "") : '';

      let descriptionHtml = filterDescription ? `<p>${filterDescription.split(" ").slice(0,5).join(" ")}...</p>` : '';

      let ratingHtml = '';
      if(product.rating){
        for (let i=1; i<=5; i++) {
            if (i <= product.rating) {
                ratingHtml += `<i class="fas fa-star"></i>`;
            } else if (i - 0.5 === product.rating) {
                ratingHtml += `<i class="fas fa-star-half-alt"></i>`;
            } else {
                ratingHtml += `<i class="far fa-star"></i>`;
            }
        }
        ratingHtml = `<div class="ratings d-flex-r-st-st">${ratingHtml}</div>`
      }

      return `<div class="product-item">
                <div class="image-holder d-flex-r-c-c">
                  ${imageHtml}
                </div>
                <div class="icons d-flex-c-bt-c">
                  <button type="button"><i class="far fa-heart" id="icon"></i></button>
                  <button type="button"><i class="fas fa-shopping-cart" id="icon"></i></button>
                </div>
                <div class="content d-flex-c-st-st">
                  ${colorHtml}
                  <a href="single.html" class="product-name">${truncateTitle}</a>
                  ${descriptionHtml}
                  ${ratingHtml}
                  <div class="price-holder d-flex-r-bt-c">
                    <strong class="oldprice">${product.price}</strong>
                    <strong class="price">${product.salePrice}</strong>
                  </div>
                </div>
      </div>`
    }).join('');
    productsContainer.innerHTML = categoryProductsHtml;
  }


  function renderCategoryProducts(categoryProducts, page) {
    let categoryProductsHtml = categoryProducts.map((product) => {
        let imageHtml = product.image.slice(0, 2).map((imageSrc) => `<img src="${imageSrc}" alt="${product.title}">`).join('');

        let colorHtml = product.colors && product.colors.length > 0
            ? `<ul class="colors-holder d-flex-r-st-c">
                  ${product.colors.slice(0, 5).map((proColor) =>
                    `<li class="circle-outer"><div class="color-circle" style="background-color:${proColor};"></div></li>`
                  ).join('')}
              </ul>`
            : '';

        let truncateTitle = product.title.split(" ").slice(0, 3).join(" ");
        let filterDescription = product.description ? product.description.replace(/[-:,]/g, "") :
            product.aboutThisItem ? product.aboutThisItem.replace(/[-:,]/g, "") : '';

        let descriptionHtml = filterDescription ? `<p>${filterDescription.split(" ").slice(0, 5).join(" ")}...</p>` : '';

        let ratingHtml = '';
        if (product.rating) {
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    ratingHtml += `<i class="fas fa-star"></i>`;
                } else if (i - 0.5 === product.rating) {
                    ratingHtml += `<i class="fas fa-star-half-alt"></i>`;
                } else {
                    ratingHtml += `<i class="far fa-star"></i>`;
                }
            }
            ratingHtml = `<div class="ratings d-flex-r-st-st">${ratingHtml}</div>`
        }

        return `<div class="product-item">
                    <div class="image-holder d-flex-r-c-c">
                      ${imageHtml}
                    </div>
                    <div class="icons d-flex-c-bt-c">
                      <button type="button"><i class="far fa-heart" id="icon"></i></button>
                      <button type="button"><i class="fas fa-shopping-cart" id="icon"></i></button>
                    </div>
                    <div class="content d-flex-c-st-st">
                      ${colorHtml}
                      <a href="single.html" class="product-name">${truncateTitle}</a>
                      ${descriptionHtml}
                      ${ratingHtml}
                      <div class="price-holder d-flex-r-bt-c">
                        <strong class="oldprice">${product.price}</strong>
                        <strong class="price">${product.salePrice}</strong>
                      </div>
                    </div>
                </div>`
    }).join('');

    productsContainer.innerHTML = categoryProductsHtml;
}