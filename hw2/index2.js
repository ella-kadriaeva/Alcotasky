// Напишите метод,
// который удаляет все дубликаты из отсортированного массива.
// Метод должен вернуть длину нового массива без дубликатов и изменить исходный массив таким образом,
// чтобы все уникальные элементы были перемещены в начало.

let nums = [2, 2, 3, 3, 3, 4, 5, 5];

let newarr = [];
for (let i = 0; i < nums.length; i++) {
  if (newarr.indexOf(nums[i]) === -1) {
    newarr.push(nums[i]);
  }
}
console.log(
  "Длина нового массива:",
  newarr.length,
  "измененный массив:",
  newarr
);

// v2
let arrVar2 = [];
arrVar2.push(nums[0]);
let indexOfElement = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === arrVar2[indexOfElement]) {
    continue;
  } else {
    arrVar2.push(nums[i]);
    indexOfElement++;
  }
}
console.log(
  "Длина нового массива:",
  arrVar2.length,
  "измененный массив:",
  arrVar2
);

// Напишите метод, который принимает два отсортированных массива и объединяет их в один отсортированный массив.

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let arrResult = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] > arr2[j]) {
    arrResult.push(arr2[j]);
    j++;
  } else {
    arrResult.push(arr1[i]);
    i++;
  }
}
while (i < arr1.length) {
  arrResult.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  arrResult.push(arr2[j]);
  j++;
}
console.log("новый массив:", arrResult);
