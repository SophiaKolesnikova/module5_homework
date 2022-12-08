let map = new Map();
map.set("Hello", "world");
map.set(1, "number");
map.set(false, 135);

map.forEach((value, key) => {
  console.log(`Ключ - ${key}, значение - ${value}`)
});