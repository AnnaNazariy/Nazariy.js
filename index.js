document.getElementById("toggleButton").addEventListener("click", function () {
  var h1Element = document.querySelector("h1");

  if (h1Element) {
    // перевірка чи існує елемент h1
    if (this.textContent === "Видалити") {
      h1Element.remove(); // видалення елементу h1
      this.textContent = "Відновити"; // зміна тексту кнопки
    } else {
      document.body.appendChild(h1Element); // відновлення елементу h1
      this.textContent = "Видалити"; // зміна тексту кнопки
    }
  } else {
    var newH1 = document.createElement("h1"); // створення нового елементу h1
    newH1.textContent = "Заголовок"; // додавання тексту
    document.body.appendChild(newH1); // додавання елементу в тіло документу
    this.textContent = "Видалити"; // зміна тексту кнопки
  }
});
