const defangIPaddr = address => {
  return address.replace(/[.]/g, "[.]")
}

defangIPaddr("255.100.50.0")
