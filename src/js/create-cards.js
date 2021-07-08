// Импортируем шаблон
import cardsTemplate from '../templates/cards.hbs';
// Импортируем массив данных
import menu from '../menu.json'

// Применяем шаблон для массива данных
const markup = cardsTemplate(menu);

// Находим элемент в DOM и добавляем разметку
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);