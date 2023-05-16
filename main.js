const but = document.querySelector("button");
const usd = document.querySelector(".convert__input-one");
const rub = document.querySelector(".convert_result");

but.addEventListener("click", function () {
  // значение рублик присваиваем в инпут
  const dollar = Number(usd.value);
  // значение результата присваиваем функции конвертации
  const result = currencyConversion(dollar);
  // вывод ответа присваиваем значению результата, выводим ответ
  rub.innerHTML = result;
});
