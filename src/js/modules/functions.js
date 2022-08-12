export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

export function windowPopup() {
  const headerBtn = document.querySelector(".nav__btn");
  const popupMain = document.querySelector(".popup");

  headerBtn.onclick = () => {
    popupMain.classList.add("popup__show");
  };

  popupMenu.onclick = (event) => {
    const target = event.target;
    const wrapper = target.classList.contains("popup-main");
    const closeBtn = target.closest("button");

    if (wrapper || closeBtn) {
      popupMain.classList.remove("popup__show");
    }
  };
}
