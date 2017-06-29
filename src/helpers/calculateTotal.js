const calculateTotal = values => {
  let total = 0

  for (var value in values) {
    total += values[value]
  }

  return total
}

export default calculateTotal
