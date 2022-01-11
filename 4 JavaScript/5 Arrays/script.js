let n=[1,2,3];
let empty=[];
n[0]=4;
//alert(n[0]);
//alert(n.length);
n.push(4,5);//adds an item at the end
//alert(n[n.length-1]);
n.unshift(0);//adds an item at the beginning and returns the new length
//alert(n[0]);
n.pop();//removes the last element
//alert(n[n.length-1]);
n.shift();//removes the first element
alert(n);