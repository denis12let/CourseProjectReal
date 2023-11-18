const loginLink = document.getElementById("login-link");
const katalogLink = document.getElementById("katalog-link");
loginLink.href = "#";
loginLink.textContent = "Выйти";
loginLink.style.textDecoration = "underline";
katalogLink.style.color = "limegreen";

// function handleFruitChange() {
//     const selectElement = document.getElementById('fruits');
//     const selectedFruit = selectElement.value;
//     alert('Вы выбрали: ' + selectedFruit);
//   }


loginLink.onclick = (event) => {
    localStorage.removeItem('token');
    location.replace("../index.html");
}
loginCheck();
