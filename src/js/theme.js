// Обьект тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Переключатель тем в DOM
const inputRef = document.querySelector('#theme-switch-toggle');

// Слушатель события на инпуте
inputRef.addEventListener('change', changeInput);

// Проверка переключателя
function changeInput(event) {
  if (event.currentTarget.checked) {
    checkedInput(Theme.DARK, Theme.LIGHT, true)
  } else { checkedInput(Theme.LIGHT, Theme.DARK, false); }
}

// Установка темы
function checkedInput(a, b, t) {
  document.body.classList.add(a);
  document.body.classList.remove(b);
  localStorage.setItem('theme', a);
  inputRef.checked = t;
}

/* Установка светлой темы
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
} */

// Тема по умолчанию
function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    checkedInput(Theme.LIGHT, Theme.DARK, false);
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedInput(Theme.DARK, Theme.LIGHT, true);
    return;
  }
}

currentTheme();