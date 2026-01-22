// 1) let x; typeof x
let x;
console.log(typeof x); 

// 2) typeof 10 и typeof "10"
console.log(typeof 10);   
console.log(typeof "10"); 

// 3) typeof true и typeof false
console.log(typeof true);  
console.log(typeof false); 

// 4) typeof null
// Пояснение: это историческая особенность JS.
// null — примитив "пусто", но typeof показывает "object" (старый баг, который не исправляют).
console.log(typeof null); 

// 5) "15" + 1
// Пояснение: если есть строка и стоит "+", JS делает склейку (конкатенацию).
// 1 превращается в строку и получается "15" + "1" => "151".
console.log("15" + 1); 

// 6) "12" - 1
// Пояснение: знак "-" работает как математическая операция.
// JS пытается превратить строку в число: "12" -> 12, затем 12 - 1 = 11.
console.log("12" - 1); 

// 7) Boolean("")
// Пояснение: пустая строка — "ложное" значение (falsy), поэтому Boolean("") -> false.
console.log(Boolean("")); 

// 8) Boolean(" ")
// Пояснение: строка с пробелом НЕ пустая, значит это "истинное" значение (truthy).
console.log(Boolean(" ")); 

// 9) Преобразуйте " 13 " в число
console.log(Number(" 13 ")); 

// 10) isNumber(v) -> true только для чисел и false для NaN
// v === v используется потому что NaN — единственное значение в JS, которое НЕ равно самому себе.
function isNumber(v) {
  if (typeof v === "number" && v === v) {
    return true;
  }
  return false;
}

// Примеры
console.log(isNumber(10));    // true
console.log(isNumber(NaN));   // false
console.log(isNumber("10"));  // false
console.log(isNumber(null));  // false