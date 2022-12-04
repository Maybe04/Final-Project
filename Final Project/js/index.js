//切换选项卡
let worldTab = document.querySelectorAll('.world-tab li');
let worldWrap = document.querySelectorAll('.world-body');
//拿到所有li
for (let i = 0; i < worldTab.length; i++) {
    //绑定点击事件
    worldTab[i].onclick = function () {
        //清空样式
        for (let j = 0; j < worldTab.length; j++) {
            worldTab[j].className = '';
            worldWrap[j].className = 'world-body';
        }
        worldTab[i].className = 'on';
        worldWrap[i].className = 'world-active';
    }
}

//选项卡轮播
let gameTab = document.querySelectorAll('.game-tab li');
let gameBottom = document.querySelectorAll('.game-con');
let i = 0;
// 封装切换的函数
function Tab() {
    // 清空样式
    for (let k = 0; k < gameTab.length; k++) {
        gameTab[k].className = '';
        gameBottom[k].className = 'game-con';
    }
    // 设置样式
    gameTab[i].className = 'game-on';
    gameBottom[i].className = 'game-active';
}
// 封装自动切换的函数
function autoTab() {
    i++;
    if (i > gameTab.length - 1) {
        i = 0;
    }
    Tab();
}
// 拿到所有li
for (let j = 0; j < gameTab.length; j++) {
    // 绑定鼠标移动事件
    gameTab[j].onmousemove = function () {
        Tab();
        i = j;
    }
}
//设置定时器
let timer = setInterval(autoTab, 3000);
// 鼠标移入 停止定时器
gameTab.onmouseover = function () {
    clearInterval(timer);
}
// 鼠标离开 开启定时器
gameTab.onmouseout = function () {
    timer = setInterval(autoTab, 3000);
}

