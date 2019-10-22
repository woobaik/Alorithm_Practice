const parentheses = str => {
  const dic = {
    "{": "}",
    "[": "]",
    "(": ")"
  }

  const result = []
  for (let i = 0; i < str.length; i++) {
    if (dic[str[i]]) {
      result.push(str[i])
    } else {
      if (str[i] === dic[result[result.length - 1]]) {
        result.pop()
      } else {
        console.log(str[i])
        result.push(str[i])
      }
    }
  }

  return result.length === 0
}

parentheses("([]{})")
