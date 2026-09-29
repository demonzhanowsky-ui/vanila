var QUESTIONS = [
  {q: 'Какой сервис учит CSS Grid?', a: ['Grid Garden', 'CodeCombat', 'Screeps'], c: 0},
  {q: 'Какое свойство выравнивает элементы по главной оси flexbox?', a: ['align-items', 'justify-content', 'z-index'], c: 1},
  {q: 'Где решают задачи-ката?', a: ['Codewars', 'CSS Diner', 'Flexbox Froggy'], c: 0}
];
var box = document.getElementById('quiz');
QUESTIONS.forEach(function (item, i) {
  var fs = document.createElement('fieldset');
  var lg = document.createElement('legend');
  lg.textContent = (i + 1) + '. ' + item.q;
  fs.appendChild(lg);
  item.a.forEach(function (text, j) {
    var id = 'q' + i + '-' + j;
    var input = document.createElement('input');
    input.type = 'radio'; input.name = 'q' + i; input.id = id; input.value = j;
    var label = document.createElement('label');
    label.htmlFor = id; label.textContent = text;
    fs.appendChild(input); fs.appendChild(label);
  });
  box.appendChild(fs);
});
document.getElementById('quiz-submit').addEventListener('click', function () {
  var score = 0;
  QUESTIONS.forEach(function (item, i) {
    var checked = document.querySelector('input[name="q' + i + '"]:checked');
    if (checked && Number(checked.value) === item.c) { score++; }
  });
  document.getElementById('quiz-result').textContent = 'Результат: ' + score + ' из ' + QUESTIONS.length;
});
