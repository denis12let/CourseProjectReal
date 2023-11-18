const loginLink = document.getElementById("login-link");
const basketLink = document.getElementById("basket-link");
const token = localStorage.getItem('token');

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


loginCheck();
