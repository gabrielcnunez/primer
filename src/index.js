export function calculateTotal (items, tax) {
  let total = 0
  for (const item of items) {
    item.taxable ? total += item.price * (1 + Math.abs(tax)) : total += item.price
  }

  return total
}
