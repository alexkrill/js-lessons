const string = "Привет! Как дела?";
var result = "";

var vowels = "аеияюоёуыэ";

for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i].toLowerCase())) {
    result += string[i];
  }
}
console.log(result);