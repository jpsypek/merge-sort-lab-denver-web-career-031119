const findMinAndRemoveSorted = (array) => {
  let min = array[0]
  let i = 0
  array.forEach((num, index) => {
    if (num < min) {
      min = num
      i = index
    }
  })
  array.splice(i,1)
  return min
}

const merge = (array1, array2) => {
  const newArray = []
  while(array1.length !== 0 && array2.length !== 0) {
    if (array1[0] < array2[0]) {
      newArray.push(findMinAndRemoveSorted(array1))
    } else {
      newArray.push(findMinAndRemoveSorted(array2))
    }
  }
  return newArray.concat(array1, array2)
}

const mergeSort = (array) => {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted

  if (array.length === 1) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
