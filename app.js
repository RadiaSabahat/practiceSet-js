// PRACTICING FUNCTIONS 

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


// PRACTICING ARRAY METHODS 
const userName = ['AudioListener', 'sufeyan', 'faiza', 'mubeen' , 'mishi'];
const tranformtobjects = userName.map((item)=>({val : item}));
console.log(tranformtobjects);

//2
const nums = [10, 20, 55, 40, 70];
const firstGreaterThan50 = nums.find(num => num > 50);
console.log(firstGreaterThan50); 



// destructuring for arrays 
const [firstName, lastName] = ['john', 'doe'];
console.log(lastName)

//destructuring for objects
const {name, age}={
  name:"alia",
  age: 33

};
 console.log(name);
console.log(age);
 
//destructuring in functions
function storeOrder({id, currency}){
  localStorage.setitem('id', id);
  localStorage.setItem('currency',currency);
}

//spread operator
const hobbies= ['cooking', 'singing', 'arts'];
 const newUserNames= ['lily', 'john'];
 const mergeNames=[...userName, ...newUserNames]
 console.log(mergeNames)
 //spread operators in objet
 const user={
  name:'max',
  age: 22
 };
const extendedUser={
  ...user,
  standar: 'a-levels',
  phone: '090078601'
 
};
console.log(extendedUser)

//functions as values
function handleTimeout() {
  console.log('time out')
};
const handleTimeout2 =()=>{
  console.log('time out');
};  
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

setTimeout(() => {
  console.log('more timing out')
}, 4000 );

// if we want to custom  a fnction . passing functions as values is not limited to built-in functions  but can be done with all functions or the functon of our own
function greeter(greetfn){
  greetfn();
};
greeter(()=>console.log('hi'));

//func. inside func
function init(){
 function greet(){
    console.log('hye');

  }
greet();
}
init();

