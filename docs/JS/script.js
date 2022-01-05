"use strict";

if (document.documentElement.clientWidth < 480) {
  if (!confirm('ВОРНИНГ! На экране меньше чем 480 пикселей \nбудет выгледеть уёбски. \nПродолжить?')) {
    window.location.href = 'https://pornhub.com/';
  }
}

var url = '/IMG/03.jpeg';
var z = 300;
var add = document.createElement('div');
var img = document.createElement('div');
var Timg = document.createElement('img');
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('cross')) {
    e.target.parentNode.remove();
    addAdd(getRandomInt(1, 10));
  }
});
time();

function time() {
  setTimeout(function () {
    addAdd(getRandomInt(1, 10));
    time();
  }, 1500);
}

function addCross(add) {
  var cross = document.createElement('div');
  cross.classList.add('cross');
  cross.textContent = 'X';
  add.prepend(cross);
}

function addAdd(_int) {
  var text = 'КАК УВЕЛИЧИТЬ БИПКУ??';
  console.log(text);
  add.classList.add('add');
  img.classList.add('image');

  switch (_int) {
    case 1:
      text = 'КАК УВЕЛИЧИТЬ БИПКУ?? \n Всего одна капля этого народного средства...';
      url = '/IMG/1.jpg';
      break;

    case 2:
      text = 'Богдан зашёл попариться в баню, \n но далее произошло необратимое...';
      url = '/IMG/2.jpg';
      break;

    case 3:
      text = 'Предупреждение Влада Подмостовского для каждого поклонника Лерки...';
      url = '/IMG/3.jpg';
      break;

    case 4:
      text = 'Отрёкся от геев, как теперь живёт красавец гей-кирилл?...';
      url = '/IMG/4.jpg';
      break;

    case 5:
      text = 'Всем геям! Был выбран новый лидер бисексуалов...';
      url = '/IMG/5.webp';
      break;

    case 6:
      text = 'Болезнь очка Богдаши больше не скрыть. Вот почему Кирилл развёлся...';
      url = '/IMG/6.jpg';
      break;

    case 7:
      text = 'Учёные предупредили: 28 декабря натуралам спрятаться будет негде...';
      url = '/IMG/7.jpg';
      break;

    case 8:
      text = 'Не вытерпела: Почему Алеся сбежала из семьи?...';
      url = '/IMG/8.jpg';
      break;

    case 9:
      text = 'Пророчество Себастьяна сбывается, это крах для Богдана...';
      url = '/IMG/9.jpg';
      break;

    case 10:
      text = 'Сава - Жалкий пёс. Как теперь ворует самый знаменитый вор...';
      url = 'IMG/10.jpg';
      break;
  }

  img.style.background = 'url(' + url + ')';
  add.textContent = text;
  addCross(add);
  Timg.src = url;
  Timg.alt = '1';
  add.prepend(img);
  img.prepend(Timg);
  document.body.lastElementChild.prepend(add.cloneNode(true));
  add.style.zIndex = z++;
  add.style.top = getRandomInt(0, document.documentElement.clientHeight - 400 - 5) + 'px';
  add.style.left = getRandomInt(0, document.documentElement.clientWidth - document.documentElement.clientWidth / 100 * 40 - 5) + 'px';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}