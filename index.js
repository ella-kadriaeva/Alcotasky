const arr = [2, 18, 5, 8,2, 1, 1, 9, 12, 1, 24, 56, 49, 33, -256, 0, -4, 25];

  const four = [];
  if (arr[0] > arr[1]) {
    four[0] = arr[1];
    four[1] = arr[0];
  } else {
    four[0] = arr[0];
    four[1] = arr[1];
  }

  if (arr[2] > four[1]) {
    four[2] = arr[2];
  } else if (arr[2] < four[0]) {
    four[2] = four[1];
    four[1] = four[0];
    four[0] = arr[2];
  } else {
    four[2] = four[1];
    four[1] = arr[2];
  }

  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > four[3]) {
      continue;
    }
    else if (arr[i] > four[2]) {
      four[3] = arr[i];
    } else if (arr[i] < four[0]) {
      four[3] = four[2];
      four[2] = four[1];
      four[1] = four[0];
      four[0] = arr[i];
    } else if (arr[i] > four[0] && arr[i] < four[1]) {
      four[3] = four[2];
      four[2] = four[1];
      four[1] = arr[i];
    } else {
      four[3] = four[2];
      four[2] = arr[i];
    }
  }

console.log(four);//[ -256, -4, 0, 1 ]
