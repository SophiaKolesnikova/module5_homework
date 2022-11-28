let arr = [12, 21, 12, 12];
let result = true;
for (let i = 0; i < arr.length -1; i++){
  if (arr[i] !== arr[i + 1]){
    result = false
 }
 } 
console.log(result);