function step(num) {
  for (let row = 0; row < num; row++) {
    let result = ""
    for (let col = 0; col < num; col++) {
      if (row >= col) {
        result += "#"
      } else {
        result += " "
      }
    }
    console.log(result)
  }
}
