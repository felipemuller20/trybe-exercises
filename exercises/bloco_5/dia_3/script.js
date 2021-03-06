function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let dias = document.createElement('li');
  dias.innerHTML = dezDaysList[index];
  dias.className = 'day';
  document.querySelector('#days').appendChild(dias);
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    dias.className += ' holiday';
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
  dias.className += ' friday';
  }
}

// exercicio 2
function createBtn(text) {
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(newButton);
  newButton.innerText = text;
}
createBtn('Feriados');

// exercicio 3
function paintHolidays() {

let btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', function() {
  let feriados = document.querySelectorAll('.holiday');

  for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index].style.backgroundColor === 'white') {
      feriados[index].style.backgroundColor = 'rgb(238,238,238)'
    } else {
        feriados[index].style.backgroundColor = 'white';
    }
  }
})
}
paintHolidays();

// exercicio 4

function fridayButton(texto) {
  let fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(fridayBtn);
  fridayBtn.innerText = texto;
}
fridayButton('Sexta-feira');

// exercicio 5

function fridayBtn() {


let fridayB = document.getElementById('btn-friday');

fridayB.addEventListener('click', function() {
  let fridays = document.querySelectorAll('.friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === 'Sexta-CHEIRA') {
      fridays[index].innerText = (fridays[index].nextElementSibling.innerText) - 1;
    } else {
    fridays[index].innerText = 'Sexta-CHEIRA';
    }
  }
});

}
fridayBtn();





