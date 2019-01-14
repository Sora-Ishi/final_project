function run(){
  window.alert("不良に追い付かれ、ボコボコにされた。");
  window.alert("GAME OVER");
  location.href = "https://sora-ishi.github.io/final_project/project.html";
}

function find(){
  window.alert("この街には野良猫が多い！おばさんの猫を探し、捕まえろ！");
}

function mushi(){
  window.alert("いつもお世話になってるおばさんの窮地を救えなかった罪悪感でタケシは学校に行く気力を失い、帰宅した。");
  window.alert("GAME OVER");
  location.href = "https://sora-ishi.github.io/final_project/project.html";
}

function fight(){
  window.alert("実は昔空手を習っていたタケシ。うろ覚えの技で不良を倒せ！（クリックして攻撃を与えろ！）");
}

function hit(){
  h = document.getElementById("hp");
  h.value = h.value - 10;
  if (h.value == 0){
    window.alert("不良を倒すことに成功した！これでようやく登校できる！");
    location.href = "https://sora-ishi.github.io/final_project/find1.html";
  }
}

$(function() {
  $('a').click(function() {
    var NUM = 8;
    var SIZE = 1000;
    var count = 0;
    var st = new Date().getTime();
    $('body').empty();
    function newPos() {
      return {
        left: Math.floor(Math.random() * SIZE),
        top: Math.floor(Math.random() * SIZE)
      };
    }
    for (var i = 0; i < NUM; i++) {
      $('<input id="stripe" type="image" src="https://sora-ishi.github.io/final_project/illustration/cat08_moyou_sabatora.png" alt="100" width="">')
      .appendTo('body')
      .css('position', 'absolute')
      .css(newPos())
      .each(function() {
        $(this).animate(newPos(), 1500, arguments.callee);
      });
    }
    $('<input id="plain" type="image" src="https://sora-ishi.github.io/final_project/illustration/cat03_moyou_gray.png" alt="100" width="">')
    .appendTo('body')
    .css('position', 'absolute')
    .css(newPos())
    .each(function() {
      $(this).animate(newPos(), 1500, arguments.callee);
    });

    $('input').click(function() {
   $(this).stop().attr('disabled', 'disabled').fadeOut();
   $(this).attr('')
   var t = (new Date().getTime() - st) / 1000;
   if (++count >= NUM + 1){
   if (t<=10) {alert('おばさんの猫を全て捕まえることに成功した！これで学校へ向かえる。');
  alert('所要時間：' + t + '秒');
  location.href = "https://sora-ishi.github.io/final_project/papers.html";
}
   else {alert('時間をかけすぎたため、授業に遅れてしまった。');
   alert('所要時間：' + t + '秒');
   alert('GAME OVER');
   alert('HINT: 模様がなく、道路と同化しやすい');
   location.href = "https://sora-ishi.github.io/final_project/project.html";
 }
 }
 });
    return false;
  });
});

function go(){
  for(var i=1;i<2;i++){
  var un = new Array("見つかった…","見つからなかった！",);
  var find = un[Math.floor(Math.random()*un.length)];
  var i;
  alert(find);
  if (find == "見つからなかった！"){alert("おめでとう！");
  location.href = "https://sora-ishi.github.io/final_project/clear.html";
}
  else{
    alert("先生に怒られたショックでタケシは帰宅した。");
    location.href = "https://sora-ishi.github.io/final_project/project.html";
  }
}
}
