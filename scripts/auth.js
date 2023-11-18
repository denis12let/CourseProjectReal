import { jwtDecode } from '../node_modules/jwt-decode/build/esm/index.js';
const loginLink = document.getElementById("login-link");
loginLink.style.color = "limegreen";
const token = localStorage.getItem('token');

function fetchAuth(authData) {    
    fetch("http://localhost:8080/users/auth", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             Accept: 'application/json',
          },
        body: JSON.stringify(authData),
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "Пользователь успешно авторизирован") {
            const token = data.token; // Предполагается, что сервер возвращает токен в поле 'token'
            localStorage.setItem('token', token); // Сохраняем токен в локальном хранилище
            console.log(data);
            console.log(jwtDecode(token))

            //location.replace("../index.html")
        } else {
            console.log('Ошибка регистрации');
        }
    })
    .catch(error => console.log(error));
}

function handleAuthClick() {
    const login = document.querySelector("#authLogin");
    const password = document.querySelector("#authPassword");

    const authData = { 
        username: login.value,
        password: password.value,
    }
    if (authData.username === "admin" && authData.password === "admin"){
        location.replace("/pages/admin.html");
    }
    fetchAuth(authData)

    //location.replace("../index.html")
    // window.location.href="http://172.19.80.1:5500/CourseProjectReal/basket/basket.html";
   
}

loginClick.addEventListener('click', handleAuthClick);