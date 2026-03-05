// 1) slice
"JavaScript".slice(4) //Script

// 2) Проверка начала и конца
"report.pdf".startsWith("rep"); // true
"report.pdf".endsWith(".pdf"); // true

// 3) Замена в строке
"I like cats".replace("cats", "dogs"); // I like dogs

// 4) Подсчёт слов
let fruits = "apple, banana, orange, apple";
let arr = fruits.split(",");
let count = arr.filter(word => word === "apple").length;
console.log(count); // 2

// 5) Фильтер по слову
"My phone number is 12345 and my code is 67890".match(/\d+/g); // Array [ "12345", "67890" ]

// 6) Первое слово в нижнем регистре
let str = "Hello World From JS"; 
let firstWord = str.slice(0, str.indexOf(" "));
let result = str.replace(firstWord, firstWord.toLowerCase());
console.log(result); // hello Word From JS

// 7) Цензура
"JavaScript is cool language".replace("cool", "****");

// 8) Проверка наличия подстроки
let email = "user@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("Email valid");
} else {
    console.log("Invalid");
}

// 9) Аббревиатура
function makeAbbreviation(str) {
    let words = str.split(" ");
    let result = words.map(word => word[0].toUpperCase()).join("");
    return result
}
console.log(makeAbbreviation("Java Script Object Notation"));

// 10) Самое длинное слово
let str = "I love learning JavaScript programming";
let words = str.split(" ");
let longest = "";

for (let word of word) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);