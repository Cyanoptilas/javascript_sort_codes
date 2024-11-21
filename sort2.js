function mergeSort(ary) {
  if (ary.length < 2) {
    return ary;
  }

  midIndex = Math.floor(ary.length / 2);
  const left = ary.slice(0, midIndex);
  const right = ary.slice(midIndex);

  return merge(mergeSort(left), mergeSort(right));
}



function merge(left, right) {
  const resultAry = [];
  i = 0;
  j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      resultAry.push(left[i]);
      left.splice(i, i + 1);
      i++;
    } else {
      resultAry.push(right[j]);
      right.splice(j, j + 1);
      j++;
    }
  }
  
  resultAry.push(...left);
  resultAry.push(...right);
  
  return resultAry;
}

const sortedAry = mergeSort([23, 13, 67, 123, 4, 11, 9]);

console.log(sortedAry);

// 好きな理由
// 再帰呼び出しによって効率よく関数を使用し、
// プログラミングの長所を活かしている方法だから
