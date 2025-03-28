function rectangleAarea(width, height) {
  return width * height;
}
console.log(rectangleAarea(5, 7));

function checkNum(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}
console.log(checkNum(3));
console.log(checkNum(6));

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(6));

function maxNum(arr) {
  if (arr.length === 0) return null;
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
console.log(maxNum([7, 10, 8, 19, 3, 1]));


function reversingString(str){
return str.split("").reverse().join("");
}
console.log(reversingString("radiaSabahat"))