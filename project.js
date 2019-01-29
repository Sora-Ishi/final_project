function run(){
  window.alert("不良に追い付かれ、ボコボコにされた。");
  window.alert("GAME OVER");
  location.href = "https://sora-ishi.github.io/final_project/project.html";
}

function find(){
  window.alert("逃げた全ての猫を捕まえろ！");
}

var time1 = new Date().getTime();
function back1(){
  var time = 25 - ((new Date().getTime() - time1) / 1000);
  window.alert('チャイムが鳴るまで後30秒しかない！7羽の雛鳥を全員'+ time +'秒以内に巣に返してあげよう！');
}

function mushi(){
  window.alert("いつもお世話になってるおばさんの窮地を救えなかった罪悪感でタケシは学校に行く気力を失い、帰宅した。");
  window.alert("GAME OVER");
  location.href = "https://sora-ishi.github.io/final_project/project.html";
}

function mushi2(){
  window.alert("ヒナの死骸を狙ってカラスが群が流ようになった");
  window.alert("学園はカラスだらけになり、街では呪われた学校と呼ばれるようになる");
  window.alert("他校から迫害やいじめを受けるようになる");
  window.alert("心が折れたタケシは不登校になった");
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

//ネコを捕まえるゲーム
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
  location.href = "https://sora-ishi.github.io/final_project/teacher.html";
}
   else {alert('時間をかけすぎたため、授業に遅れてしまった。');
   alert('所要時間：' + t + '秒');
   alert('GAME OVER');
   location.href = "https://sora-ishi.github.io/final_project/project.html";
 }
 }
 });
    return false;
  });
});

//体育教師に見つかるか見つからないかは運ゲーム
function go(){
  var un = new Array("見つかった…","見つからなかった！","遅刻して教室にたどり着いたが、職員室に呼び出された","宿題を忘れたことに気づいたが、授業に出席した");
  var find = un[Math.floor(Math.random()*un.length)];
  var i;
  alert(find);
  if (find == "見つからなかった！"){alert("おめでとう！");
  location.href = "https://sora-ishi.github.io/final_project/bird.html";
}
  else{
      alert("先生に怒られたショックでタケシは帰宅した。");
      location.href = "https://sora-ishi.github.io/final_project/project.html";
  }
}

//雛鳥ゲーム
function f_dragstart(event){
  event.dataTransfer.setData("text", event.target.id);
}

function f_dragover(event){
  event.preventDefault();
}

var bird = 0;
var st = new Date().getTime();
function f_drop(event){
  var id_name = event.dataTransfer.getData("text");
  var drag_elm =document.getElementById(id_name);
  event.currentTarget.appendChild(drag_elm);
  event.preventDefault();
  bird = bird + 1;
　var t = (new Date().getTime() - st) / 1000;
  if (bird == 7){
	  if (t<=25){
	  alert('全員無事に巣へ返すことができた！');
	  alert('所要時間：' + t + '秒');
	  alert('ギリギリ授業に間に合った！');
	　location.href = "https://sora-ishi.github.io/final_project/clear.html";
	  }
	  else {alert('時間をかけすぎたため、授業に遅れてしまった。');
    alert('所要時間：' + t + '秒');
    alert('GAME OVER');
    location.href = "https://sora-ishi.github.io/final_project/project.html";
      }
  }
}
