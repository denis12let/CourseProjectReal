const registerClick = document.querySelector("#registerClick");
const loginLink = document.getElementById("login-link");
loginLink.style.color = "limegreen";

const token = localStorage.getItem('token');
if(token){
    loginLink.style.color = 'limegreen';
    console.log("Пользователь авторизирован");
}else{
    console.log("Пользователь не авторизирован");
}


function fetchRegister(registerData) {    
    fetch("http://localhost:8080/users/register", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             Accept: 'application/json',
          },
        body: JSON.stringify(registerData),
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "Пользователь успешно зарегистрирован") {
            const token = data.token; // Предполагается, что сервер возвращает токен в поле 'token'
            localStorage.setItem('token', token); // Сохраняем токен в локальном хранилище
            
            location.replace("../index.html")
        } else {
            console.log('Ошибка регистрации');
        }
    })
    .catch(error => console.log(error));
}
// function fetchRegister(registerData) { GET
//     console.log("24webdeveloper.ru");
//     fetch("http://localhost:8080/users/?id=1", {
//         method: "GET", 
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//              Accept: 'application/json',
//           },
//         //body: JSON.stringify(registerData),
//       })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// function sendAuthenticatedRequest(url, method, body = null) {
//     const token = localStorage.getItem('token');
//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//     };
//     let options = {
//         method: method,
//         headers: headers,
//     };
//     if (body)   options.body = JSON.stringify(body);
//     return fetch(url, options);
// }

function handleRegisterClick() {
    const login = document.querySelector("#regLogin");
    const password = document.querySelector("#regPassword");
    const repeatPassword = document.querySelector("#regRepeatPassword");

    const registerData = { 
        username: login.value,
        password: password.value,
        repeatPassword: repeatPassword.value,
    }
    fetchRegister(registerData)

    //location.replace("../index.html")
    // window.location.href="http://172.19.80.1:5500/CourseProjectReal/basket/basket.html";
   
}

registerClick.addEventListener('click', handleRegisterClick);