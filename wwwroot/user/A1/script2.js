// 假设正确的密码是 "admin"
const correctPassword = "admin123";

const passwordInput = document.getElementById('password - input');
const loginButton = document.getElementById('login - button');

loginButton.addEventListener('click', function () {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        // 这里替换为你要跳转的实际网页地址
        window.location.href = "io.html";
    } else {
        alert('密码错误，请重新输入。');
    }
});