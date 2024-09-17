// 获取页面元素
const toggleStatusButton = document.getElementById('toggle-status');
const statusText = document.getElementById('status-text');

// 定义安全状态的数组，这里简单模拟两种状态
const securityStates = ['正在保护', '解除保护'];
let currentIndex = 0;

// 给切换状态按钮添加点击事件监听器
toggleStatusButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % securityStates.length;
    statusText.textContent = securityStates[currentIndex];

    // 根据状态改变护盾图标的颜色（这里只是简单示例，可以使用更复杂的SVG动画或者图标切换）
    if (currentIndex === 0) {
        document.querySelector('#shield-icon svg path').style.fill = '#0f62fe';
    } else {
        document.querySelector('#shield-icon svg path').style.fill = '#f00';
    }
});