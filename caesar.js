const caesar = (sentence, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const lowered = sentence.toLowerCase()
  let result = ""
  for (let i = 0; i < sentence.length; i++) {
    position = alphabet.indexOf(lowered[i])
    let newPosition = (position + num) % 26

    if (sentence[i] === " ") {
      result += " "
    } else if (sentence[i] === sentence[i].toUpperCase()) {
      result += alphabet[newPosition].toUpperCase()
    } else {
      result += alphabet[newPosition]
    }
  }

  return result
}
caesar("abcdefgZTA", 26)
