function fibRec(n) {
  if (n < 2) {
    return n
  }
  let result = fibRec(n-1) + fibRec(n-2)
  return result

}

fibRec(8)