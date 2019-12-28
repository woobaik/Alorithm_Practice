var getDecimalValue = function(head) {
  let sum = 0
  const arr = []
  let currentNode = head
  while (currentNode === null) {
    arr.push(currentNode.val)
    currentNode = currentNode.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[arr.length - 1 - i] * 2 ** i
  }
  return sum
}
