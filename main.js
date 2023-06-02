//pr1

let expectedUsers = 1000;
let firstDayUsers = 812;
let secondDayUsers = 1360;
let thirdDayUsers = 657;
let averageUsers = (firstDayUsers + secondDayUsers + thirdDayUsers) / 3;
console.log(averageUsers);

//pr2

let expectedUsers = 1000;
let firstDayUsers = 812;
let secondDayUsers = 1360;
let thirdDayUsers = 657;
let averageUsers = (firstDayUsers + secondDayUsers + thirdDayUsers) / 3;
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) { // проверяем, что среднее значение больше ожидаемого
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

//pr3

let expectedUsers = 1000;
let firstDayUsers = 812;
let secondDayUsers = 1360;
let thirdDayUsers = 657;
let fourthDayUsers = 1247;
let averageUsers = (firstDayUsers + secondDayUsers + thirdDayUsers + fourthDayUsers) / 4;
console.log('Средняя посещаемость: ' + averageUsers); 
if (averageUsers > expectedUsers) { 
  console.log('Посещаемость великолепна. Продолжай в том же духе!'); 
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!'); 
}

//pr4

let expectedUsers = 1000;
let averageUsers = 0; 
let usersByDay = [812, 1360, 657, 1247]; 
averageUsers = usersByDay.reduce((sum, current) => sum + current) / usersByDay.length; // перезаписываем значение averageUsers
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

//pr5

let usersByDay = [812, 1360, 657, 1247];
let firstDayUsers = usersByDay[0];
console.log(firstDayUsers); 
let fourthDayUsers = usersByDay[3]; 
console.log(fourthDayUsers); 

//pr6

let usersByDay = [812, 1360, 657, 1247]; 
let index = 0; 
console.log(usersByDay[index]); 
index = 3; 
console.log(usersByDay[index]);


//pr7

let usersByDay = [812, 1360, 657, 1247]; 
console.log(usersByDay.length); 
console.log(usersByDay[usersByDay.length - 1]); 
console.log(usersByDay[usersByDay.length - 3]); 
usersByDay.push(1000); 
console.log(usersByDay[usersByDay.length - 1]);

//pr8

let expectedUsers = 1000;
let usersByDay = [812, 1360, 657, 1247];
let averageUsers = 0;
averageUsers = usersByDay.reduce((sum, current) => sum + current) / usersByDay.length; 
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
for (let i = 0; i <= usersByDay.length - 1; i++) { 
  console.log(usersByDay[i]); 
}

//pr9

let usersByDay = [4, 5, 1, 3, 2, 6, 7]; 
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  console.log(usersByDay[i]);
  totalUsers += usersByDay[i];
}
console.log(totalUsers);

//pr10


usersByDay = [1217, 1000, 950, 1150, 600, 980, 1210, 1340, 800, 1325, 700, 730, 910, 1120, 690,
  1254, 1005, 1280, 555, 1040, 940, 1275, 805, 1220, 920, 600, 1100, 1212, 1300, 1208]; 
  totalUsers = 0;
  for (let i = 0; i <= usersByDay.length - 1; i++) {
    totalUsers += usersByDay[i];
  }
  averageUsers = totalUsers / usersByDay.length;
  console.log('Средняя посещаемость: ' + averageUsers);
  if (averageUsers > expectedUsers) {
    console.log('Посещаемость великолепна. Продолжай в том же духе!');
  } else {
    console.log('Посещаемость так себе. Нужно поднапрячься!');
  }



//pr11

let expectedUsers = 1000;
let usersByDay = [1217, 1000, 950, 1150, 600, 980, 1210, 1340, 800, 1325, 700, 730, 910, 1120, 690,
  1254, 1005, 1280, 555, 1040, 940, 1275, 805, 1220, 920, 600, 1100, 1212, 1300, 1208];
let totalUsers = 0;
let minUsers = expectedUsers - 100;
for (let i = 0; i < usersByDay.length; i++) {
  if (usersByDay[i] < minUsers) {
    console.log(`Количество посетителей в ${i} день меньше ожидаемого: ${usersByDay[i]}`);
  }
  totalUsers += usersByDay[i];
}
let averageUsers = totalUsers / usersByDay.length;
console.log(`Средняя посещаемость: ${averageUsers}`);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

//pr12

usersByDay = [1217, 1000, 950, 1150, 600, 980, 1210, 1340, 800, 1325, 700, 730, 910, 1120, 690,
  1254, 1005, 1280, 555, 1040, 940, 1275, 805, 1220, 920, 600, 1100, 1212, 1300, 1208];

totalUsers = 0;
minUsers = expectedUsers - 100;
let badDays = [];

for (let i = 0; i < usersByDay.length; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    badDays[i] = expectedUsers - usersByDay[i];
  } else {
    badDays[i] = 0;
  }
}

let averageUsers = totalUsers / usersByDay.length;
console.log(`Средняя посещаемость: ${averageUsers}`);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

