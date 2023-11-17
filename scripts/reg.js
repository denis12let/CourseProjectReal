const registerClick = document.querySelector("#registerClick");

function fetchRegister(registerData) {    
    fetch("http://localhost:8080/users", {
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
        if (data.message === "Пользователь успешно зарегистрирован") {
            const loginButton = document.getElementById('login-button');
            loginButton.style.backgroundColor = 'green';
            loginButton.textContent = 'Вы успешно зарегистрированы';
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