// Базовий рівень

const btns = document.querySelector("#clickBtn");

function changeBtnHandler(e) {
  // 1) HTML: є кнопка.
  //     JS: При натисканні на кнопку змінити текст цієї кнопки.

  e.target.textContent = "!me Click";
  // 2) HTML: є кнопка.
  //     JS: При натисканні на кнопку змінити її колір.
  e.target.style.color = "blue";
}

btns.addEventListener("click", changeBtnHandler);

// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const img = document.querySelector(".mainImg");

function changeImgHandler(e) {
  img.src =
    "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-sad-pictures-for-desktop-hd-backgrounds-image_2690576.jpg";
  img.alt = "cat1";
  img.style.heigh = "600px";
  img.style.width = '600px'
  img.style.objectFit = 'cover'
}

img.addEventListener("mouseenter", changeImgHandler);

function backImgHandler(e) {
  img.src =
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg";
  img.alt = "cat";
  img.style.heigh = "600px";
  img.style.width = '600px'
  img.style.objectFit = 'cover'
}

img.addEventListener("mouseleave", backImgHandler);
