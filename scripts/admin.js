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

fetch("http://localhost:8080/products/")
  .then(res => res.json())
  .then(data => {
      const itemContainer = document.querySelector('.items'); 
      data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.href = "link";
          itemElement.classList.add('item');
          itemElement.innerHTML = `
            <div class="item-cart__image">
                <img src=${item.imageUrl} alt="">
            </div>
            <div class="item-cart__content">
                <h4 class="item-cart__title">${item.title}</h4>
                <p class="item-cart__descr">${item.description}</p>
            </div>
            <div class="item-cart__counter">
                <input type="number" id="typeNumber" class="form-control" value="${item.count}"/>
            </div>
            <div class="item-cart__price">
               ${item.price}
            </div>
            <div class="item-cart__delete">
              <button type="button" class="btn-close btn btn-secondary" 
              aria-label="Close" data-bs-toggle="tooltip" 
              data-bs-placement="right" title="Удалить"></button>
            </div>
          `;
            
          itemContainer.appendChild(itemElement); // Добавляем карточку товара в контейнер
      });
});

handleAddProductClick = () => {
    const imageUrl = document.querySelector("#addURL");
    const title = document.querySelector("#addTitle");
    const description = document.querySelector("#addDescription");
    const price  = document.querySelector("#addPrice");
    const count = document.querySelector("#addCount");
    const rate = document.querySelector("#addRate");
    const source = document.querySelector("#addSource");
    const productData = {
        imageUrl: imageUrl.value,
        title: title.value,
        description: description.value,
        price: price.value,
        count: count.value,
        rate: rate.value,
        source: source.value
    };
    fetchProduct(productData);
}

addProductClick.addEventListener('click', handleAddProductClick);
