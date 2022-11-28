let map = new Map();
map.set("Hello", "world");
map.set(1, "number");
map.set(false, 135);

for(let name of map.keys()){
  console.log(`Ключ - ${name}`);
}
for(let val of map.values()){
  console.log(`Значение - ${val}`);
}