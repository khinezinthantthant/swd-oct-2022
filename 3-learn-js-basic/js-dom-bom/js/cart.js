const productCards = document.querySelector("#productCards");
const productCategories = document.querySelector("#productCategories");
const cat = document.querySelector(".cat");
const searchInput = document.querySelector("#searchInput");
const cart = document.querySelector("#cart");
const header = document.querySelector("#header");

const app = document.querySelector("#app");

const productDetailModal = new bootstrap.Modal("#productDetailModal");
const excerpt = (str, maxlength = 70) => {
  if (str.length > maxlength) {
    return str.substring(0, maxlength) + " ...";
  }
  return str;
};

const star = (no) => {
  let starStr = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.floor(no) < i) {
      starStr += "<i class='bi bi-star'></i>";
    } else {
      starStr += "<i class='bi bi-star-fill'></i>";
    }
  }
  return starStr;
};
const slugtoText = (slug) => {
  return slug.replaceAll("-", " ");
};

const createProductCards = (product) => {
  const div = document.createElement("div");
  div.addEventListener("click", () => {
    renderProductDetailModal();
  });
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);
  div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img class="product-card-img mb-2" src="${
                  product.thumbnail
                }" alt="">
                <h4 class="mb-2 fw-bold text-truncate">${product.title}</h4>
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="badge text-dark text-capitalize bg-light ">${slugtoText(
                      product.category
                    )}</div>
                    <div>
                        ${star(product.rating)}
                    </div>
                </div>
                
                <p class="product-card-description text-black-50">${excerpt(
                  product.description
                )}</p>
                <div class="d-flex justify-content-between align-items-center border-top pt-3">
                    <p class='mb-0 price'>$ ${product.price}</p>
                    
                </div>
            </div>
        </div>
    `;

  const img = new Image();
  img.src = product.thumbnail;
  img.className = "product-card-img mb-2";
  div.querySelector(".card-body").prepend(img);

  const btn = document.createElement("button");
  btn.className = " btn btn-outline-dark add";
  btn.innerText = "Add to Cart";

  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (btn.classList.contains("active")) {
      btn.innerText = "Add to Cart";
      btn.classList.remove("active");
    } else {
      const imgani = new Image();
      imgani.src = product.thumbnail;

      imgani.style.position = "fixed";
      imgani.style.transition = "0.5s";
      imgani.style.zIndex = 2000;
      imgani.style.width = img.getBoundingClientRect().width + "px";
      imgani.style.height = img.getBoundingClientRect().height + "px";

      imgani.style.left = img.getBoundingClientRect().left + "px";
      imgani.style.top = img.getBoundingClientRect().top + "px";

      document.body.append(imgani);

      setTimeout(() => {
        imgani.style.left = cart.getBoundingClientRect().left + 10 + "px";
        imgani.style.top = cart.getBoundingClientRect().top + 20 + "px";

        imgani.style.transform = "rotate(360deg)";
        imgani.style.width = "0px";
        imgani.style.height = "0px";
      }, 100);

      console.log(imgani.getBoundingClientRect());

      btn.classList.add("active");
      btn.innerText = "Added";
    }
    console.log("add to cart");
  });

  div.querySelector(".price").after(btn);

  return div;
};

const renderProductCard = (products) => {
  productCards.innerHTML = null;
  products.forEach((product) => {
    productCards.append(createProductCards(product));
  });
};

// process
// renderProductCard(products.filter(product => product.category === 'smartphones'));
renderProductCard(products);

const createCategoryBtn = (name) => {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-dark btn-sm me-2 text-capitalize cat";
  btn.setAttribute("cat", name);
  btn.innerText = slugtoText(name);
  return btn;
};

categories.forEach((category) =>
  productCategories.append(createCategoryBtn(category))
);

searchInput.addEventListener("keyup", (event) => {
  renderBySearch(searchInput.value);
});

const productDetailCarouselItems = (arr) => {
  let slides = "";
  let indicators = "";

  arr.forEach((el, index) => {
    slides += `
        <div class="carousel-item ${index === 0 && "active"}">
            <img src="${el}" class="d-block w-100 product-detail-img" alt="...">
        </div>
        `;

    indicators += `
        <button type="button" data-bs-target="#productDetailCarousel" data-bs-slide-to="${index}" class="${
      index === 0 && "active"
    }" aria-current="true" aria-label="Slide 1"></button>
        `;
  });

  return { slides, indicators };
};

const renderProductDetailModal = () => {
  const currentCard = event.target.closest(".product-card");
  const currentProductId = currentCard.getAttribute("product-id");
  const currentProduct = products.find(
    (product) => product.id == currentProductId
  );
  // console.log(currentProduct);

  productDetailModal._element.querySelector(".modal-title").innerText =
    currentProduct.title;

  productDetailModal._element.querySelector(".modal-body").innerHTML = `
        <div id="productDetailCarousel" class="carousel slide">
            <div class="carousel-indicators">
                ${productDetailCarouselItems(currentProduct.images).indicators}
            </div>
            <div class="carousel-inner">
                ${productDetailCarouselItems(currentProduct.images).slides}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productDetailCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productDetailCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-2 mt-3">
            <div class="badge text-dark text-capitalize bg-light ">${slugtoText(
              currentProduct.category
            )}</div>
            <div>
                ${star(currentProduct.rating)}
            </div>
        </div>

        <p class="mt-3">${excerpt(currentProduct.description)}</p>

        <p>$ ${currentProduct.price}</p>
        `;
  productDetailModal.show();
};

const renderProductCardByCategory = () => {
  const currentCategory = event.target.getAttribute("cat");
  if (currentCategory === "all") {
    renderProductCard(products);
  } else {
    renderProductCard(
      products.filter((product) => product.category === currentCategory)
    );
  }

  //   remove old
  productCategories.querySelector(".active").classList.remove("active");

  //   add new
  event.target.classList.add("active");
};

const renderBySearch = (keyword) => {
  renderProductCard(
    products.filter((product) => {
      return (
        product.title.toLowerCase().search(keyword.toLowerCase()) != -1 ||
        product.description.toLowerCase().search(keyword.toLowerCase()) != -1
      );
    })
  );
};

window.addEventListener("scroll", (event) => {
  // console.log(window.scrollY);
  if (window.scrollY > 150) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
});

// app.addEventListener("click",(event)=>{
//     // console.log(event.target);
//     if(event.target.closest(".product-card") && !event.target.classList.contains("add")){
//         renderProductDetailModal();
//     }

//     if(event.target.classList.contains("cat")){
//         renderProductCardByCategory();
//     }

//     if(event.target.classList.contains("add")){
//         console.log("add to cart");
//     }

// });
