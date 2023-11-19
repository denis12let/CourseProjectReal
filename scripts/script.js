const loginLink = document.getElementById("login-link");
const basketLink = document.getElementById("basket-link");
const katalogLink = document.getElementById("katalog-link");
katalogLink.style.color = "limegreen"
const token = localStorage.getItem('token');
// function handleFruitChange() {
//     const selectElement = document.getElementById('fruits');
//     const selectedFruit = selectElement.value;
//     alert('Вы выбрали: ' + selectedFruit);
//   }

loginCheck = () => {
  if(token){
      loginLink.textContent = "Выйти";
      loginLink.href = "#";
      loginLink.style.textDecoration = "underline";
      console.log("Пользователь авторизирован");
  }else{
      loginLink.href = "/pages/auth.html";
      console.log("Пользователь не авторизирован");
  }
}

loginLink.onclick = (event) => {
  if (loginLink.textContent === "Выйти") {
    loginLink.textContent = "Войти";
    localStorage.removeItem('token');
    loginLink.style.textDecoration = "none";
    console.log("Пользователь больше не авторизирован");
  event.preventDefault();
    loginLink.href = "/pages/auth.html";
  }
}

basketLink.onclick = (event) => {
  if (loginLink.textContent === "Выйти"){
    basketLink.href = "/pages/basket.html";
  }else{
    basketLink.href = "#";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var filterButton = document.querySelector(".filter_button");
  var filterBlock = document.querySelector(".filter_block");
  
  filterButton.addEventListener("click", function() {
    filterBlock.classList.toggle("show");
    });
});

const viewProduct = () => {
fetch("http://localhost:8080/products/view")
  .then(res => res.json())
  .then(data => {
      const itemContainer = document.querySelector('.items'); 
      itemContainer.innerHTML = ''; 
      data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.href = "link";
          itemElement.classList.add('item');
          itemElement.innerHTML = `
              <div class="basket_item_icon">
                <button class = "image-button">
                </button>
              </div>
              <div class="information_field">
                  <div class="item_image">
                      <img src="${item.imageUrl}" alt="" />
                  </div>
                  <div class="item_name">
                    <a href="/pages/product.html?itemId=${item.id}">${item.title}</a>
                  </div>
                  <div class="item_price">${item.price} руб.</div>
              </div>
              <div class="views">
                  <div class="rate">
                      <div class="rate_icon">
                          <img src="/icons/rate.png" />
                      </div>
                      <div class="rate_count">${item.rating}</div>
                  </div>
                  <div class="review">
                      <div class="rev_count">2 отзыва</div>
                      <div class="review_icon">
                          <img src="/icons/review.png" />
                      </div>
                  </div>
              </div>
          `;
            
          itemContainer.appendChild(itemElement); // Добавляем карточку товара в контейнер
      });
});
}
viewProduct();
loginCheck();