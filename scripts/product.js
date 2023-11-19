const loginLink = document.getElementById("login-link");
const basketLink = document.getElementById("basket-link");
const token = localStorage.getItem('token');

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('itemId'));
console.log(id); 



const viewProduct = () => {
  fetch(`http://localhost:8080/products/product/${id}`, {
    method: "GET", 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
         Accept: 'application/json',
      },
  })
    .then(res => res.json())
    .then(data => {
        const itemContainer = document.querySelector('.item');
        console.log(data);
        const itemElement = document.createElement('div');
        itemElement.href = "link";
        itemElement.classList.add('item__container');
        itemElement.innerHTML = `
                <div class="item__img">
                  <img src="${data.imageUrl}" alt="">
                </div>
                <div class="item__info">
                  <div class="item__title">
                    <h3>${data.title}</h3>
                  </div>
                  <div class="item__price">
                    <h3>${data.price} руб.</h3>
                  </div>
                  <hr>
                  <div class="item__description">
                    <p class = "item__description">
                    ${data.description}
                    </p>
                  </div>
                  <hr>
                  <div class="item__source">
                    Изготовитель: ${data.source}    
                  </div>
                  <div class="button__basket">
                    <button class="btn__basket" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      В корзину
                    </button>
                  </div>
                </div>
        `;
              
        itemContainer.appendChild(itemElement); // Добавляем карточку товара в контейнер
  });
  }








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

viewProduct();
loginCheck();
