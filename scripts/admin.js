const addProductClick = document.querySelector("#addClick");

function fetchProduct(productData) {    
    fetch("http://localhost:8080/products/add", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             Accept: 'application/json',
          },
        body: JSON.stringify(productData),
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "Продукт успешно зарегистрирован") {
            // location.replace("../index.html")
        } else {
            console.log('Ошибка добавления');
        }
    })
    .catch(error => console.log(error));
}

fetch("http://localhost:8080/products")
  .then(res => res.json())
  .then(data => {
      const itemContainer = document.querySelector('.items'); // Замените селектор на селектор вашего контейнера, в котором будете отрисовывать карточки товара
      
      // Для каждого товара в полученных данных
      data.forEach(item => {
          // Создаем разметку карточки товара
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

handleAddProductClick = () => {
    const url = document.querySelector("#addURL");
    const title = document.querySelector("#addTitle");
    const description = document.querySelector("#addDescription");
    const price  = document.querySelector("#addPrice");
    const count = document.querySelector("#addCount");
    const rate = document.querySelector("#addRate");
    const source = document.querySelector("#addSource");
    const productData = {
        url: url.value,
        title: title.value,
        description: description.value,
        price: price.value,
        count: count.value,
        rate: rate.value,
        source: source.value
    };
    fetchProduct(productData);
}

addProductClick.addEventListener('click', handleAddProductClick());
