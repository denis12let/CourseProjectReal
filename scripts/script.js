const loginLink = document.getElementById("login-link");
const basketLink = document.getElementById("basket-link");
const katalogLink = document.getElementById("katalog-link");
// const productLinkClick = document.querySelector("product-link");
katalogLink.style.color = "limegreen"
const token = localStorage.getItem('token');
// function handleFruitChange() {
//     const selectElement = document.getElementById('fruits');
//     const selectedFruit = selectElement.value;
//     alert('Вы выбрали: ' + selectedFruit);
//   }



const loginCheck = () => {
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
                  <div class="item__info">
                    <div id="product-link" class="item_name">
                      <a href="/pages/product.html?itemId=${item.id}">${item.title}</a>
                    </div>
                    <div class="item_price">${item.price} руб.</div>
                </div>
              </div>
          `;
            
          itemContainer.appendChild(itemElement); // Добавляем карточку товара в контейнер
      });
});
}
// handleAddProductClick = () => {
  
// }

viewProduct();
loginCheck();
// productLinkClick.addEventListener('click', handleAddProductClick);