//pr13

let expectedUsers = 1000;
let usersByDay = [1217, 1000, 950, 1150, 600, 980, 1210, 1340, 800, 1325, 700, 730, 910, 1120, 690,
  1254, 1005, 1280, 555, 1040, 940, 1275, 805, 1220, 920, 600, 1100, 1212, 1300, 1208];
let totalUsers = 0;
let minUsers = expectedUsers - 300;
let badDays = [];
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    badDays[i] = expectedUsers - usersByDay[i];
  } else {
    badDays[i] = 0;
  }
}
let averageUsers = totalUsers / usersByDay.length;
console.log(`Средняя посещаемость: ${averageUsers}`);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
console.log(`Количество плохих дней: ${badDays.filter(day => day > 0).length}`);


//pr14

let expectedUsers = 1000;
let usersByDay = [1200, 800, 1100, 950, 1300, 700, 900, 1250, 600, 1400, 1100, 900, 800,
  1100, 1200, 1300, 950, 810, 1500, 1100, 1200, 1000, 1300, 1200, 800, 1100, 1010, 900, 1000,
  1050];

let totalUsers = 0;
let minUsers = expectedUsers - 300;
let badDays = [];

for (let i = 0; i < usersByDay.length; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    badDays[i] = expectedUsers - usersByDay[i];
  } else {
    badDays[i] = 0;
  }
}

let averageUsers = totalUsers / usersByDay.length;
console.log(`Средняя посещаемость: ${averageUsers}`);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

console.log(`Количество плохих дней: ${badDays.filter(day => day > 0).length}`);


//pr15

let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  console.log(usersByDay[j]);
}

//pr16

let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
let minValue = usersByDay[currentIndex];
for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
  }
}
console.log('Минимальный элемент: ' + minValue);

//pr17

let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
let minValue = usersByDay[currentIndex];
for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}
console.log('Минимальный элемент: ' + usersByDay[currentIndex]);

//pr18

let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
for (let i = 0; i < usersByDay.length; i++) {
  console.log('Сортируем ' + (i+1) + '-й подмассив: ' + usersByDay[i]);
  currentIndex = i;
  let minValue = usersByDay[currentIndex];
  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = usersByDay[j];
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + usersByDay[currentIndex]);
      console.log('Массив сейчас: ' + usersByDay[i]);
    }
  }
  console.log('На позиции ' + currentIndex + ' находится минимальный элемент: ' + minValue);
}
console.log('Отсортированный массив: ' + usersByDay);


//pr19

let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);
for (let currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
  let minValue = usersByDay[currentIndex];
  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = usersByDay[j];
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + usersByDay[currentIndex]);
      console.log('Массив сейчас: ' + usersByDay);
    }
  }
  console.log('На позиции ' + currentIndex + ' находится минимальный элемент: ' + minValue);
}

//pr20

let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);
for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];
  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay); // [1, 2, 3, 4]

usersByDay = [5, 4, 3, 2, 1, 0];
console.log(usersByDay);
for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];
  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay); // [0, 1, 2, 3, 4, 5]

usersByDay = [812, 1360, 657, 1247];
console.log(usersByDay);
for (let i = 0; i <= usersByDay.length - 2; i++){
  let minValue = usersByDay[i];
  for (let j = i + 1; j <= usersBy)
}

  


//pr21

if (usersByDay.length % 2 === 0) {
  let firstMedian = usersByDay[(usersByDay.length / 2) - 1];
  let secondMedian = usersByDay[usersByDay.length / 2];
  median = (firstMedian + secondMedian) / 2;
} else {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
  console.log(medianIndex);
  console.log(median);
}
console.log(median);

//pr22

let usersByDay = [1, 2, 3, 4, 5, 6];
console.log(usersByDay);
let median;

if (usersByDay.length % 2 === 0) {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  console.log(leftIndex, rightIndex);
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
  console.log(median);
} else {
  let medianIndex = (usersByDay.length - 1) / 2;
  console.log(medianIndex);
  median = usersByDay[medianIndex];
  console.log(median);
}

console.log(median);


//pr23

for (let i = 0; i <= usersByDay.length - 2; i++) {
    let minValue = usersByDay[i];
    for (let j = i + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            let swap = usersByDay[i];
            usersByDay[i] = minValue;
            usersByDay[j] = swap;
        }
    }
}
console.log('Отсортированный массив: ' + usersByDay);

let median;
if (usersByDay.length % 2 !== 0) {
    let medianIndex = (usersByDay.length - 1) / 2;
    median = usersByDay[medianIndex];
} else {
    let leftIndex = usersByDay.length / 2 - 1;
    let rightIndex = usersByDay.length / 2;
    median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}

console.log('Медианная посещаемость: ' + median);

if (median / averageUsers < 0.9)

console.log ('Естьподозрения в подтасовках!');
  else

console.log  ('Подозрений в подтасовках нет!');

