const addProductClick = document.querySelector("#addClick");


function fetchAddProduct(productData) {
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
            fetchView();
            // location.replace("../index.html")
        } else {
            console.log('Ошибка добавления');
        }
    })
    .catch(error => console.log(error));
}

// function removeProductFromPage(id) {
//     const productElement = document.getElementById(id); // Находим элемент товара по id
//     if (productElement) {
//       productElement.remove(); // Удаляем элемент из DOM
//     }
// }
function removeProductFromPage(id) {
    const productElement = document.getElementById(id);
    if (productElement && productElement.parentNode) {
      productElement.parentNode.removeChild(productElement);
    }
  }

function fetchView(){
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
            <div id="deleteClick" class="item-cart__delete">
              <button id=${item.id} type="button" class="btn-close btn btn-secondary" 
              aria-label="Close" data-bs-toggle="tooltip" 
              data-bs-placement="right" title="Удалить"></button>
            </div>
          `;
          itemContainer.appendChild(itemElement); 

          const deleteButton = itemElement.querySelector("#deleteClick");
          deleteButton.addEventListener('click', handleDeleteProductClick);
      });
});
}
fetchView();
function fetchDeleteProduct(id) {
    fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             Accept: 'application/json',
          },
        //body: id,
          
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (typeof data === "number") {
            console.log(`Продукт id=${data} успешно удален`);
            //removeProductFromPage(id); // Удаляем товар из страницы\
            fetchView();
            //location.replace("/pages/admin.html")
        } else {
            console.log("Ошибка удаления");
        }
    })
    .catch(error => console.log(error));
}



function handleDeleteProductClick(event){
    const productData = Number(event.target.id);
    console.log(typeof productData);
    fetchDeleteProduct(productData);
}

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
    fetchAddProduct(productData);
}

addProductClick.addEventListener('click', handleAddProductClick);
