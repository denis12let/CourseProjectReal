// function handleFruitChange() {
//     const selectElement = document.getElementById('fruits');
//     const selectedFruit = selectElement.value;
//     alert('Вы выбрали: ' + selectedFruit);
//   }

  document.addEventListener("DOMContentLoaded", function() {
    var filterButton = document.querySelector(".filter_button");
    var filterBlock = document.querySelector(".filter_block");
  
    filterButton.addEventListener("click", function() {
      filterBlock.classList.toggle("show");
  
    });
  });

  fetch("https://6554716863cafc694fe67789.mockapi.io/items")
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

    