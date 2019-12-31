const steps = num => {
  for (let row = 0; row < num; row++) {
    let step = ""
    for (let col = 0; col < num; col++) {
      if (row >= col) {
        step += "#"
      } else {
        step += " "
      }
    }
    console.log(step)
    console.log(step.length)
  }
  return "undefined"
}

steps(3)
