let items = document.getElementsByClassName('item');
let images = document.getElementsByClassName('afisha-image');


for (let i = 0; i < 5; i++) {
    items[i].onclick = function () {
            items[i].classList.add("active-item");
            images[i].classList.add("afisha-visible");
    }
}
// добавляем при нажатии на итем класс эктив-итем и показываем картинку, осталось задать удаление этих классов у
//остальных элементов

//активно работаю над кнопками вперёд-назад, всё будет гуд)))