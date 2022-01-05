"use strict";

if (document.documentElement.clientWidth < 480) {
  if (!confirm('ВОРНИНГ! На экране меньше чем 480 пикселей \nбудет выгледеть уёбски. \nПродолжить?')) {
    window.location.href = 'https://pornhub.com/';
  }
}

var z = 300;
var add = document.createElement('div');
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

  switch (_int) {
    case 1:
      text = 'КАК УВЕЛИЧИТЬ БИПКУ?? \n Всего одна капля этого народного средства...';
      break;

    case 2:
      text = 'Богдан зашёл попариться в баню, \n но далее произошло необратимое...';
      break;

    case 3:
      text = 'Предупреждение Влада Подмостовского для каждого поклонника Лерки...';
      break;

    case 4:
      text = 'Отрёкся от геев, как теперь живёт красавец гей-кирилл?...';
      break;

    case 5:
      text = 'Всем геям! Был выбран новый лидер бисексуалов...';
      break;

    case 6:
      text = 'Болезнь очка Богдаши больше не скрыть. Вот почему Кирилл развёлся...';
      break;

    case 7:
      text = 'Учёные предупредили: 28 декабря натуралам спрятаться будет негде...';
      break;

    case 8:
      text = 'Не вытерпела: Почему Алеся сбежала из семьи?...';
      break;

    case 9:
      text = 'Пророчество Себастьяна сбывается, это крах для Богдана...';
      break;

    case 10:
      text = 'Сава - Жалкий пёс. Как теперь ворует самый знаменитый вор...';
      break;
  }

  add.textContent = text;
  addCross(add);
  document.body.lastElementChild.prepend(add.cloneNode(true));
  add.style.zIndex = z++;
  add.style.top = getRandomInt(0, document.documentElement.clientHeight - 200 - 5) + 'px';
  add.style.left = getRandomInt(0, document.documentElement.clientWidth - document.documentElement.clientWidth / 100 * 40 - 5) + 'px';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}