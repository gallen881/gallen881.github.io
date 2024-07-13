// 新增的內容
var arr = document.getElementsByClassName('recent-post-item');
//把element-class替換成你想要添加特效的元素的類名
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add('wowpanels');
  }
// 原來的內容
var ANGLE = 5; //控制浮動角度，數值越大，浮動幅度越大。
var panel= document.getElementsByClassName('wowpanels');
for(var i = 0;i<panel.length;i++){
  floatable(panel[i]);
  }
function floatable (content) {
  content.addEventListener('mouseout', e => {
    content.style.transform = `perspective(300px)
                   rotateX(0deg)
                   rotateY(0deg)
                   rotateZ(0deg)`;
  });
  content.addEventListener('mousemove', e => {
    var w = content.clientWidth;
    var h = content.clientHeight;
    var y = (e.offsetX - w * 0.5) / w * ANGLE;
    var x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

    content.style.transform = `perspective(300px)
                   rotateX(${x}deg)
                   rotateY(${y}deg)`;
  });
}