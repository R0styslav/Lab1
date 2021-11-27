function quickSort(array) {
    if (array.length < 2) return array;
    let min = 1;
    let max = array.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = array[rand];
    const left = [];
    const right = [];
    array.splice(array.indexOf(pivot), 1);
    array = [pivot].concat(array);
    for (let i = 1; i < array.length; i++) {
      if (pivot > array[i]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

  var arr = [3,4,5,6,1,0,-4,12,-7,-33,33,4,54]
  console.log(quickSort(arr));
  