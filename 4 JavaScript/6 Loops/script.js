/*function findNumber(numbers, type) {
  let odd = [];
  let even = [];
  for (let n of numbers) {
    if (n % 2 == 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  if (type == "odd") {
    return odd;
  } else if (type == "even") {
    return even;
  } else {
    return "Please only choose odd or even";
  }
}*/
function findNumber(n,list){
  let repeat=0;
  for(let number of list){
    if(number==n){
      repeat++;
    }
  }
  return "There is "+repeat+" occurrences of number "+n+" in the array";
}
let list=[1,2,3,1,4,5,1];
alert(findNumber(6,list));
/*let n = [1, 2, 3, 4, 10, 5, 6, 7, 8, 9];
let count=0;
let biggest=0;
while(count<n.length){
  if(n[count]>biggest){
    biggest=n[count];
  }
  count++;
}
alert(biggest);*/
/*let n=101;
let sum=0;
while(n<150){
  sum+=Math.pow(n,2);
  n++;
}
alert(sum);*/
/*let n = prompt("n: ");
let digits = [];
while (n > 0) {
  digits.push(n % 10);
  n = Math.floor(n / 10);
}
let result = [];
for (let digit of digits) {
  result.unshift(digit);
}
alert(result);*/
/*alert(findNumber(n, prompt("Odd or even")));
location. reload(true);*/
