// создаем Set
let mySet = new Set();

// добавляем элементы
mySet.add(1);
mySet.add(2);
mySet.add(3);

// пробуем добавить дубликаты
mySet.add(2);
mySet.add(3);

// выводим результат
console.log(mySet);