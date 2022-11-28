let arr = [5, 17, 23, 38];
  console.log(arr.length);

let result1 = arr.map(function(item,index, array){
    return index
});
  console.log(result1);

let result2 = arr.map(function(item,index, array){
    return item + 3
});
  console.log(result2);