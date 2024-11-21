function bubbleSort(ary) {
  console.log("ソート前:" + ary);

  for (let i = 0; i < ary.length; i++) {
    for (let j = 0; j < ary.length; j++) {
      if (ary[i] < ary[j]) {
        temp = ary[i];
        ary[i] = ary[j];
        ary[j] = temp;
      }
    }
  }
  console.log("ソート後:" + ary);
}

const sortedAry = bubbleSort([23, 13, 67, 123, 4, 11, 9]);

// 好きな理由
// 処理がシンプルで、頭の中でも処理内容を想像しやすい、実装もしやすい
// 不等号の向きを変えるだけで降順にもできる
